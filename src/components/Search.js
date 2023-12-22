import React from 'react'

function Search() {
    return (
        <>
            <section className="search_section py-5 my-5" id="search_section">
                <div className="container">
                    <div className="title text-center mb-5">
                        <h2><i className="fa-brands fa-searchengin"></i>Search</h2>
                    </div>
                    <div className="row">
                        {/* BEGIN RESULT  */}
                        <div className="col-md-10 mx-auto">
                           <small>Showing all results matching "xyz"</small>
                            {/* BEGIN TABLE RESULT  */}
                            <div className="table-responsive mt-3">
                                <table className="table table-hover">
                                    <tbody className="border-bottom">
                                        <tr>
                                            <td className="number text-center">1</td>
                                            <td className="image"><img src="assets/images/product3.png"
                                                width="100px"
                                                className="img img-fluid" alt="" /></td>
                                            <td className="product"><strong>Product 1</strong><br />This is the
                                                product description.
                                            </td>
                                            <td className="rate text-right"><span><i className="fa fa-star"></i><i
                                                className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                    className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                            <td className="price text-right">₹350</td>
                                        </tr>
                                        <tr>
                                            <td className="number text-center">2</td>
                                            <td className="image"><img src="assets/images/product2.png"
                                                width="100px"
                                                className="img img-fluid" alt="" /></td>
                                            <td className="product"><strong>Product 1</strong><br />This is the
                                                product description.
                                            </td>
                                            <td className="rate text-right"><span><i className="fa fa-star"></i><i
                                                className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                    className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                            <td className="price text-right">₹350</td>
                                        </tr>
                                        <tr>
                                            <td className="number text-center">3</td>
                                            <td className="image"><img src="assets/images/product3.png"
                                                width="100px"
                                                className="img img-fluid" alt="" /></td>
                                            <td className="product"><strong>Product 1</strong><br />This is the
                                                product description.
                                            </td>
                                            <td className="rate text-right"><span><i className="fa fa-star"></i><i
                                                className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                    className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></td>
                                            <td className="price text-right">₹350</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* END TABLE RESULT  */}
                        </div>
                        {/* END RESULT  */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search
