import React from 'react'
import { useState } from 'react';

export default function Section({product,cartCount,pd, updatedCartCount}) {
    const [inCart, setInCart] = useState(false);
    // const [cartcount,setcartcount]=useState(0); 
    
  const addToCart = (product) => {
      setInCart(!inCart);
      updatedCartCount(inCart ? cartCount-1 :cartCount+1)
    };
  
   
  return (
    <div className='products'>
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem; right: 0.5rem"}}>Sale</div>
                            {inCart ? "In Cart" : "Sale"}
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" id='pic' src={product.pic} alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{product.name}-{pd} </h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                  
                                    {/* <!-- Product price--> */}
                                    <div className='prosum'>
                                    {product.summary}
                                    </div>
                                    </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" id='probtn'>
                          
                            <div className="text-center">
                            <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>{inCart ?  "Remove cart" :"Add cart"  }</button>
                            </div>
                            
                            </div>
                        </div>
                  
        {/* <!-- Footer--> */}
        
        {/* <!-- Bootstrap core JS--> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script> */}
        {/* <!-- Core theme JS--> */}
        {/* <script src="js/scripts.js"></script> */}
    </div>
  )
}
