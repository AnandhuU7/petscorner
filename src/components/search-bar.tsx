import {
    MailOutlined,
    FacebookOutlined,
} from '@ant-design/icons';


import './search-bar.css';
import logo from '../assets/images/logo.png';

export function SearchBar(): JSX.Element {
    return (<div className={'search-bar'}>
        <div className={'spacer'}></div>
        <img src={logo} alt=''></img>
        <div className={'phone-number'}>
            +91 99466 664495
        </div>
        <div className={'email'}>
            anandhuachu@gmail.com
        </div>
        <div className={'social-icons'}>
            <MailOutlined />
            <FacebookOutlined />
         
        </div>
    </div>)
}