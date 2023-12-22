import React from 'react'
import { Link } from "react-router-dom";
export default function Category(props) {
  return (
    <>
      <section className="shop_by_category py-5 my-5" id="shop_by_category" style={{}}>
        <div className="container-fluid">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Shop By </h1>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card bg-dark text-white my-2">
                <Link to="/products">
                  <img className="card-img img img-fluid" src="https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Card image" />
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-12 mt-small-5 mb-small-5">
              <div className="card bg-dark text-white my-2">
                <Link to="/beautyitem">
                  <img className="card-img img img-fluid" src="https://images.pexels.com/photos/7290089/pexels-photo-7290089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Card image" />
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card bg-dark text-white my-2">
                <Link to="/electricitem">
                  <img className="card-img img img-fluid" src="https://images.pexels.com/photos/6093960/pexels-photo-6093960.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Card image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
