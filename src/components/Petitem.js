import React from "react";
import { Link,  } from "react-router-dom";
function Petitem() {
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
                                        <Link to="/petitemdetails"><img
                                            src="./assets/images/petitem1.png" className="img img-fluid"
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
                                        <h4>Pedigree For Adult  Dog </h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
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
                                        <Link to="/petitemdetails"><img
                                            src="assets/images/petitem2.png" className="img img-fluid"
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
                                        <h4>Dog's Clothes</h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/petitemdetails"><img
                                            src="assets/images/petitem3.png" className="img img-fluid"
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
                                        <h4>Royal Kanin </h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
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
                                        <Link to="/petitemdetails"><img
                                            src="assets/images/petitem4.png" className="img img-fluid"
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
                                        <h4>Cat Wishkas</h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
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
                                        <Link to="/petitemdetails"><img
                                            src="assets/images/petitem5.png" className="img img-fluid"
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
                                        <h4>Dog Leash </h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
                                        <div className="price">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="single_product shadow text-center p-1">
                                    <div className="product_img">
                                        <Link to="/petitemdetails"><img
                                            src="./assets/images/petitem6.png" className="img img-fluid"
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
                                        <h4>Dog Bowl</h4>
                                        <h5><Link to="/petitemdetails">For More Details</Link></h5>
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

export default Petitem;
