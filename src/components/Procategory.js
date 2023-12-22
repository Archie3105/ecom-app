import React from 'react'
import { Link } from "react-router-dom";
function Procategory(props) {
    return (
        <>
            <section className="products py-5 my-5 " id="products" style={{
                backgroundColor: props.mode === "dark" ? "#282c34" : "white",
                color: props.mode === "dark" ? "white" : "black",
            }}>
                <div className="container " >
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize">Categories</h1>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-12">
                            <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
                                <div className="product_img">
                                    <Link to="/Products"><img src="https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className="img img-fluid rounded h-50"
                                        alt="" /></Link>
                                </div>
                                <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill
badge-danger" style={{color:"red"}}>New</span>
                                    </div>
                                <div className="product-caption my-3 ">
                                    <h4><Link to="/Products">Fashion</Link></h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                    "Elevate your style with our Women's Trench Coat. Timeless design, versatile for any occasion."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product shadow text-center p-1 mt-small-5
mb-small-5">
                                <div className="product_img">
                                    <Link to="/beautyitem"><img src="https://images.pexels.com/photos/7290089/pexels-photo-7290089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className="img img-fluid rounded h-50"
                                        alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill
badge-danger" style={{color:"red"}}>New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <h4><Link to="/beautyitem">Beauty</Link></h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        "Elevate your style with our Women's Trench Coat. Timeless design, versatile for any occasion."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product shadow text-center p-1">
                                <div className="product_img">
                                    <Link to="/electricitem"><img src="https://images.pexels.com/photos/6093960/pexels-photo-6093960.jpeg?auto=compress&cs=tinysrgb&w=600 "
                                        className="img img-fluid rounded h-50"
                                        alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill
badge-danger" style={{color:"red"}}>New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <h4><Link to="/electricitem">Electronics</Link></h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        "Elevate your style with our Women's Trench Coat. Timeless design, versatile for any occasion."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="single_product shadow text-center p-1">
                                <div className="product_img">
                                    <Link to="/groceryitem"><img src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="img img-fluid rounded h-50"
                                        alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill
badge-danger" style={{color:"red"}}>New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <h4><Link to="/groceryitem">Grocery</Link></h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        "Elevate your style with our Women's Trench Coat. Timeless design, versatile for any occasion."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="single_product shadow text-center p-1 mt-small-5
mb-small-5">
                                <div className="product_img">
                                    <Link to="/petitem"><img src="https://images.unsplash.com/photo-1626204451832-91eb35617cc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="img img-fluid rounded h-50"
                                        alt="" /></Link>
                                    <div className="new_product">
                                        <span className="badge py-2 px-3 badge-pill
badge-danger" style={{color:"red"}}>New</span>
                                    </div>
                                </div>
                                <div className="product-caption my-3">
                                    <h4><Link to="/petitem">Pet Shop</Link></h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        "Elevate your style with our Women's Trench Coat. Timeless design, versatile for any occasion."
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    )
}

export default Procategory
