import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './customer.css'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'

import b2b from '../../assets/images/b2b.png'
import b2c from '../../assets/images/b2c.png'
import c2c from '../../assets/images/c2c-img.png'
import customerapp_img from '../../assets/images/customer-app.png'
import vendorapp_img from '../../assets/images/vendor-app.png'
import dashboard_img from '../../assets/images/dashboard-img.png'
import clint_img from '../../assets/images/client-img.png'

import customer_splash from '../../assets/images/customer-screen.png'
import easyTouse from '../../assets/images/easytouse.png'
import customerFeatuer from '../../assets/images/customer-feature.png'
import customerscreenshort from '../../assets/images/customer-screenshort.png'



import Slider from "react-slick";



class Customer extends  Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
          };
        return (
            <div>
          <section  className="customer-bg home-bg">
             <Navbar />
                <div className="container home-content">
                    <div className="row">
                        <div className="col s12 m5 l5 intro-content">
                            <h1 className="blue-text text-darken-1"> Lorem ipsum dolor sit amety ! </h1>
                            <p className="blue-text text-lighten-1">Gohub monitors application stabili ty, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.</p>
                            <div className="link-box">
                                <ul>

                                    <li>
                                    <Link to="#" className="bule-text text-darken-2 playstore-btn"> <i className="playstory-icon"></i>Play Store</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m7 l7">
                            <div className="image-box">
                                    <img src={customer_splash}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="crousel-box awsome_feature">
                <div className="container">
                    <div className="row">
                            <div className="col s12 m12 l12 crousel-text center-align">
                                <div>
                                     <h2 className="blue-text text-darken-1">Let us Pickji</h2>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                       <div className="col s12 m4 l4">
                            <div className="left-image yellow base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Safety</h5>
                                <p className="grey-text text-lighten-3">When Pickji is doing it for you be stress-free, as our delivery heroes undergo an intensive training to provide you with the best On-Demand Delivery Service. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image green base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Hassle-Free</h5>
                                <p className="grey-text text-lighten-3">Worry not, if your forgot your keys at office this evening ! We’ll pick ji –Without any hassles. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image blue darken-3">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Technology integrated</h5>
                                <p className="grey-text text-lighten-3">Our user friendly experience, will make you forget things more often ! Hereby connecting the dots and making life happier for you </p>
                            </div>
                       </div>
                    </div>
                    <div className="row second-box">
                       <div className="col s12 m4 l4">
                            <div className="left-image yellow base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Speedy</h5>
                                <p className="grey-text text-lighten-3">With Pickji being On-Demand, get your parcels picked up immediately and delivered right away at the touch of your fingertips. We’re Fast and Reliable. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image green base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Live-Tracking enabled</h5>
                                <p className="grey-text text-lighten-3">Tracking your parcels couldn’t be more simpler. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image blue darken-3">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Insured</h5>
                                <p className="grey-text text-lighten-3">As we thrive to bring your worries to an end, we Insure all your parcels ! </p>
                            </div>
                       </div>

                    </div>

                </div>

            </section>

            <section className="custom-app-box vendor-app-box app-featurebox">
                <div className="container">
                    <div className="row">
                    <div className="col s12 m6 l6">
                             <img src={customerFeatuer}></img>
                    </div>
                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1">Our Advanced Faetures</h2>
                            <p className="grey-text text-lighten-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus vitae quam fringilla.</p>

                            <div className="feature-list">
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Friendly deliveries</h4>
                                    <p className="grey-text text-lighten-3">We ensure, your deliveries carries a smile- always !</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Advanced Geocoding</h4>
                                    <p className="grey-text text-lighten-3">We ensure timeliness, by reaching to your address accurately</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Route Optimization</h4>
                                    <p className="grey-text text-lighten-3">We call it Power Route Optimization- to ensure smart rider allocation and real-time ETA</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>AirBnB of Warehousing Solutions @Rs 6</h4>
                                    <p className="grey-text text-lighten-3">We offer flexible and out-of-the-box Warehousing solutions.</p>
                                  </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
            <section className="custom-app-box customerservice-app-box padding-bottom0">
                <div className="container">
                    <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="customerscreent-text center-align">
                            <h2 className="blue-text text-darken-1">How to Pickji ?</h2>
                            <p className="grey-text text-lighten-5">Simply download our App, and we’ll be there to Pickji</p>
                        </div>
                    </div>
                    <div className="col s12 m12 l12">
                             <img src={customerscreenshort}></img>
                    </div>



                    </div>
                </div>
            </section>








                <Footer/>

</div>
        );
    }

}
export default Customer;
