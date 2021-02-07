import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './vendor.css'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
 

import customer_splash from '../../assets/images/vendorsplash-screen.png'
import easyTouse from '../../assets/images/easytouse.png'
import customerFeatuer from '../../assets/images/vendor-feature.png'
import customerscreenshort from '../../assets/images/vendor-screenshort.png'



import Slider from "react-slick";



class Vendor extends  Component {
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
                                     <h2 className="blue-text text-darken-1">Awesome Features</h2>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                       <div className="col s12 m4 l4">
                            <div className="left-image yellow base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Easy to use</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image green base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Download Anyway</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image blue darken-3">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">User Friendly</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
                            </div>
                       </div>
                    </div>
                    <div className="row second-box">
                       <div className="col s12 m4 l4">
                            <div className="left-image yellow base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Easy to use</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image green base">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">Download Anyway</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
                            </div>
                       </div>
                       <div className="col s12 m4 l4">
                            <div className="left-image blue darken-3">
                                <img src={easyTouse}></img>
                            </div>
                            <div className="right-decs">
                                <h5 className="grey-text text-lighten-2">User Friendly</h5>
                                <p className="grey-text text-lighten-3">It is a long esta blished fact that read erwill be distracted by to the reak dable content of a page. </p>
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
                                    <h4>Retina Ready</h4>
                                    <p className="grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus.</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Retina Ready</h4>
                                    <p className="grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus.</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Retina Ready</h4>
                                    <p className="grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus.</p>
                                  </div>
                                </div>
                                <div className="list-item">
                                 <i className="list-icon"></i>
                                  <div className="list-text">
                                    <h4>Retina Ready</h4>
                                    <p className="grey-text text-lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus.</p>
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
                            <h2 className="blue-text text-darken-1">Awesome Screenshots</h2>
                            <p className="grey-text text-lighten-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit metus vitae quam fringilla.</p>
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
export default Vendor;
