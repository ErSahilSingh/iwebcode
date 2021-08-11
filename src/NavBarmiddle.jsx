import React from 'react';
import "./NavBarmiddle.css";
import Card from "./Card";

function NavBarmiddle() {
    return (
        <>
        <div >
            <nav className="navbar navbar-expand-lg top__2">
  <div className="container">
    <a className="navbar-brand d-none d-xl-block" >
        <img src="https://cdn.originpc.com/img/origin-logo.svg" width="160" height="37"/>
    </a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "><i class="fas fa-bars fs-1 text-white"></i></span>
    </button>
    <a className="navbar-brand d-xl-none d-flex nave__1" >
        <img src="https://cdn.originpc.com/img/origin-o-logo.svg" className="" width="37" />
            </a>
    
    <div className=" d-block d-xl-none ">
    
          <ul className= "navbar-nav   navbar-nav flex-row justify-content-end ">
          
        <li className="nav-item">
          <a className="nav-link" href="#"> <i class="fas fa-search mx-3 text-white"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i class="fas fa-user-alt mx-3 text-white"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <i class="fas fa-shopping-cart mx-3 text-white"></i></a>
        </li>
        
      </ul>
      </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DESKTOPS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">
            <li className="nav-item dropdown dropend">
          <a className="nav-link dropdown-toggle px-left space__1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gaming Desktop
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">
              
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CHRONOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">
              
              
              <Card/>
              
              
              
              
            </a></li>
            


          </ul>
        </li>
              
              
            </a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">NEURON</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">MILLENNIUM</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">GENESIS</a></li>
          </ul>
        </li>

            
            </a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#"> Workstation Desktops</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Government & Corporate</a></li>
          </ul>
        </li>



        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LAPTOPS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Action</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Another action</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Something else here</a></li>
          </ul>
        </li>








        <li className="nav-item">
          <a className="nav-link" href="#">ACCESSORIES</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-warning" href="#">SPECIAL OFFERS</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            REVIEWS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">New</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Testimonials</a></li>
            
          </ul>
        </li>

        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MORE
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder " href="#">Custom Design</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder " href="#">PCs For Creaators</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder " href="#">Support</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder " href="#">Blog</a></li>
            <li><a className="dropdown-item  text-white fs-bolder " href="#">
            <li className="nav-item dropdown dropend">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">About</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Contact</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Careers</a></li>
          </ul>
        </li>
            
            
            
            </a></li>
            
            <li><a className="dropdown-item text-white  " href="#">
            <li className="nav-item dropdown dropend">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Community
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Affiliates</a></li>
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">Blog</a></li>
            
            <li><a className="dropdown-item m-2 p-1 text-white fs-bolder" href="#">ORIGINPCFamily</a></li>
          </ul>
        </li>
            
            
            </a></li>
          </ul>
        </li>

      </ul>
      <div className="d-flex d-none d-xl-block">
          <ul className= "navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link mx-2" href="#"> <i class="fas fa-search"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#"><i class="fas fa-user-alt"></i> Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#"> <i class="fas fa-shopping-cart"></i></a>
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

export default NavBarmiddle;
