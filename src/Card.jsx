import React from 'react'

function Card() {
    return (
        <>
        <div class="conatiner space__3">
        <div class="row ">
            <div className="col-md-2"></div>
          <div class="col-md-6 flex-item  text-center   " >
          <hr width="400"/>
              <p className="fs-bold px-5">CHRONOS</p>
                <p>Small From Factor</p> 
             <p>11'(H)* 7'(W)*15.5'(D)</p>
             <img src="https://cdn.originpc.com/img/menu/evo15-s-amoled.png" width="280" />
             <p>Starting at:$2,554</p> 
             <p>or as low as $60.75/month</p>
             <button class="btn btn-danger   px-3 py-1 "  >CONFIGURE</button>
             <button class="btn btn-outline-light   px-3 py-1 "  > LEARN MORE</button>
             
          </div>

        </div>

    </div>
    
            
        </>
    )
}

export default Card;
