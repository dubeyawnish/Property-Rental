import React from 'react'
import Profile from  '../../Images/Profile/profile1.jpg'
const AboutUs = () => {
    return (
        <>
          
                <div className='container'>
                    <h2 className='text-muted mt-5'>About Us</h2>
                    <p className='mt-3'>Started in 2010, Dharni Properties champions for increased transparency, accountability, and professionalism in Bangalore’s real estate space. We specialise in renting, selling, and managing premium residential homes across Bangalore.</p>

                    <div className='row mt-5'>
                        <div className='col-lg-3 col-md-3 col-sm-12'>
                            <img className ='img-thumbnail' src={Profile}></img>

                        </div>

                        <div className='col-lg-9 col-md-9 col-sm-12'>
                            <h5>Hemant Dharnidharka – Founder</h5>
                            <p className='mt-4 text-muted fw-bold'>Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties and has been very successful with collaborating and creating relationships.</p>
                            <p className='mt-5 text-muted fw-bold'>Hemant is a Commerce Graduate from St. Xavier’s College, Kolkata and MBA (Finance and Strategy) From IIM-Lucknow. He has also completed Chartered Accountancy and Company Secretary Courses. He also possesses Certification from Association of Mutual Funds of India (AMFI) in Mutual Funds, NCFM Certification in Derivatives. He has an overall Experience of 10 years in the Finance Industry. He was last working as Managing Director with SJS Markets in Bangalore. He has previously worked with YL eServices, Frontline Analysts, Cadbury and Citibank.</p>


                        </div>

                    </div>
                </div>

                

           

        </>
    )
}

export default AboutUs;