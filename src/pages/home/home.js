import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'

import b2b from '../../assets/images/b2b.png'
import b2c from '../../assets/images/b2c.png'
import c2c from '../../assets/images/c2c-img.png'
import customerapp_img from '../../assets/images/customer-app.png'
import vendorapp_img from '../../assets/images/vendor-app.png'
import dashboard_img from '../../assets/images/dashboard-img.png'
import clint_img from '../../assets/images/client-img.png'
import male_img from '../../assets/images/male-icon.jpg'


import Slider from "react-slick";



class Home extends  Component {
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
          <section  className="home-bg">
             <Navbar />
                <div className="container home-content">
                    <div className="row">
                        <div className="col s12 m5 l5 intro-content">
                            <h1> Say hello to smart deliveries!  </h1>
                            <p>Pickji is an On-Demand intra-city Premium door-to-door delivery service, with real time tracking. Now book your deliveries just with a few clicks ! To book your delivery now, download our App</p>
                            <Link className="login-btn  white-text waves-effect" to="#">GET STARTED </Link>
                        </div>
                        <div className="col s12 m8 l8">

                        </div>
                    </div>
                </div>
            </section>
            <section className="crousel-box">
                <div className="container">
                    <div className="row">
                            <div className="col s12 m12 l12 crousel-text center-align">
                                <div>
                                    <span> We Are Creative Agrncy</span>
                                    <h2 className="blue-text text-darken-1">Welcome to the smart delivery era ji.. </h2>
                                </div>
                            </div>
                    </div>
                    <div className="row">

                        <div className="col s12 m4 l4">
                            <div className="white box-white box-light center-align">
                                <div className="image-box">
                                <img src={b2b}></img>
                                </div>
                                <h3 className="grey-text text-lighten-2">Business to Business</h3>
                                <p className="grey-text text-lighten-3">Give a boost to your business, and spread your presence in the entire city . Technologically connecting the dots. </p>
                            </div>
                        </div>
                        <div className="col s12 m4 l4">
                            <div className="white box-white  center-align">
                                <div className="image-box">
                                <img src={b2c}></img>
                                </div>
                                <h3 className="grey-text text-lighten-2">Business to Customer</h3>
                                <p className="grey-text text-lighten-3">Reaching your client is now at your fingertips. What’s more, explore our ‘try & buy’ facet. Provide remarkable customer experiences by enabling on-demand, same day and scheduled delivery service ! </p>
                            </div>
                        </div>
                        <div className="col s12 m4 l4">
                            <div className="white box-white box-light center-align">
                                <div className="image-box">
                                <img src={c2c}></img>
                                </div>
                                <h3 className="grey-text text-lighten-2">Customer to Customer</h3>
                                <p className="grey-text text-lighten-3">Reaching one another couldn’t be simpler. Traffic hours, long cues - No more !Simply book your order, and let pickji do the rest.
 </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="custom-app-box">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 l6">
                             <img src={customerapp_img}></img>
                        </div>
                        <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1">Customer Services</h2>
                            <p className="grey-text text-lighten-5">From those hunger pangs, to forgetting those keys at home, or forgot to buy the stationery for your child.. (gifts, marriage cards,cakes,flowers, …) </p>
                            <p className="grey-text text-lighten-5">We’re here to make your life simple and bring back that lost smile ! Avoid those traffic jams and long ques..your parcel is just a few clicks away.For smart-delivery: Download the App</p>
                            <div className="link-box">
                                <ul>
                                    <li>
                                        <Link to="/Customer" className="bule-text text-darken-2">Read More <i className="arrow-more"></i> </Link>
                                    </li>
                                    <li>
                                    <Link to="#" className="bule-text text-darken-2"> <i className="playstory-icon"></i>Play Store</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="custom-app-box vendor-app-box">
                <div className="container">
                    <div className="row">
                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1">Vendor Services</h2>
                            <p className="grey-text text-lighten-5">You’ve got it, and we know it. It’s time to make the city aware of your specialties’.We’ve curated just what you’ve always been waiting for –On-Demand orders, with real-time tracking.</p>
                            <p className="grey-text text-lighten-5">Vendors, we’re here to give your clients that unique experience you and your clients always wished for !Revolutionize your business now:- Download the App here and Let us Pickji 
</p>
                            <div className="link-box">
                                <ul>
                                    <li>
                                        <Link to="/vendor" className="bule-text text-darken-2">Read More <i className="arrow-more"></i> </Link>
                                    </li>
                                    <li>
                                    <Link to="#" className="bule-text text-darken-2"> <i className="playstory-icon"></i>Play Store</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6 l6">
                             <img src={vendorapp_img}></img>
                        </div>

                    </div>
                </div>
            </section>
            <section className="custom-app-box customerservice-app-box">
                <div className="container">
                    <div className="row">
                    <div className="col s12 m6 l6">
                             <img src={vendorapp_img}></img>
                    </div>

                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1">Driver Services</h2>
                            <p className="grey-text text-lighten-5">“Delivery Heroes” we’re finally here. Become an entrepreneur, and obtain financial freedom. Explore your city, and get the freedom to earn as you want, when you want and wherever you want !</p>
                            <p className="grey-text text-lighten-5">We want to empower you by making you the best rider of the city. Together we can do it.Join our family now– Download the app and register yourself with us</p>
                            <div className="link-box">
                                <ul>
                                    <li>
                                        <Link to="/driver" className="bule-text text-darken-2">Read More <i className="arrow-more"></i> </Link>
                                    </li>
                                    <li>
                                    <Link to="#" className="bule-text text-darken-2"> <i className="playstory-icon"></i>Play Store</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="custom-app-box vendor-app-box dashboard-services">
                <div className="container">
                    <div className="row">
                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1"> Services</h2>
                            <p className="grey-text text-lighten-5">Gain more !Pickji provides you with a seamlessly user friendly experience, with easy System integrated solutions and API integration.</p>
                            <p className="grey-text text-lighten-5">Enjoy Real-Time tracking, Detailed Reports and Resource Management for all your Delivery and Logistic needs.</p>
                            <div className="link-box">
                                <ul>
                                    <li>
                                        <Link to="#" className="bule-text text-darken-2">Read More <i className="arrow-more"></i> </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col s12 m6 l6 service-img">
                             <img src={dashboard_img}></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className="testimonial-box">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12 center-align">
                        <h2 className="blue-text text-darken-1">Client’s Feedback</h2>
                        <p className="testi-content grey-text text-lighten-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at .</p>
                    </div>
                </div>
                <div className="row">
                <div className="col s12 m12 l12 center-align">
                <Slider {...settings} className="testimonial-outer">
                        <div className="testi-box">
                         <div className="top-box">
                            <div className="test-img">
                            <img src={male_img}></img>
                            </div>
                            <h4>GANGURAM</h4>
                            <span className="grey-text text-lighten-3"></span>
                         </div>
                        <p className="grey-text text-lighten-3">It was a pleasure meeting you people. I have no complaints regarding the service that you have provided to us since the beginning. It has been fantastic in my opinion. Although the only problem that w…</p>
                        </div>
                        <div className="testi-box">
                         <div className="top-box">
                            <div className="test-img">
                            <img src={male_img}></img>
                            </div>
                            <h4>Urban Rasoi</h4>
                            <span className="grey-text text-lighten-3"></span>
                         </div>
                        <p className="grey-text text-lighten-3">If UrbanRasoi can proudly say that it delivers across kolkata, the credit goes entirely to Pickji. We are proud to partner with pickji for delivering our meals on time. Being a food-tech company, it w…</p>
                        </div>
                        {/* <div className="testi-box">
                         <div className="top-box">
                            <div className="test-img">
                            <img src={clint_img}></img>
                            </div>
                            <h4>Vin Disel</h4>
                            <span className="grey-text text-lighten-3">CEO at Pixelpro</span>
                         </div>
                        <p className="grey-text text-lighten-3">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since the when unknown printer took a galley of type and scrambled it to make a type specimen andard dummy. ext ever since the when unknown printer.</p>
                        </div>
                        <div className="testi-box">
                         <div className="top-box">
                            <div className="test-img">
                            <img src={clint_img}></img>
                            </div>
                            <h4>Vin Disel</h4>
                            <span className="grey-text text-lighten-3">CEO at Pixelpro</span>
                         </div>
                        <p className="grey-text text-lighten-3">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since the when unknown printer took a galley of type and scrambled it to make a type specimen andard dummy. ext ever since the when unknown printer.</p>
                        </div>
                        <div className="testi-box">
                         <div className="top-box">
                            <div className="test-img">
                            <img src={clint_img}></img>
                            </div>
                            <h4>Vin Disel</h4>
                            <span className="grey-text text-lighten-3">CEO at Pixelpro</span>
                         </div>
                        <p className="grey-text text-lighten-3">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since the when unknown printer took a galley of type and scrambled it to make a type specimen andard dummy. ext ever since the when unknown printer.</p>
                        </div> */}


                 </Slider>

                </div>

            </div>


            </div>


            </section>





                <Footer/>

</div>
        );
    }

}
export default Home;
