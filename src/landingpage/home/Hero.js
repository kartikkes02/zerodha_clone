import React from 'react';
function Hero() {
    return (
            <div classNamme='container p-5'>
                <div className='row m-5 text-center' >
                    <img src='/images/homeHero.png' alt="Hero section" className='mb-5' style={{width:"55%", marginLeft:"22%", marginTop:"3%"}}/>
                    <h1 className='mb-4'>Invest in Everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="p-3 btn btn-primary p-2 fs-5 d-block mx-auto" style={{width:"19%", height:"50%",margin:"0 auto",display: "block"}}>Sign up for free</button>    
                    <div className='col-12 text-center'></div>
                </div>
            </div>
    );
}

export default Hero;