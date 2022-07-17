import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";

import "./search-bar.css";
import logo from "../assets/images/logo2.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Search = Input.Search;

export function SearchBar(): JSX.Element {
    function onSearch(value: string) {
        console.log(value);
    }
    return (
        <div className={"search-bar"}>
            <Link to={`/home`}>
                <img src={logo} alt='' className={"logo"}></img>
            </Link>
            <div className={"spacer"}></div>
            <Search placeholder='input search text' onSearch={onSearch} enterButton className={"search-input"}></Search>
            <Link className={"user-icon"} to={`/login`}>
                <UserOutlined></UserOutlined>
            </Link>
            <ShoppingCartOutlined className={"cart-icon"}></ShoppingCartOutlined>
        </div>
    );
}
