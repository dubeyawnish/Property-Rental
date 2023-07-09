import React from 'react'
import Rent from '../../Images/ServiceFee/ForRent.jpg'
import Sale from '../../Images/ServiceFee/forSale.jpg'
import RentalAgreement from '../../Images/ServiceFee/RentalAgreement.jpg'


const ServiceFee = () => {
    return (
        <>
            <div className='container'>
                <div className='container'>
                    <h2 className='text-muted mt-5'>Services & Fee</h2>
                </div>

                <div className='row mt-5'>

                    <div className=' col-lg-3 col-md-3 col-sm-12 mt-3'>
                        <img src={Rent}></img>


                    </div>



                    <div className='col-lg-9 col-md-19 col-sm-12'>
                        <h3>Rentals</h3>
                        <p className='mt-3'>Premium residential rental contracts with suitable long term tenants, for a period of 11 months and above.</p>
                        <h6>Fee<sup>*</sup>:<span>One month’s rental value + GST, to be paid by the Owner ( excludes legal charges)</span></h6>
                        <h6>Fee<sup>*</sup>:<span>One month’s rental value + GST, to be paid by the Tenant ( excludes legal charges)</span></h6>
                        <p className='mt-3'>In case of assistance, supervision or co-ordination required in Pre-Tenancy work such (but not limited to) painting, plumbing, carpentry, electrical, cleaning, and so on, we charge 20,000 +GST , in addition to the brokerage fee.</p>
                        <  hr className='mt-2' />


                    </div>
                </div>




                <div className='row mt-5'>

                    <div className=' col-lg-3 col-md-3 col-sm-12 mt-3'>
                        <img src={Sale}></img>


                    </div>



                    <div className='col-lg-9 col-md-19 col-sm-12'>
                        <h3>Sales</h3>
                        <p className='mt-3'>High end residential property re-sale deals through transparent communication, facilitating all cheque transactions only.</p>
                        <h6>Fee<sup>*</sup>:<span>1% of the Sale value + GST (House/apartment/land/Plot) from buyer</span></h6>
                        <h6>Fee<sup>*</sup>:<span>2% of the Sale value + GST (House/apartment/land/Plot) from seller</span></h6>
                        <hr className='mt-2' />


                    </div>
                </div>

                <div className='row mt-5'>

                    <div className=' col-lg-3 col-md-3 col-sm-12 mt-3'>
                        <img src={Sale}></img>


                    </div>



                    <div className='col-lg-9 col-md-19 col-sm-12'>
                        <h3>Property Management</h3>
                        <p className='mt-3'>Hassle-free end to end care and representation of the property with best practices, on behalf of the owner.</p>
                        <h6>Fee<sup>*</sup>:<span>Rs. 80,000 + GST, for 12 months, to be paid by the Owner, for properties within a banglore of Dharni Properties registered address. The service includes day to day interaction with the tenant, resolving issues in the property which are the landlords responsibility. Finding a tenant is not part of the service and is chargeable at One month’s rental value + GST over and above the Property Management fee. </span></h6>
                        <p>*Terms and Conditions applicable, as mutually agreed upon and given in detail in signed contract.</p>
                        <hr className='mt-2' />


                    </div>
                </div>


                <div className='row mt-5'>

                    <div className=' col-lg-3 col-md-3 col-sm-12 mt-3'>
                        <img src={RentalAgreement}></img>


                    </div>



                    <div className='col-lg-9 col-md-19 col-sm-12'>
                        <h3>Rental Agreement</h3>
                        <p className='mt-3'>Execution of a rental agreement with a new Client with inventory listing.</p>
                        <h6>Fee<sup>*</sup>:<span> Rs. 10,000/- + GST </span></h6>
                        <p className='mt-2'>Execution of a rental agreement with a new Client without inventory listing.</p>
                        <h6>Fee<sup>*</sup>:<span> Rs. 5,000/- + GST</span></h6>
                        <p>Renewal of a rental agreement with an existing tenant.</p>
                        <h6>Fee<sup>*</sup>:<span> Rs. 5,000/- + GST</span></h6>

                        <hr className='mt-2' />


                    </div>
                </div>


                


            </div>

        </>
    )
}

export default ServiceFee;