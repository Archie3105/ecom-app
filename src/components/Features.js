import React from 'react'

function Features(props) {
    return (
        <>
            <section className="feature py-5 mt-5 bg-gray-600" id="feature" >
                <div className="container" style={{color: props.mode === "dark" ? "white " : "black" }}>
                    <div className="section_title text-center mb-5">
                        <h1 className="text-capitalize" >Our Features</h1>
                    </div>
                    <div className="row text-white">
                        <div className="col-md-4 col-12 shadow p-3">
                            <div className="text-center">
                                <div className="mb-4">
                                    <i className="fas fa-shipping-fast fa-3x mb-3 pt-2"></i>
                                    <div>
                                        <h3>Free Shipping Method</h3>
                                    </div>
                                </div>
                                <div>
                                Don't miss out on this opportunity to experience the best of Online Products. Start your free trial today and discover why "Eternal.Code" is the preferred choice for Grocery & Fashion proudcts enthusiasts.


                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 shadow p-3 mt-small-5 mb-small-5">
                            <div className="text-center">
                                <div className="mb-4">
                                    <i className="fas fa-lock fa-3x mb-3 pt-2"></i>
                                    <div>
                                        <h3>Secure Payment System</h3>
                                    </div>
                                </div>
                                <div>
                                At "Eternal.Code", we understand that security is paramount when it comes to online transactions. That's why we've implemented a state-of-the-art secure payment system to ensure that your shopping experience is not only seamless but also protected.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 shadow p-3">
                            <div className="text-center">
                                <div className="mb-4">
                                    <i className="fas fa-headphones fa-3x mb-3 pt-2"></i>
                                    <div>
                                        <h3>24/7 Support</h3>
                                    </div>
                                </div>
                                <div>
                                At "Eternal.Code", we are dedicated to providing an exceptional shopping experience, and our 24/7 customer support is a testament to that commitment. Shop with confidence, knowing that assistance is always within reach.

                                Thank you for choosing "Eternal.Code". We look forward to serving you around the clock!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
