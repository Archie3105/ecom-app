import React from 'react'
import {Link, Outlet } from 'react-router-dom'

function Checkout(props) {
    return (
        <>
            <section className="Checkout py-5 my-5" id="Checkout">
                <div className="container " id='checkout'>
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">Checkout</h1>
                    </div>
                    <div className="row" >
                        {/* Grid column */}
                        <div className="col-lg-8" >
                            {/* Card  */}
                            <div className="card bg_checkout_1 pb-5" style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                                <div className="card-body" >
                                    <h5 className="mb-5">Billing details</h5>
                                    {/* Grid row  */}
                                    <div className="row">
                                        {/* Grid column  */}
                                        <div className="col-lg-6">
                                            {/* First name  */}
                                            <div className="form-group mb-0 mb-lg-4">
                                                <label for="firstName">First name</label>
                                                <input type="text" id="firstName" className="form-control mb-0 mb-lg-2" />
                                            </div>
                                        </div>
                                        {/* Grid column  */}
                                        {/* Grid column  */}
                                        <div className="col-lg-6">
                                            {/* Last name  */}
                                            <div className="form-group md-outline">
                                                <label for="lastName">Last name</label>
                                                <input type="text" id="lastName" className="form-control" />
                                            </div>
                                        </div>
                                        {/* Grid column  */}
                                    </div>
                                    {/* Grid row  */}
                                    {/* Phone  */}
                                    <div className="form-group">
                                        <label for="form18">Phone</label>
                                        <input type="number" id="form18" className="form-control" />
                                    </div>
                                    {/* Email address  */}
                                    <div className="form-group">
                                        <label for="form19">Email address</label>
                                        <input type="email" id="form19" className="form-control" />
                                    </div>
                                    {/* Country  */}
                                    <div className="d-flex flex-wrap">
                                        <div className="w-100">
                                            <label>Country</label>
                                            <select className="custom-select form-group w-100 rounded">
                                                <option value="" selected>Choose your option</option>
                                                <option value="1">Option 1</option>
                                                <option value="2">Option 2</option>
                                                <option value="3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Address Part 1  */}
                                    <div className="form-group">
                                        <label for="form14">Address Line 1</label>
                                        <input type="text" id="form14" placeholder="House number and street name"
                                            className="form-control" />
                                    </div>
                                    {/* Address Part 2  */}
                                    <div className="form-group">
                                        <label for="form15">Address Line 2</label>
                                        <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)"
                                            className="form-control" />
                                    </div>
                                    {/* Postcode / ZIP  */}
                                    <div className="form-group">
                                        <label for="form16">Postcode / ZIP</label>
                                        <input type="text" id="form16" className="form-control" />
                                    </div>
                                    {/* Town / City  */}
                                    <div className="form-group">
                                        <label for="form17">Town / City</label>
                                        <input type="text" id="form17" className="form-control" />
                                    </div >
                                    {/* Additional information  */}
                                    <div className="form-group">
                                        <label for="form76">Additional information</label>
                                        <textarea id="form76" className="md-textarea form-control"
                                            rows="4"></textarea>
                                    </div>
                                    <div className="text-center my-3">
                                        <Link to="/confirmation" className="btn btn-primary btn-block">
                                            <i className="fa fa-check mr-2 me-2"></i>Purchase
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Card  */}
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-lg-4 bg_checkout_1 h-25 rounded" style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                            {/* Card  */}
                            <div className="mb-3">
                                <div className="pt-4">
                                    <h5 className="mb-3">Order summary</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2" style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                                            <span>Product name 1</span>
                                            <span>x2</span>
                                            <span>₹265.49</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-shadow-0 px-0 pb-2" style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                                            <span>Product name 2</span>
                                            <span>x2</span>
                                            <span>₹265.49</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-top px-0 mb-3" style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span><strong>₹530.98</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Card  */}
                        </div>
                        {/* Grid column */}
                    </div>
                </div>
            </section>

            <Outlet/>
        </>
    )
}

export default Checkout
