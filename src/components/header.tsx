
import {
    MailOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined

} from '@ant-design/icons';
import './header.css';

export function AppHeader(): JSX.Element {
    return (<div className={'header'}>
        <div className={'spacer'}></div>
        <div className={'phone-number'}>
            +91 99466 664495
        </div>
        <div className={'email'}>
            anandhuachu@gmail.com
        </div>
        <div className={'social-icons'}>
            <MailOutlined />
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
        </div>
    </div>)
}