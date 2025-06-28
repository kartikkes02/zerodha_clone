import React from 'react';
function Education() {
    return (
        <>
            <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <img src="/images/education.svg"alt="" style={{width:"90%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-6 mt-3'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>Free and open market education</h2>
                            <p className='p-2 mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href="https://zerodha.com/varsity/" style={{textDecoration:"none"}} className='m-1 mt-5'>Varsity <i class="fa fa-long-arrow-right"></i></a>

                            <p className='p-2 mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                            <a href="https://tradingqna.com/" className='m-1 mt-5' style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        </>
    );
}

export default Education;