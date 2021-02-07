import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

import image from '../../assets/images/logo.png';
import flipkart_logo from '../../assets/images/flipkart-logo.png';
import myntra_logo from '../../assets/images/myntra-logo.png';
import dominos_logo from '../../assets/images/dominos-logo.png';
import medlife_logo from '../../assets/images/medlife-logo.png';
import amazon_logo from '../../assets/images/amazon.png';




import Slider from "react-slick";

class Footer extends  Component {
    render() {
        var settings = {
            
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 8,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 4
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                }
              ]
          };

        return (
            <div>
                <section className="our_clients">
                <Slider {...settings}>
                   
                        <div className="client-logo">
                             <img src={flipkart_logo}></img>
                        </div>
                   
                   
                        <div className="client-logo">
                             <img src={myntra_logo}></img>
                        </div>
                   
                    
                        <div className="client-logo">
                             <img src={dominos_logo}></img>
                        </div>
               
                        <div className="client-logo">
                             <img src={medlife_logo}></img>
                        </div>
                     
                        <div className="client-logo">
                             <img src={amazon_logo}></img>
                        </div>
                        <div className="client-logo">
                             <img src={flipkart_logo}></img>
                        </div>
                   
                   
                        <div className="client-logo">
                             <img src={myntra_logo}></img>
                        </div>
                   
                    
                        <div className="client-logo">
                             <img src={dominos_logo}></img>
                        </div>
                        <div className="client-logo">
                             <img src={flipkart_logo}></img>
                        </div>
                   
                   
                        <div className="client-logo">
                             <img src={myntra_logo}></img>
                        </div>
                   
                    
                        <div className="client-logo">
                             <img src={dominos_logo}></img>
                        </div>

                    </Slider>
                </section>
                <footer className="footer-main">
                    <div className="container ">
                        <div className="row">
                            <div className="col s12 m3 l3 footer-logo">
                                <Link to="#"><img src={image}></img> </Link>
                                <Link to="#">info@pickji.com</Link>
                                <ul>
                                    <li> <Link to="#" className="fbicon"></Link> </li>
                                    <li> <Link to="#" className="tweetcon"></Link> </li>
                                    <li> <Link to="#" className="instacon"></Link> </li>
                                    <li> <Link to="#" className="linkdcon"></Link> </li>

                                </ul>
                            </div>
                            <div className="col s12 m3 l3 footer-nav">
                            <h5>Navigation</h5>
                                <ul >
                                    <li> <Link to="/" className="grey-text text-lighten-3"> Home </Link> </li>
                                    <li> <Link to="/aboutus" className="grey-text text-lighten-3"> About us </Link> </li>
                                    <li> <Link to="#" className="grey-text text-lighten-3"> Blog </Link> </li>
                                    <li> <Link to="/contactus" className="grey-text text-lighten-3"> Contact us </Link> </li>

                                </ul>
                            </div>
                            <div className="col s12 m3 l3 footer-nav">
                            <h5>Services</h5>
                                <ul >
                                    <li> <Link to="/Customer" className="grey-text text-lighten-3"> Customer </Link> </li>
                                    <li> <Link to="/vendor" className="grey-text text-lighten-3"> Vendor </Link> </li>
                                    <li> <Link to="/driver" className="grey-text text-lighten-3"> Driver </Link> </li>
                                    <li> <Link to="#" className="grey-text text-lighten-3"> Sign Up </Link> </li>

                                </ul>
                            </div>
                            <div className="col s12 m3 l3 footer-nav">
                                <h5>Newsletter</h5>
                                <p className="grey-text text-lighten-3">It is a long established fact tha eaderi will be distr acted by the . readable content of a page when looking at .</p>
                                <div className="newsletter">
                                <form>
                                                                 
                                    <input type="text" name="name" />
                                    <button><i className="sendicon"></i></button>
                                     
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container bottom-footer">
                        <div className="row">
                            <div className="col s12 m5 l5">
                                <p className="grey-text text-lighten-3">Copyright 2018 Ⓒ Pickji All Right Reserved</p>
                            </div>
                            <div className="col s12 m7 l7">
                            <ul >
                                    <li> <Link to="#" className="grey-text text-lighten-3"> Privacy & Policy </Link> </li>
                                    <li> <Link to="#" className="grey-text text-lighten-3"> Faq </Link> </li>
                                    <li> <Link to="#" className="grey-text text-lighten-3"> Terms </Link> </li> 

                                </ul>
                            </div>
                        </div>

                    </div>

                </footer>
              </div>
        );
    }

}

export default Footer;