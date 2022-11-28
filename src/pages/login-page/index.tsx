import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import Password from "antd/lib/input/Password";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/global.context";
import { loginUser } from "../../services/user.service";
import { ILoginCreds, IUser } from "../../types/users.types";
import "./style.css";

export function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useContext(GlobalContext);

    async function onFinish(values: any) {
        const creds: ILoginCreds = {
            email: values.email,
            password: values.password,
        };
        try {
            const response = await loginUser(creds);
            console.log(response);
            const user: IUser = response.data;

            if (user) {
                setUser(user);
                navigate("/home");
            }
        } catch (err) {
            message.error("Invalid email or password");
            console.log(err);
        }
    }

    return (
        <div className='login-page'>
            <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name='email' rules={[{ required: true, message: "Please input your Email!" }]}>
                    <Input prefix={<MailOutlined />} placeholder='Email' />
                </Form.Item>
                <Form.Item name='password' rules={[{ required: true, message: "Please input your Password!" }]}>
                    <Input
                        prefix={<LockOutlined className='site-form-item-icon' />}
                        type='password'
                        placeholder='Password'
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    {/* <Link className='login-form-forgot' to='#'>
                        Forgot password
                    </Link> */}
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Login
                    </Button>

                    <Link className='login-form-forgot' to={"/register"}>
                        Register now
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
