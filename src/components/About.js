import React, { useState } from "react";

export default function About() {
  return (
    <>
      <section className="about py-5 my-5" id="about">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">About Us</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <img src="assets/images/logo.png" className="img img-fluid rounded shadow-lg"
                    alt="a bout us image" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h3>Our Mission</h3>
                  </div>
                  <div className="about_text mt-sm-5">
                    <p>
                    Welcome to "Eternal.Code", where passion meets quality in the world of Grocery & all product. At "Eternal.Code", we believe in delivering more than just products; we're dedicated to providing an unparalleled shopping experience that combines style, innovation, and customer satisfaction.
                    </p>
                    <p>
                    At "Eternal.Code", our mission is to make India's most popular online shopping platform. Whether it's bringing you the latest trends, ensuring product excellence, or providing top-notch customer support, every aspect of our business is driven by a commitment to excellence.
                    </p>
                    <p>
                    At "Eternal.Code", our mission is to make India's most popular online shopping platform. Whether it's bringing you the latest trends, ensuring product excellence, or providing top-notch customer support, every aspect of our business is driven by a commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* ==============testimonial starts here==============  */}
            <section className="text-center bg-info my-5 py-5 rounded">
              <div className="col-md-10 col-10 mx-auto">
                {/* <!-- Carousel Wrapper --> */}
                <div id="carousel-example-1" className="carousel slide carousel-fade"
                  data-ride="carousel"
                  data-interval="false">
                  {/* <!--Slides--> */}
                  <div className="carousel-inner">
                    {/* <!--First slide--> */}
                    <div className="carousel-item active">
                      <div className="testimonial">
                        {/* <!--Avatar--> */}
                        <div className="avatar mx-auto mb-4">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle img-fluid w-50"
                            alt="First sample avatar image" />
                        </div>
                        {/* <!--Content--> */}
                        <p>
                          <i className="fas fa-quote-left"></i> Meet the passionate minds behind "Eternal.Code". Our team is a diverse group of individuals who share a common goal — to provide you with an exceptional shopping experience. From our designers and product curators to our customer support team, each member plays a crucial role in bringing our vision to life.
                        </p>
                        <h4 className="font-weight-bold">Abhishek Kumar</h4>
                        <h6 className="font-weight-bold my-3">Founder at ET
                          Company</h6>
                        {/* <!--Review--> */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                         <i className="fas fa-star-half-alt blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--First slide--> */}
                    {/* <!--Second slide--> */}
                    <div className="carousel-item">
                      <div className="testimonial">
                        {/* <!--Avatar--> */}
                        <div className="avatar mx-auto mb-4">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle img-fluid w-50"
                            alt="Second sample avatar image" />
                        </div>
                        {/* <!--Content--> */}
                        <p>
                          <i className="fas fa-quote-left"></i> Nemo enim ipsam
                          voluptatem quia
                          voluptas sit
                          aspernatur aut
                          odit
                          aut fugit, sed quia consequuntur magni dolores eos qui
                          ratione
                          voluptatem sequi
                          nesciunt. Neque
                          porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                          consectetur,
                          adipisci
                          velit,
                          sed quia
                          non numquam eius modi tempora incidunt ut labore. </p>
                        <h4 className="font-weight-bold">Maria Kate</h4>
                        <h6 className="font-weight-bold my-3">Photographer at Studio
                          LA</h6>
                        {/* Review */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--Second slide-->
                      <!--Third slide--> */}
                    <div className="carousel-item">
                      <div className="testimonial">
                        {/* Avatar */}
                        <div className="avatar mx-auto mb-4">
                          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="rounded-circle img-fluid w-50"
                            alt="Third sample avatar image" />
                        </div>
                        {/* Content */}
                        <p>
                          <i className="fas fa-quote-left"></i> Duis aute irure dolor in
                          reprehenderit
                          in
                          voluptate
                          velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non
                          proident,
                          sunt in
                          culpa qui officia deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde
                          omnis
                          iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium.</p>
                        <h4 className="font-weight-bold">John Doe</h4>
                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                        {/* Review */}
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="fas fa-star blue-text"> </i>
                        <i className="far fa-star blue-text"> </i>
                      </div>
                    </div>
                    {/* <!--Third slide--> */}
                  </div>
                  
                </div>
                {/* <!-- Carousel Wrapper --> */}
              </div>
            </section>
            {/* ==============testimonial ends here==============  */}
          </div>
          <div className="row mt-5">
            <div className="col-md-3 col-6">
              <div className="border border-dark rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="far fa-credit-card fa-3x"></i>
                </div>
                <div>
                  <h5>Credit Card Support</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-small-2 mb-small-2">
              <div className="border border-primary rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-laptop fa-3x"></i>
                </div>
                <div>
                  <h5>Online Order</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-shipping-fast fa-3x"></i>
                </div>
                <div>
                  <h5>Fast Delivery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border border-danger rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-gifts fa-3x"></i>
                </div>
                <div>
                  <h5>Product with Gift</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
