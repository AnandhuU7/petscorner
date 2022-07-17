import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

export function LoginPage() {
    // const [isLoggedIn, setLoggedIn] = usePersist("logged-in", false);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         navigate("/home");
    //     } else {
    //         navigate("/logout");
    //     }
    // }, [isLoggedIn]);

    function onFinish(values: any) {
        // console.log("Received values of form: ", values);
        // setLoggedIn(true);
    }

    return (
        <div className='login-page'>
            <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name='username' rules={[{ required: true, message: "Please input your Username!" }]}>
                    <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
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

                    <Link className='login-form-forgot' to='#'>
                        Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    Or
                    <Link className='login-form-forgot' to='#'>
                        register now!
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}