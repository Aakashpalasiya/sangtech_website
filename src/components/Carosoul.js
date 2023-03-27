import React from 'react'

function Carosoul() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide mt-0 mb-0" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="http://sangtechtechnologies.in/images/santech-banner-simple.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="http://sangtechtechnologies.in/images/hospital-banner-simple.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="http://sangtechtechnologies.in/images/food-banner-simple.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="http://sangtechtechnologies.in/images/diagnostic-simple.png" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev mt-n1" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carosoul