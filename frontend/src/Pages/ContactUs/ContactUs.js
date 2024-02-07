import React from 'react'
// import Map from '../Map/map.js'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <>
        <Helmet>
                <title>Contact Us - Dharni Properties</title>
                <meta name="description" content="Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties." />
                <link rel="canonical" href="/contactUs" />
            </Helmet>
            <div className='container'>


            <h2 className='text-muted fw-bold mt-5 mb-5'>Dharni Properties</h2>
                <div className='row'>
                    <div className=' col-lg-6 col-md-6 col-sm-12 mb-3'>

                        {/* <Map /> */}
                        <iframe className='rounded w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.668179939836!2d77.70031917501734!3d12.99306248732431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119f0e352d3f%3A0x86ca1ae2e0e0d66a!2sDHARNI%20Capital!5e0!3m2!1sen!2sin!4v1701687382806!5m2!1sen!2sin" height={400} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center '>

                        <Link className='text-decoration-none mt-5 text-muted' target='_blank' to='https://www.google.com/maps/place/DHARNI+Capital/@12.9930902,77.7029178,20.14z/data=!4m6!3m5!1s0x3bae119f0e352d3f:0x86ca1ae2e0e0d66a!8m2!3d12.9930625!4d77.7028941!16s%2Fg%2F11g6vfghmh?entry=ttu'><h4 className='mt-4'><i className="fa-solid fa-location-dot"></i> 226 Brigade Metropolis Arcade, Whitefield Main Road, Garudacharpalya, Bangalore – 560048 </h4></Link>



                        {/* <p className='fw-bold mt-3'>Email: &nbsp; <a className='text-decoration-none text-muted ' href="mailto:properties@dharnigroup.com"><i className="fa-solid fa-envelope"></i> properties@dharnigroup.com </a></p>
                        <p className='fw-bold mt-3'>Phone No:&nbsp; <a className='text-decoration-none text-muted' href="tel:9945608407"><i className="fa-solid fa-phone"></i> 9945608407 </a></p> */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactUs