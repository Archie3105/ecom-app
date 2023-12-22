import React from 'react'
import { Link } from "react-router-dom";
import Slider from "./Slider";
export default function Footer(props) {
  return (
    <>

      <section className="footer_section pt-5 pb-2 border-0" id="footer_section" style={{
        backgroundColor: props.mode === "dark" ? "#282c34" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}>
        <footer>
          <div className="container-fluid ps-4">
            <div className="row">
              <div className="col-md-3 col-6 pl-5 pl-small-15">
                <div className="footer_title" id='footer_logo'>
                  <Link to="/"><img src="assets/images/logo.png" width="150px"
                    className="img img-fluid" alt="logo" style={{
                      color: props.mode === "dark" ? "white" : "black",
                    }} /></Link>
                </div>
                <div>
                  Founded in 2017, Eternal.Code started with a simple yet ambitious vision — to redefine the way people experience Online Products. What began as a small endeavor has grown into a thriving eCommerce destination known for its curated collection, and customer-centric approach.
                </div>
              </div>
              <div className="col-md-3 col-6 ps-2">
                <div className="footer_title pt-5 mb-3 ps-4">
                  <h3>Quick Links</h3>
                </div>
                <div className="footer_links">
                  <ul >
                    <li><Link to="/about" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>About</Link></li>
                    <li><a href="#carouselExample" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Offers & Discounts</a></li>
                    <li><a href="#carouselExample" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Get Coupon</a></li>
                    <li><Link to="/contact" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6 ps-1">
                <div className="footer_title pt-5 mb-3 ps-4">
                  <h3>New Products</h3>
                </div>
                <div className="footer_links ">
                  <ul>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Food Products</a></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Fashion Accessories</a></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Man Accessories</a></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Toys For Kids</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-6 ps-1">
                <div className="footer_title pt-5 mb-3 ps-4">
                  <h3>Support</h3>
                </div>
                <div className="footer_links">
                  <ul>
                    <li><Link to="/FAQItem" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Frequently Asked Questions</Link></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Terms & Conditions</a></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Privacy Policy</a></li>
                    <li><a href="javascript:;" id="foot-link" style={{
                      color: props.mode === "dark" ? "white " : "black",
                    }}>Report a Payment Issue</a></li>
                  </ul>
                  </div>  
                  </div>
              
            </div>
          </div>
          <div className="back-top mx-2 nav justify-content-between d-flex" style={{
            backgroundColor: props.mode === "dark" ? "#282c34" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}>

             {/* <div className="container mt-4 "> */}
              <div className="social-icons mx-3 mt-2">
                <Link to="https://www.linkedin.com/in/abhishek-kumar-466962218/" target="_blank" >
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="https://github.com/Archie3105" target="_blank" >
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="https://www.instagram.com/official.eternal.code?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://twitter.com/archieabhi1"
                            target="_blank" rel="nofollow" class="social-link"><i class="fa-brands fa-twitter-square"></i></Link>
                {/* {/* Add more social media icons as needed -->  */}
              </div>
            {/* </div>  */}
            <div>
            <a id="topButton" href="#top" className="btn  btn-outline-secondary" role="button" >
              <img src="./assets/images/topArrow.png" alt="." style={{ width: "30px" }} />
            </a>
          </div>
          </div>
          <div className="border-top-light ">
            <h6 className="text-center mt-3">Copyright ©2020 All rights reserved by <span><strong>Abhishek Kumar</strong></span>
            </h6>
          </div>
        </footer>
      </section>

    </>
  )
}
