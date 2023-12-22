import React from 'react'

function Slider() {
  return (
    <>
      <section className="header_carousel" id="header_carousel w-100 " >
        {
          <div id="carouselExample" className="carousel slide ">
            <div className="carousel-inner w-100">
              <div className="carousel-item active">
              <img
                  src="https://img.freepik.com/free-vector/beautiful-christmas-sale-banner-with-shiny-balls-decoration_1017-16239.jpg?1&w=826&t=st=1702465422~exp=1702466022~hmac=ca11b34cee6cd5a12743c69a7ceb9fe4c826cd7a20a46aef63d3509baba3c9df"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
              <img
                  src="https://img.freepik.com/free-vector/gradient-winter-season-sale-horizontal-banner-template_23-2149885356.jpg?w=900&t=st=1702465707~exp=1702466307~hmac=50473aaa7a46ca779880aa0563f24b9dc83920fe08f28260ea2a7172daa247fd"
                  className="d-block w-100"
                  alt="..." 
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/realistic-3d-sale-background_52683-62708.jpg?w=826&t=st=1702465824~exp=1702466424~hmac=144df1eee50cf856c560c810a5909c01a8d8a10122334ae28bd7c71164c7b479"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        }
      </section >
    </>
  )
}

export default Slider
