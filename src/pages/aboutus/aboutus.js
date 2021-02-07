import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './aboutus.css'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'

import b2b from '../../assets/images/b2b.png'
import b2c from '../../assets/images/b2c.png'
import c2c from '../../assets/images/c2c-img.png'
import customerapp_img from '../../assets/images/customer-app.png'
import vendorapp_img from '../../assets/images/vendor-app.png'
import dashboard_img from '../../assets/images/dashboard-img.png'
import clint_img from '../../assets/images/client-img.png'
import ceoimg from '../../assets/images/ceo.png'


import Slider from "react-slick";



class Aboutus extends  Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
          <section  className="home-bg about_us">
             <Navbar />
                <div className="container home-content">
                    <div className="row">
                        <div className="col s12 m5 l5 intro-content">
                            <h1 className="blue-text text-darken-1"> About Pickji </h1>
                            <p className="blue-text text-lighten-1">PickJi is the one-stop solution for all your delivery requirements, anywhere in the city.</p>

                        </div>
                        <div className="col s12 m8 l8">

                        </div>
                    </div>
                </div>
            </section>
            <section className="crousel-box about-crousel">
                <div className="container">
                    <div className="row">
                            <div className="col s12 m12 l12 crousel-text">

                                  <h2 className="blue-text text-darken-1">What we are ? </h2>
                                  <p className="blue-text text-lighten-1">We deliver a host of items like documents, goods, medicines, grocery, electronics, clothes (from malls), gift items, packed food, dried fruits, tiffin, prescriptions, reports, etc.
We cater to all professionals and to all industries such as fashion boutiques, optical stores, tuition centres, event companies, diagnostic centres, hostels, exhibitions, schools, travel agencies, food joints, etc. </p>
                                  <p className="blue-text text-lighten-1">Leave it up to us to solve all the logistical hassles that your business may face on a daily basis. It’s time to minimise costs, maximise efficiency and optimise your business.
 </p>

                            </div>
                            <div className="row">

                       <div className="col s12 m4 l4">
                           <div className="white box-white  ">
                               <div className="image-box">
                               <img src={b2b}></img>
                               </div>
                               <div className="image-decs">
                                <h3 className="grey-text text-lighten-2">Business to Business</h3>
                                <p className="grey-text text-lighten-3">It is a long established fact that read distracted by </p>
                               </div>
                           </div>
                       </div>
                       <div className="col s12 m4 l4">
                           <div className="white box-white  ">
                               <div className="image-box">
                               <img src={b2c}></img>
                               </div>
                               <div className="image-decs">
                               <h3 className="grey-text text-lighten-2">Business to Customer</h3>
                               <p className="grey-text text-lighten-3">It is a long established fact that read distracted by </p>
                                </div>
                           </div>
                       </div>
                       <div className="col s12 m4 l4">
                           <div className="white box-white  ">
                               <div className="image-box">
                               <img src={c2c}></img>
                               </div>
                               <div className="image-decs">
                               <h3 className="grey-text text-lighten-2">Business to Business</h3>
                               <p className="grey-text text-lighten-3">It is a long established fact that read distracted by  </p>
                               </div>
                           </div>
                       </div>
                   </div>
                    </div>

                </div>

            </section>

            <section className="custom-app-box customerservice-app-box aboutceo-box">
                <div className="container">
                <div className="row">
                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1"> Abhishek Jalan</h2>
                            <span>CEO of Pickji</span>
                            <p className="blue-text text-lighten-1">Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.  Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features</p>
                            <p className="blue-text text-lighten-1">Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.</p>

                        </div>
                        <div className="col s12 m6 l6 service-img">
                             <img src={ceoimg}></img>
                        </div>

                    </div>
                    <div className="row second-ceo">
                    <div className="col s12 m6 l6 service-img">
                             <img src={ceoimg}></img>
                        </div>

                    <div className="col s12 m6 l6 custom-content">
                            <h2 className="blue-text text-darken-1"> Abhishek Jalan</h2>
                            <span>CEO of Pickji</span>
                            <p className="blue-text text-lighten-1">Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.  Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features</p>
                            <p className="blue-text text-lighten-1">Gohub monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs.</p>

                        </div>


                    </div>


                </div>
            </section>



            <section className="testimonial-box aboutout-team">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l12 center-align">
                        <h2 className="blue-text text-darken-1">Our Team</h2>
                        <p className="testi-content blue-text text-lighten-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                    </div>
                </div>
            </div>
            <div className="oureSlider">
                    <div className=" center-align">
                    <Slider {...settings} className="testimonial-outer">
                        <div className="text-data">
                          <div className="testi-box">
                            <div className="top-box">
                                <div className="test-img">
                                <img src={clint_img}></img>
                                </div>
                                <h4>Nishtha Baweja</h4>
                                <span className="blue-text text-lighten-1">Product Owner</span>
                            </div>
                            <p className="grey-text text-lighten-3">I am an experienced Product Owner with a demonstrated history of working in the logistics and supply chain industry.</p>
                            </div>
                            </div>
                            <div className="text-data">
                            <div className="testi-box">
                            <div className="top-box">
                                <div className="test-img">
                                <img src={clint_img}></img>
                                </div>
                                <h4>Sarbjot Singh</h4>
                                <span className="blue-text text-lighten-1">Software Engineer </span>
                            </div>
                            <p className="grey-text text-lighten-3">I’m a Android Application Developer with 5+ years of experience in commercial projects. I am a fan of Android technology and programming.</p>
                            </div>
                            </div>
                            <div className="text-data">
                            <div className="testi-box">
                            <div className="top-box">
                                <div className="test-img">
                                <img src={clint_img}></img>
                                </div>
                                <h4>Ankit Manchanda</h4>
                                <span className="blue-text text-lighten-1">Software Engineer </span>
                            </div>
                            <p className="grey-text text-lighten-3">I am a MEAN Stack developer with 2+ year of experience in same, currently living in Chandigarh, India.</p>
                            </div>
                            </div>
                            <div className="text-data">
                            <div className="testi-box">
                            <div className="top-box">
                                <div className="test-img">
                                <img src={clint_img}></img>
                                </div>
                                <h4>Avnish Maurya</h4>
                                <span className="blue-text text-lighten-1">Ux & Ui Design  </span>
                            </div>
                            <p className="grey-text text-lighten-3">I’m a UX Ui designer and Frontend Developer with 5+ years of experience in commercial projects.</p>
                            </div>
                            </div>
                            <div className="text-data">
                            <div className="testi-box">
                            <div className="top-box">
                                <div className="test-img">
                                <img src={clint_img}></img>
                                </div>
                                <h4>Rajat Modgil</h4>
                                <span className="blue-text text-lighten-1">Testing</span>
                            </div>
                            <p className="grey-text text-lighten-3">I’m a UX Ui designer and Frontend Developer with 5+ years of experience in commercial projects.</p>
                            </div>
                            </div>


                    </Slider>
                    </div>
                </div>

            </section>





                <Footer/>

</div>
        );
    }

}
export default Aboutus;
