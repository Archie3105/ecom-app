import React from "react";
import { Link,  } from "react-router-dom";
function Electricitem() {
  return (
    <>
      <section className="products py-5 my-5" id="products">
                <div className="container ">
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">Products</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 border-right mb-small-5">
                            <h4 className="mb-5 border-bottom">Filters</h4>
                            <div className="mb-5">
                                <label><b>Category</b></label>
                                <ul className="list-group" style={{ listStyle: "none" }}>
                                    <li><Link to="/fashionitem" className="list-group-item " aria-current="page">Fashion</Link></li>
                                    <li><Link to="/beautyitem" className="list-group-item">Beauty</Link></li>
                                    <li><Link to="/groceryitem" className="list-group-item">Grocery</Link></li>
                                    <li><Link to="/electricitem" className="list-group-item">Electronics</Link></li>
                                    <li><Link to="/petitem" className="list-group-item">Pet Food</Link></li>
                                </ul>
                            </div>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <label><b>Price</b></label>
                                        <input type="range" min="100" max="1000" step="100"
                                            className="form-control-range" />
                                    </div>
                                </form>
                                <div className="d-flex justify-content-between">
                                    <label>₹100</label>
                                    <label>₹1000</label>
                                </div>
                            </div>
                        </div>
                        {/* ***************************Start Item list******************************** */}

                         <div className="col-md-9">
                        <div className="row mb-5">
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="./assets/images/eleitem1.png" className="img img-fluid"
                                            alt="" /></Link>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>Iphone 6S </h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1 mt-small-5
mb-small-5">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="assets/images/eleitem2.png" className="img img-fluid"
                                            alt="" /></Link>
                                        <div className="new_product">
                                            <span className="badge py-2 px-3 badge-pill
badge-danger" style={{
              color: "red"}}>New</span>
                                        </div>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>Sony Blue Headphone </h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="assets/images/eleitem3.png" className="img img-fluid"
                                            alt="" /></Link>
                                        <div className="new_product">
                                            <span className="badge py-2 px-3 badge-pill
badge-danger" style={{
              color: "red"}}>New</span>
                                        </div>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>JBL Black Soundbar</h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="assets/images/eleitem4.png" className="img img-fluid"
                                            alt="" /></Link>
                                        <div className="new_product">
                                            <span className="badge py-2 px-3 badge-pill
badge-danger" style={{
              color: "red"}}>New</span>
                                        </div>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>Boat Neckband</h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1 mt-small-5
mb-small-5">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="assets/images/eleitem5.png" className="img img-fluid"
                                            alt="" /></Link>
                                        <div className="new_product">
                                            <span className="badge py-2 px-3 badge-pill
badge-danger" style={{
              color: "red"}}>New</span>
                                        </div>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>USB Cable Combo</h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/eleitemdetails"><img
                                            src="./assets/images/eleitem6.png" className="img img-fluid"
                                            alt="" /></Link>
                                    </div>
                                    <div className="product-caption my-3">
                                        <div className="product-ratting">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <h4>Nikon Camera</h4>
                                        <h5><Link to="/eleitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div> 
                        
                        {/* ***************************Start Item list******************************** */}

                    </div>
                </div>
            </section>
    </>
  );
}

export default Electricitem;
