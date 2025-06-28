import React from 'react';
function Awards() {
    return (
        <div className="container mb-5 p-5">
            <div className='row text-center'>
                <div className='col-6'>
                    <img src="/images/largestBroker.svg" alt=""/>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>
                        2+ millions Zerodha clients contribute to over 15% to all retail order 
                        <br />volumes in India daily by trading and investing in:
                   </p>
                   <div className='row p-3'>
                        <div className="col-6 ">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
    
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                               <li><p>Direct Mutual Funds</p></li>
                               <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/images/pressLogos.png" style={{width:"100%"}} alt=""/>
                </div>
            </div>
        </div>
        
        // <div style={{ display: 'flex'}}>
        //     <div className='p-5'>
        //         <img src="/images/largestBroker.svg" alt=""/>
        //     </div>
        //     <div style={{ marginLeft: '30'}}>
        //         <h1>Largest stock broker in India</h1>
        //         <p>2+ millions Zerodha clients contribute to over 15% to all retail order 
        //            <br />volumes in India daily by trading and investing in:
        //         </p> <br /> <br /> <br />
        //         <div style={{ display: 'flex'}}>
        //             <div>
        //                 <ul>
        //                     <li>Futures and Options</li>
        //                     <li>Commodity Derivatives</li>
        //                     <li>Currency Derivatives</li>
        //                 </ul>
        //             </div>
        //             <div style={{ marginRight: '50px'}} className=''>
        //                 <ul className='col-12'>
        //                     <li>Stocks and IPOs</li>
        //                     <li>Direct Mutual Funds</li>
        //                     <li>Bonds and Growths</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Awards;