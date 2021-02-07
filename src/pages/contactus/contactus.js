import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './contactus.css'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'

import find from '../../assets/images/map-icon.png'
import call from '../../assets/images/call-icon.png'
import mail from '../../assets/images/mail-icon.png'
import customerapp_img from '../../assets/images/customer-app.png'
import vendorapp_img from '../../assets/images/vendor-app.png'
import dashboard_img from '../../assets/images/dashboard-img.png'
import contact_img from '../../assets/images/contact-img.png'
import ceoimg from '../../assets/images/ceo.png'


import Slider from "react-slick";



class Contactus extends  Component {
    render() {


        return (
            <div>
          <section  className="home-bg about_us main-contact-section">
             <Navbar />

                    <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="contact-title">
                <h1>Contact Us</h1>
                <p>Contact your pickji, Pickji promise is here to help you resolve all your queries:-</p>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="contact-imghold">
                <img src={contact_img}></img>
              </div>
            </div>
          </div>
          </div>

            </section>

            <section>
                <div className="container">
                <div className="contact-address-location">
            <div className="row">
              <div className="col s12 m4">
                <div className="contact-address-pro">
                  <div className="icon-imghold">
                  <img src={find} alt="Location Map"></img>
                  </div>
                  <h6>Find Us</h6>
                  <p>4Hd- 10 Avenue, NY 95771 <br></br>United States</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="contact-address-pro">
                  <div className="icon-imghold">
                  <img src={call}  alt="Call Now"></img>
                  </div>
                  <h6>Make a Call</h6>
                  <p>+91-9686868574 <br></br>+91-9686868574</p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="contact-address-pro">
                  <div className="icon-imghold">
                  <img src={mail} alt="Mail"></img>
                  </div>
                  <h6>Send a Mail</h6>
                  <p>info@pickji.com <br></br>support@pickji.com</p>
                </div>
              </div>
            </div>
          </div>
                </div>
            </section>

            <section>
                <div className="container">
                <div className="contact-form-pro">
            <h3 className="center-align">Have Any Question?</h3>
            <form className="formContact">

              <div className="row">
                <div className="col s12 m6">
                  <div className="form-fields">
                    <input type="text" value="" name="" placeholder="Enter Name"></input>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="form-fields">
                    <input type="email" value="" name="" placeholder="info@pickji.com"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="form-fields">
                    <input type="text" value="" name="" placeholder="Your Website (Optional)"></input>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="form-fields">
                    <input type="text" value="" name="" placeholder="Your Mobile Number"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12">
                  <div className="form-fields">
                    <textarea id="" className="" placeholder="Your Message" ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12">
                  <div className="form-fields center-align">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </div>

            </form>
          </div>

                </div>

            </section>









                <Footer/>

</div>
        );
    }

}
export default Contactus;
