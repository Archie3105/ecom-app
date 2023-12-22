import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Groceryitem(props) {
    return (
        <>
            <section className="product_detail py-5 my-5" id="product_detail"  >
                {
                    <div className="container ">
                        <div className="section_title text-center mb-5">
                            <h1 className="text-capitalize">product detail</h1>
                        </div>
                        <div className="row mt-12">
                            <div className="col-md-6 col-6">
                                <div className="row">
                                    <div className="col-md-8 mx-5 rounded ">


                                        <div id="carouselExampleDark" className="carousel carousel-dark slide rounded shadow-lg " >
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval="10000">
                                                    <img src="assets/images/groitem2.png" className="d-block w-100" style={{ width: '25wm', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <img src="assets/images/groitem1.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/images/groitem5.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title mb-4">
                                            <h3>Coco Cola</h3>
                                        </div>
                                        <div className="category mb-4">
                                            <span className="bg-light-gray p-2"><Link
                                                to="/groceryitem">Grocery</Link></span>
                                        </div>
                                        <div className="rating d-flex text-danger mb-4">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <div className="price mb-4">
                                            <b><span className="mr-1">₹</span><span>400</span></b>
                                        </div>
                                        <div className="desc ">
                                            <p>
                                            Indulge in the timeless delight of Coca-Cola, the iconic beverage that has been refreshing hearts and satisfying taste buds for generations. At , we take pride in offering you the best in quality and taste with our Coca-Cola collection.
                                            Explore a world of flavors with our diverse range of Coca-Cola products. Whether you crave the classic taste of Coca-Cola Original, the bold kick of Coca-Cola Zero Sugar, or the refreshing twist of Coca-Cola Cherry, we have the perfect beverage to suit your mood and preferences.
                                            </p>
                                        </div>
                                        <div className="qty_section border-top pt-2 mb-4">
                                            <label>Quantitiy</label>
                                            <div>
                                                <div className="mb-0 w-100">
                                                    <input className="quantity text-center" min="0" max="10"
                                                        name="quantity" value="1"
                                                        type="number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buy">
                                            <Link to="/cart" className="btn btn-primary shadow">Add to
                                                Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ----------------related products starts here---------- --> */}
                        <section className="related_products py-5 my-5" id="related_products">
                            <div className="title">
                                <h3>Related Products</h3>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/groitem3.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/groitemdetails">
                                                <h5>Fruits Veg Combo</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/groitem4.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/groitemdetails">
                                                <h5>Chocolate Biscuit</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/groitem6.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/groitemdetails">
                                                <h5>Pineapple</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                }
            </section >
            <Outlet />
        </>
    )
}

export default Groceryitem
