import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import {
//     Routes,
//     Route,
//     Link,
//     Redirect,
//     BrowserRouter,
  
//   } from "react-router-dom";
export default function LatestProducts(props) {
    return (
        <>
        
            <section className="products py-5 my-5 " id="products" style={{
              backgroundColor: props.mode === "dark" ? "#282c34" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
                <div className="container " style={{
              backgroundColor: props.mode === "dark" ? "#282c34" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}>
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">Latest Products</h1>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1">
                                <div className="product_img">
                                    <Link to="/productdetails"><img src="./assets/images/product1.webp"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Itachi Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1 mt-small-5 mb-small-5">
                                <div className="product_img">
                                    <Link to="/productdetails"><img src="./assets/images/product2.png"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger ">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Black Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1">
                                <div className="product_img" id='products' >
                                    <Link to="/productdetails"><img src="./assets/images/product3.png"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Black Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1">
                                <div className="product_img">
                                    <Link to="/productdetails"><img src="./assets/images/product2.png"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Black Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1 mt-small-5 mb-small-5">
                                <div className="product_img">
                                    <Link to="/productdetails"><img src="./assets/images/product2.png"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Black Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product my-1 shadow-lg text-center p-1">
                                <div className="product_img">
                                    <Link to="productDetails"><img src="./assets/images/product2.png"
                                        className="img img-fluid" alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill badge-danger">New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <div className="product-ratting">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star low-star"></i>
                                        <i className="far fa-star low-star"></i>
                                    </div>
                                    <h4>Black Dress</h4>
                                    <h4><Link to="/productdetails">For More Details</Link></h4>
                                    <div className="price">
                                        <b><span className="mr-1">₹</span><span>400</span></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Outlet/>
        </>
    )
}
