import React from 'react'
import Map from '../Map/map.js'
import {Link} from 'react-router-dom'

const ContactUs = () => {
    return (
        <>
            <div className='container'>


                <h2 className='text-muted fw-bold mt-5 mb-5'>Dharni Properties</h2>





                <div className='row'>
                    <div className=' col-lg-6 col-md-6 col-sm-12 mb-3'>
                    <Map />    
                    </div>
                    <div className=' col-lg-6 col-md-6 col-sm-12 mt-5'>
                        <Link className='text-decoration-none mt-5 text-muted' to='https://www.google.com/maps/place/DHARNI+Capital/@12.9930902,77.7029178,20.14z/data=!4m6!3m5!1s0x3bae119f0e352d3f:0x86ca1ae2e0e0d66a!8m2!3d12.9930625!4d77.7028941!16s%2Fg%2F11g6vfghmh?entry=ttu'><h4 className='mt-4'><i class="fa-solid fa-location-dot"></i> 226 Brigade Metropolis Arcade, Whitefield Main Road, Garudacharpalya, Bangalore – 560048 </h4></Link>
                        <p className='fw-bold mt-3'>Email: &nbsp; <a className='text-decoration-none text-muted ' href="mailto:properties@dharnigroup.com"><i class="fa-solid fa-envelope"></i> properties@dharnigroup.com </a></p>
                        <p className='fw-bold mt-3'>Phone No:&nbsp; <a className='text-decoration-none text-muted' href="tel:9945608407"><i class="fa-solid fa-phone"></i> 9945608407 </a></p>
                        


                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactUs