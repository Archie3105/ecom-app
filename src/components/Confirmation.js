import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Confirmation(props) {
    return (
        <>
            <section className="order_confirmation py-5 my-5" id="order_confirmation">
                <div className="container ">
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">order confirmation</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <div>
                                <img src="assets/images/success_tick.png" className="img img-fluid "  alt="image"style={{width:"6em"}} />
                            </div>
                            <div>
                                <h2>Thankyou for your purchase!</h2>
                                <h6>A confirmation email has been sent to &nbsp; 
                                    <b>archie_andrews@gmail.com</b></h6>
                                <h6><span className="mr-2">Order
                                    No &nbsp;:&nbsp;</span><span><b>123123123123</b></span></h6>
                                <h6>
                                    <span className="mr-2">Order Status :</span>
                                    <span>
                                        <b style={{color: props.mode === "dark" ? "white " : "black" }}>
                                            <span className="badge badge-danger" style={{color:"red" }}>Confirmed</span>
                                        </b>
                                    </span>
                                </h6>
                                <Link to="/" className="btn btn-primary btn-lg mt-5">Return to
                                    Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet/>
        </>
    )
}

export default Confirmation
