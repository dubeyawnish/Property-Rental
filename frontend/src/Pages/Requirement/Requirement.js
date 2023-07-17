
import React from 'react'
import { API_BASE_URL } from '../../config';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

const Requirement = () => {

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [requirements, setRequirements] = useState('');


    const formSubmit = (e) => {
        e.preventDefault();
    
        const reqData = { name, mobileNumber, emailAddress ,requirements};
        axios.post(`${API_BASE_URL}/requirement`, reqData)
          .then((result) => {
            if (result.status === 201) {
              Swal.fire({
                icon: 'success',
                title: 'Requirement Send Successfully '
              });
             
            }
            setName('');
            setMobileNumber('');
            setEmailAddress('');
            setRequirements('');

            
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Some error occured plzz try later'
            })
    
          })
    
      }




    return (
        <div className='container mt-5'>
            <h3 className='text-muted'>Share Your Requirement</h3>
            <p className='mt-4'>Tell us what kind of a home you have in mind. We will be happy to share a customized list of recommended homes, with actual pictures and verified details.</p>
            <p>For any issues with the form, please mail us on properties@dharnigroup.com</p>

            <div className='mt-3 p-4'>
                <form  onSubmit={formSubmit}>
                    <div className="mb-3 col-lg-8 ">
                        <label for="ownername" className="form-label">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="ownername" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3 col-lg-8">
                        <label for="mobileNumber" className="form-label">Mobile number</label>
                        <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="tel" className="form-control" id="mobileNumber" required />
                    </div>
                    <div className="mb-3 col-lg-8">
                        <label for="email" className="form-label">Email address</label>
                        <input value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" className="form-control" id="email" required />
                    </div>


                    <label for="details " className="  form-label">Requirement</label>
                    <div className='col-lg-8'>
                        <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} className="form-control " id="details"></textarea>
                    </div>


                    <div className=' mt-5 mb-5'>
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Requirement;