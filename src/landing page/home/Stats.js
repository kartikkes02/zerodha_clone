import React from 'react'
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'> 
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h5>Customer-first always</h5>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    
                    <h5 className='mt-5'>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h5 className='mt-5'>The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h5 className='mt-5'>Do better with money</h5>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src="/images/ecosystem.png" style={{width:"100%"}} alt="" />
                    <div>
                        <a href="https://zerodha.com/products" className='m-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right"></i></a> 
                        <a href="https://kite-demo.zerodha.com/dashboard" style={{textDecoration:"none"}}>Try Kite</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;