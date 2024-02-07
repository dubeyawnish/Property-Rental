import React from 'react'
import { Helmet } from "react-helmet-async";

const Carrier = () => {
  return (
    <>
     <Helmet>
        <title>{`Careers - Dharni Properties` }</title>
        <meta name="description" content="Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties." />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className='container'>
        <div className='container'>
          <h2 className='text-muted fw-bold mt-5'>Careers</h2>
          <p className='mt-5 mb-5'>We are always looking for dedicated and dynamic individuals to join our team. To apply, write to us at properties@dharnigroup.com</p>
        </div>
      </div>

    </>
  )
}

export default Carrier;