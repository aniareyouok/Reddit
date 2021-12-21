import React from "react";
import {Link} from "react-router-dom";
import Logo_Name from '../assets/reddit_logo_name.png'

function HeaderNav() {

    return (
        <div className="wrapper">
            <img src={Logo_Name} alt=""/>
                <nav>
                    <Link to="/">Reddit App</Link>
                    <Link to="/home">Home Page </Link>
                    <Link to="/post">Post Page </Link>
                </nav>
        </div>
)}

export default HeaderNav;
