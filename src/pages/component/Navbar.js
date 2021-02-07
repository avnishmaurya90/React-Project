import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

import image from '../../assets/images/logo.png'
class Navbar extends  Component {
    render() {
        return (
            <header className="container ">
                <div className="row">
                    <div className="col s12 m4 l4">
                        <Link to="#"><img src={image}></img> </Link>
                    </div>
                    <div className="col s12 m8 l8 top-menu responsive-show">
                        <ul className="responsive-menu">
                            <li><Link to="#"><i class="material-icons">menu</i></Link></li>
                        </ul>
                        <ul className="main_menu">
                            <li> <Link to="/" className="blue-text text-darken-1"> Home </Link> </li>
                            <li> <Link to="/customer" className="blue-text text-darken-1"> Customer </Link> </li>
                            <li> <Link to="/vendor" className="blue-text text-darken-1"> Vendor </Link> </li>
                            <li> <Link to="/driver" className="blue-text text-darken-1"> Driver </Link> </li>
                            <li> <Link to="#" className="login-btn  white-text waves-effect"> Signin </Link> </li>

                        </ul>
                    </div>
                 </div>
            </header>
        );
    }

}

export default Navbar;