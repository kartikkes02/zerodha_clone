import React from 'react';
function Pricing() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2>Unbeatable pricing</h2>
                    <p className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="https://zerodha.com/charges/#tab-equities" className='m-1 mt-5' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6 mt-3'>
                    <div className='row'>
                        <div className='col-6 border'>
                            <img src="/images/pricing0.svg" alt="" style={{width:"25%"}}/>
                            <p className='p-2 mt-3'>Free account opening</p>
                        </div>
                        <div className='col-6 border'>
                            <img src="/images/pricing0.svg" alt="Free equity delivery and direct mutual funds" style={{width:"25%"}}/>
                            <p className='p-2 mt-3'>Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Pricing;