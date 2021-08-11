import React from 'react';
import "./NavbarUpper.css"

function NavbarUpper() {
    return (
        <>
        <div className="d-none d-lg-block" >
            <nav className="navbar navbar-expand-lg  top__1 ">
    <div className="container">
    
    
    <div className="collapse navbar-collapse " >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link color__1"  href="#"><i class="fas fa-shield-alt"></i> 24/7 Lifetime Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link color__1 " href="#"><i class="fas fa-phone"></i> 1-877-674-4460 (US & CA)</a>
        </li>
        
        
      </ul>
      <div className="d-flex">
          <ul className= "navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link color__1" href="#"><i class="far fa-comment"></i> Chat Offline</a>
        </li>
        <li className="nav-item">
          <a className="nav-link color__1" href="#"> Contact</a>
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}

export default NavbarUpper;
