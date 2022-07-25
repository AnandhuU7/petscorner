import { Button, Checkbox, Form, Input, message, Select } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/global.context";
import { registrationUser } from "../../services/user.service";
import { IUser } from "../../types/users.types";
import "./style.css";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export function Registration() {
    const navigate = useNavigate();
    const { setUser } = useContext(GlobalContext);

    async function onFinish(values: any) {
        console.log(values);
        const user: IUser = {
            name: values.name,
            email: values.email,
            gender: values.gender,
            phonenumber: values.phonenumber,
            address: values.address,
            password: values.password,
        };
        try {
            const response = await registrationUser(user);
            console.log(response);
            const _user: IUser = response.data;
            if (_user) {
                setUser(_user);
                navigate("/home");
            }
        } catch (err) {
            message.error("Type correct format");
            console.log(err);
        }
    }

    const [form] = Form.useForm();

    const prefixSelector = (
        <Form.Item name='prefix' noStyle>
            <Select style={{ width: 70 }}>
                <Option value='91'>+91</Option>
                <Option value='92'>+92</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div className="registration">
        <Form {...formItemLayout} form={form} name='register' onFinish={onFinish} initialValues={{}} scrollToFirstError>
            <Form.Item name={"name"} label='Name' rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item
                name='email'
                label='E-mail'
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='password'
                label='Password'
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error("The two passwords that you entered do not match!"));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name='gender' label='Gender' rules={[{ required: true, message: "Please select gender!" }]}>
                <Select placeholder='select your gender'>
                    <Option value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                    <Option value='other'>Other</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name='phonenumber'
                label='Phone Number'
                rules={[{ required: true, message: "Please input your phone number!" }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} maxLength={10} minLength={10}/>
            </Form.Item>

            <Form.Item name='address' label='Address' rules={[{ required: true, message: "Please input Intro" }]}>
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href=''>agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit' className="register">
                    Register
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
}
