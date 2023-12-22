import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Beaitemdetails(props) {
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
                                                    <img src="assets/images/beaitem3.png" className="d-block w-100" style={{ width: '25wm', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <img src="assets/images/beaitem5.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/images/beaitem4.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

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
                                            <h3>Dove Whitening</h3>
                                        </div>
                                        <div className="category mb-4">
                                            <span className="bg-light-gray p-2"><Link
                                                to="/beautyitem">Cream</Link></span>
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
                                            Dove is synonymous with gentle skincare, and Dove Whitening is no exception. Pamper your skin with Link range of products that prioritize gentleness, ensuring Link nourishing experience with each use. Bid farewell to dullness as Dove Whitening embraces your skin with care.<br/><br/>
                                            </p>
                                            <p>
                                            Infused with essential nutrients and moisturizing agents, Dove Whitening not only brightens your skin but also keeps it hydrated and supple. Experience the luxury of skincare that goes beyond mere whitening, offering Link holistic approach to maintaining the health and vitality of your skin.
                                            </p>

                                            <br/><br/>
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
                                            <img src="assets/images/beaitem2.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/beaitemdetails">
                                                <h5>AXE Dark Perfume</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/beaitem6.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/beaitemdetails">
                                                <h5>Prada Candy Lotion</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/beaitem1.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/beaitemdetails">
                                                <h5>Multi Color Lipstick</h5>
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

export default Beaitemdetails
