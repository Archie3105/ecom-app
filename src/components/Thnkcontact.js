import React from 'react'
import { Link } from 'react-router-dom'

function Thnkcontact(props) {
  return (
    <>
       <section className="order_confirmation py-5 my-5" id="order_confirmation">
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <div>
                                <img src="assets/images/thnkcontact.png" className="img img-fluid "  alt="image"style={{width:"12em"}} />
                            </div>
                            <div className="mt-4">
                                <h2 >Thankyou for sharing your contact details with us!</h2>
                                <h5>Our team will reach out to you shortly !
                                    </h5>
                                <Link to="/" className="btn btn-primary btn-lg mt-5" >Return to
                                    Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Thnkcontact
