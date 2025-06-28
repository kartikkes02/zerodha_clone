import React from 'react';
function Team() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <h2 className='text-center mb-4 p-5'>People</h2>
                <div className='col-2'></div>
                <div className='col-4'>
                    <img src='/images/nithinKamath.jpg' alt='' style={{borderRadius:"50%", width:"85%"}} />
                    <p style={{marginLeft:"80px", fontSize:"20px", marginTop:"15px"}}>Nithin Kamath</p>
                    <p style={{marginLeft:"85px"}}>Founder, CEO</p>
                </div>

                <div className='col-5 mt-3'>    
                    <p className='fs-6'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='fs-6'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='fs-6'>Playing basketball is his zen.</p>
                </div>
            </div>
        </div>
     );
}

export default Team;