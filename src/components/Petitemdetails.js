import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Petitemdetails(props) {
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
                                                    <img src="assets/images/petitem1.png" className="d-block w-100" style={{ width: '25wm', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item" data-bs-interval="2000">
                                                    <img src="assets/images/petitem3.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

                                                </div>
                                                <div className="carousel-item">
                                                    <img src="assets/images/petitem4.png" className="d-block w-100" style={{ width: 'auto', height: '35em' }} alt="..." />

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
                                            <h3>Pedigree</h3>
                                        </div>
                                        <div className="category mb-4">
                                            <span className="bg-light-gray p-2"><Link
                                                to="/petitem">Dog Food</Link></span>
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
                                            Pedigree is crafted with Link commitment to providing your dog with balanced and nutritious meals. Explore our selection of dog food formulas enriched with essential vitamins, minerals, and proteins to support your pet's overall health and well-being.
                                            Reward your furry friend with Pedigree's delectable treats, perfect for training sessions or simply expressing your love. These tasty bites are not only delicious but also contribute to your dog's dental health and hygiene.
                                            </p><br/>
                                            <p>
                                            Indulge your canine companion in the wholesome goodness of Pedigree, Link name synonymous with quality pet nutrition. At [Your Pet Emporium], we proudly present Pedigree for sale, offering Link range of dog food and treats that cater to the unique dietary needs of your beloved furry friend.
                                            </p><br/><br/>
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
                                            <img src="assets/images/petitem6.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/petitemdetails">
                                                <h5>Dog Bowl</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/petitem2.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/petitemdetails">
                                                <h5>Dog's Clothes</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="border border-dark rounded shadow text-center p-3">
                                        <div className="mb-4">
                                            <img src="assets/images/petitem5.png" className="img img-fluid"
                                                style={{ height: "30em", margin: "auto" }} alt="image" />
                                        </div>
                                        <div>
                                            <Link to="/petitemdetails">
                                                <h5>Dog Leash
</h5>
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

export default Petitemdetails
