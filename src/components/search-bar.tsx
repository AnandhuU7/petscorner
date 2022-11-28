import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

import "./search-bar.css";
import logo from "../assets/images/logo2.jpg";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/global.context";

const Search = Input.Search;

export function SearchBar(): JSX.Element {
    const { user , setUser } = useContext(GlobalContext);
    
    const navigate = useNavigate();
    function onSearch(value: string) {
        if (value?.trim()?.length > 0) {
            navigate("/search/" + value);
        }
    }
    function onLogout() {
        setUser(null);
        navigate("/login");
    }
    return (
        <div className={"search-bar"}>
            <Link to={`/home`}>
                <img src={logo} alt='' className={"logo"}></img>
            </Link>
            <div className={"spacer"}></div>
            <Search placeholder='input search text' onSearch={onSearch} enterButton className={"search-input"}></Search>
            
            {!user && 
                <Link className={"user-icon"} to={`/login`}>
                <UserOutlined></UserOutlined>
            </Link>}
            {user && 
                <div onClick={onLogout} className="user-logout">
                <LogoutOutlined></LogoutOutlined>
            </div>}
        </div>
    );
}
