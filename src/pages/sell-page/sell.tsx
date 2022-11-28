import { FontColorsOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, DatePicker, Upload, message } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/global.context";
import { createSell } from "../../services/sell.service";
import { ISell } from "../../types/sell.types";
import "./style.css";

const { RangePicker } = DatePicker;
const { TextArea } = Input;


export function SellPage() {
    const { user } = useContext(GlobalContext);
    async function onFinish(values: any) {
        console.log(values);
        const bodyFormData = new FormData();

        bodyFormData.append("email", user?.email || '');
        bodyFormData.append("breed", values.breed);
        bodyFormData.append("type", values.type);
        bodyFormData.append("date", values.date);
        bodyFormData.append("description", values.description);
        bodyFormData.append("contactus", values.contactus);
        bodyFormData.append("image", values.image?.file?.originFileObj);
        try {
            const response = await createSell(bodyFormData);
            console.log(response);
            const sell: ISell = response.data;
            if (sell) {
                message.success("Successfully!!!!");
            }
        } catch (err) {
            message.error("Failed to create post!!!!");
            console.log(err);
        }
    }

    function dummyRequest({ file, onSuccess }: any) {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }


    return (
        <div className="sellpage">
            <Form
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout='horizontal'
                className="sellpage-form"
            // initialValues={{ disabled: componentDisabled }}
            // onValuesChange={onFormLayoutChange}
            // disabled={componentDisabled}
            >
                <Form.Item label='Breed Name' name='breed'>
                    <Input />
                </Form.Item>
                <Form.Item label='Type' name='type'>
                    <Select>
                        <Select.Option value='dog'>Dog</Select.Option>
                        <Select.Option value='cat'>Cat</Select.Option>
                        <Select.Option value='rabbit'>Rabbit</Select.Option>
                        <Select.Option value='bird'>Birds</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label='DatePicker' name='date'>
                    <DatePicker />
                </Form.Item>

                <Form.Item label='Description' name='description'>
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label='Contact Us' name='contactus'>    
                        <TextArea className="danger-input" rows={4} placeholder='*Contacts will show in latest page!!!!!'/>
                </Form.Item>


                <Form.Item label='Upload' name='image'>
                    <Upload customRequest={dummyRequest} maxCount={1} multiple={false} listType='picture-card'>
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>

                <Form.Item label='' colon={false}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
