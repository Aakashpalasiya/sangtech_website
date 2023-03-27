import React from 'react'

function Header() {
  return (
  <nav className="navbar bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">SANGTECH TECHNOLOGIES</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">NAVIGATION</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Client</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#">Contact Us</a>
          </li>
          </ul>
         
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header