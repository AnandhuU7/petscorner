import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

import "./search-bar.css";
import logo from "../assets/images/logo2.jpg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Search = Input.Search;

export function SearchBar(): JSX.Element {
    const navigate = useNavigate();
    function onSearch(value: string) {
        if (value?.trim()?.length > 0) {
            navigate("/search/" + value);
        }
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
        </div>
    );
}
