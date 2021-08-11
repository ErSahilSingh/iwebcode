import React from 'react';
import "./NavbarButtom.css"

function NavbarButtom() {
    return (
        <>
        <section className=" top__3 d-none d-xl-block">
        <div className="container-fluid ">
            
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <div class="text-center text__2">
        
        <p className="text-white">IGN gives EVO15-S laptop a 9 out of 10.</p>
      </div>
    </div>
    <div class="carousel-item">
      
      <div class="text-center text__2">
        
        <p className="text-white">NEURON Receives an Editors' Choice Award from PCMag.com.</p>
      </div>
    </div>
    <div class="carousel-item">
      
      <div class="text-center text__2">
        
        <p className="text-white">PC World Gave our EON17-X an Editors' Choice Award.</p>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
        </section>
        </>
    )
}

export default NavbarButtom;
