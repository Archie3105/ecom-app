import React from 'react'
import { Link, Outlet,Routes,Route } from 'react-router-dom'
import Checkout from './Checkout'

function Cart(props) {

    // To increase quantity

    // onclick = "this.parentNode.querySelector('input[type=number]'). stepUp()"

    // // To decrease quantity

    // onclick = "this.parentNode.querySelector('input[type=number]'). stepDown()"

    return (
        <>
            <section className="cart py-5 my-5" id="cart">
                <div className="container ">
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">Cart</h1>
                    </div>
                    <div className="row bg_cart_1 rounded" >
                        {/* Grid column */}
                        <div className="col-md-8 " style={{background: "rgb(238,174,202)", background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}>
                            {/* Card  */}
                            <div className="mb-3" >
                                <div className="pt-4">
                                    <h5 className="mb-4">Cart (<span>2</span> items)</h5>
                                    <div className="row mb-4">
                                        <div className="col-md-5 col-lg-3 col-xl-3">
                                            <div className="rounded mb-3 mb-md-0">
                                                <img className="img-fluid w-100 rounded"
                                                    src="./assets/images/product1.webp"
                                                    alt="Sample" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-lg-9 col-xl-9">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5>Blue denim shirt</h5>
                                                        <p className="mb-3 text-muted text-uppercase small">Shirt -
                                                            blue</p>
                                                        <p className="mb-2 text-muted text-uppercase small">Color:
                                                            blue</p>
                                                        <p className="mb-3 text-muted text-uppercase small">Size:
                                                            M</p>
                                                    </div>
                                                    <div>
                                                        <div className="mb-0 w-100">
                                                            <button
                                                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="btn btn-sm btn-outline-primary">
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <input className="quantity text-center" min="0" max="10"
                                                                name="quantity"
                                                                value="1" type="number" />
                                                            <button
                                                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="btn btn-sm btn-outline-primary">
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                        <small className="form-text text-muted text-center">
                                                            (Note, 1 piece)
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <a to="javascript:;" type="button"
                                                            className="small text-uppercase mr-3">
                                                            <i className="fas fa-trash-alt mr-1"></i> Remove item </a>
                                                    </div>
                                                    <p className="mb-0"><span><strong
                                                        id="summary">₹265.49</strong></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="row mb-4">
                                        <div className="col-md-5 col-lg-3 col-xl-3">
                                            <div className="rounded mb-3 mb-md-0">
                                                <img className="img-fluid w-100 rounded"
                                                    src="assets/images/product3.png"
                                                    alt="Sample" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-lg-9 col-xl-9">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5>Red hoodie</h5>
                                                        <p className="mb-3 text-muted text-uppercase small">Shirt -
                                                            red</p>
                                                        <p className="mb-2 text-muted text-uppercase small">Color:
                                                            red</p>
                                                        <p className="mb-3 text-muted text-uppercase small">Size:
                                                            M</p>
                                                    </div>
                                                    <div>
                                                        <div className="mb-0 w-100">
                                                            <button
                                                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="btn btn-sm btn-outline-primary">
                                                                <i className="fas fa-minus"></i>
                                                            </button>
                                                            <input className="quantity text-center" min="0" max="10"
                                                                name="quantity"
                                                                value="1" type="number" />
                                                            <button
                                                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="btn btn-sm btn-outline-primary">
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <a to="javascript ;" type="button"
                                                            className="card-link-secondary small text-uppercase mr-3">
                                                            <i className="fas fa-trash-alt mr-1"></i> Remove item
                                                        </a>
                                                    </div>
                                                    <p className="mb-0"><span><strong>₹365.49</strong></span></p >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid umn>  */}
                        <div className="col-md-4 rounded " style={{backgroundColor:"lightblue"}}>
                            {/*  Card  */}
                        <div className="mb-3" >
                            <div className="pt-4">
                                <h5 className="mb-3">Order summary</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2" style={{backgroundColor:"lightblue"}}>
                                        <span>Product name 1</span>
                                        <span>x2</span>
                                        <span>₹265.49</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-shadow-0 px-0 pb-2" style={{backgroundColor:"lightblue"}}>
                                        <span>Product name 2</span>
                                        <span>x2</span>
                                        <span>₹265.49</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-top px-0 mb-3" style={{backgroundColor:"lightblue"}}>
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>₹530.98</strong></span>
                                    </li>
                                </ul>
                                <Link to="/checkout"  className="btn btn-primary btn-block w-100">Go to
                                    Checkout</Link>
                            </div>
                        </div>
                        {/* Card  */}
                    </div>
                    {/* Grid column*/}
                </div>
                </div>
            </section>
        </>
    )
}

export default Cart
