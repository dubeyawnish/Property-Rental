import React from 'react'
import './PropertySignup.css'
import { API_BASE_URL } from '../../config';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';













const PropertySignup = () => {
  const navigate=useNavigate();

  const [ownerName, setOwnerName] = useState('');
  const [mobileNumbers, setMobileNumbers] = useState('');
  const [emailAddresses, setEmailAddresses] = useState('');
  const [villaApartmentNumber, setVillaApartmentNumber] = useState('');
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [yearOfCompletion, setYearOfCompletion] = useState('');
  const [expectedRentPrice, setExpectedRentPrice] = useState('');
  const [expectedSalePrice, setExpectedSalePrice] = useState('');
  const [monthlyMaintenance, setMonthlyMaintenance] = useState('');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [plotSize, setPlotSize] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [balconies, setBalconies] = useState('');
  const [carParks, setCarParks] = useState('');
  const [mainDoorDirection, setMainDoorDirection] = useState('');
  const [studyRoom, setStudyRoom] = useState('');
  const [maidsRoom, setMaidsRoom] = useState('');
  const [maidsToilet, setMaidsToilet] = useState('');
  const [privatePool, setPrivatePool] = useState('');
  const [privateGarden, setPrivateGarden] = useState('');
  const [privateTerrace, setPrivateTerrace] = useState('');
  const [homeTheatreRoom, setHomeTheatreRoom] = useState('');
  const [mediaRoom, setMediaRoom] = useState('');
  const [modularKitchen, setModularKitchen] = useState('');
  const [airConditioner, setAirConditioner] = useState('');
  const [bed, setBed] = useState('');
  const [chimney, setChimney] = useState('');
  const [curtains, setCurtains] = useState('');
  const [diningTable, setDiningTable] = useState('');
  const [dishwasher, setDishwasher] = useState('');
  const [dryer, setDryer] = useState('');
  const [geyser, setGeyser] = useState('');
  const [hob, setHob] = useState('');
  const [mattress, setMattress] = useState('');
  const [microwave, setMicrowave] = useState('');
  const [oven, setOven] = useState('');
  const [refrigerator, setRefrigerator] = useState('');
  const [sofaSet, setSofaSet] = useState('');
  const [solarHeater, setSolarHeater] = useState('');
  const [tv, setTv] = useState('');
  const [wardrobe, setWardrobe] = useState('');
  const [washingMachine, setWashingMachine] = useState('');
  const [waterPurifier, setWaterPurifier] = useState('');
  const [granite, setGranite] = useState('');
  const [italianMarble, setItalianMarble] = useState('');
  const [kotaStone, setKotaStone] = useState('');
  const [marble, setMarble] = useState('');
  const [tiles, setTiles] = useState('');
  const [wood, setWood] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');



  const formSubmit = (e) => {
    e.preventDefault();

    const reqData = { ownerName, mobileNumbers, emailAddresses, villaApartmentNumber, projectName, location, yearOfCompletion, expectedRentPrice, expectedSalePrice, monthlyMaintenance, builtUpArea, plotSize, bedrooms, bathrooms, balconies, carParks, mainDoorDirection, studyRoom, maidsRoom, maidsToilet, privatePool, privateGarden, privateTerrace, homeTheatreRoom, mediaRoom, modularKitchen, airConditioner, bed, chimney, curtains, diningTable, dishwasher, dryer, geyser, hob, mattress, microwave, oven, refrigerator, sofaSet, solarHeater, tv, wardrobe, washingMachine, waterPurifier, granite, italianMarble, kotaStone, marble, tiles, wood, additionalInformation };
    axios.post(`${API_BASE_URL}/propertySignup`, reqData)
      .then((result) => {
        if (result.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Registered'
          });
         
        }
        setOwnerName('');
        setMobileNumbers('');
        setEmailAddresses('');
        setVillaApartmentNumber('');
        setProjectName('');
        setLocation('');
        setYearOfCompletion('');
        setExpectedRentPrice('');
        setExpectedSalePrice('');
        setMonthlyMaintenance('');
        setBuiltUpArea('');
        setPlotSize('');
        setBedrooms('');
        setBathrooms('');
        setBalconies('');
        setCarParks('');
        setMainDoorDirection('');
        setStudyRoom('');
        setMaidsRoom('');
        setMaidsToilet('');
        setPrivatePool('');
        setPrivateGarden('');
        setPrivateTerrace('');
        setHomeTheatreRoom('');
        setMediaRoom('');
        setModularKitchen('');
        setAirConditioner('');
        setBed('');
        setChimney('');
        setCurtains('');
        setDiningTable('');
        setDishwasher('');
        setDryer('');
        setGeyser('');
        setHob('');
        setMattress('');
        setMicrowave('');
        setOven('');
        setRefrigerator('');
        setSofaSet('');
        setSolarHeater('');
        setAdditionalInformation('');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Some error occured plzz try later'
        })

      })

  }





  return (
    <>
      <div className='container'>
        <h3 className='text-muted mt-5'>Property Signup</h3>
        <p className='mt-4'>We request you to please share the below details for us begin working on your property.</p>
        <p>For any issues with the form, please mail us on property@dharnigroup.com</p>
        <div className=' container outer-box '>
          <div className=' list-property-container'>
            <div className=' upper-div'>
              <h4>List your Property with us</h4>
              <h6>Dharni Property specializes in renting and selling premium homes across Bangalore</h6>
            </div>
            <div className='mt-3 p-4'>
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="ownername" className="form-label">Owner Name(s)</label>
                  <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type="text" className="form-control" id="ownername" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                  <label for="mobileNumber" className="form-label">Mobile number(s)</label>
                  <input value={mobileNumbers} onChange={(e) => setMobileNumbers(e.target.value)} type="tel" className="form-control" id="mobileNumber" required />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address(es)</label>
                  <input value={emailAddresses} onChange={(e) => setEmailAddresses(e.target.value)} type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label for="propertybasics" className="form-label">Property Basics</label>
                  <input value={villaApartmentNumber} onChange={(e) => setVillaApartmentNumber(e.target.value)} type="text" className="form-control" id="propertybasics" required />
                  <div id="emailHelp" className="form-text">Villa/Apartment Number</div>
                </div>



                <input value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className="form-text">Project name (or Address)</div>
                <div className=' row mt-3'>

                  <div className='col-lg-6 col-md-6 col-sm-12' >
                    <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Location</div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <input value={yearOfCompletion} onChange={(e) => setYearOfCompletion(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Year of Completion</div>
                  </div>
                </div>

                <div className="mt-5 mb-2">
                  <label for="Propertypricing" className="form-label">Property Pricing</label>
                  <input value={expectedRentPrice} onChange={(e) => setExpectedRentPrice(e.target.value)} type="text" className="form-control" id="Propertypricing" required />
                  <div id="emailHelp" className=" form-text">Expected Rent price (if applicable)</div>
                </div>
                <input value={expectedSalePrice} onChange={(e) => setExpectedSalePrice(e.target.value)} type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className=" mb-2 form-text">Expected Sale price (if applicable)</div>


                <div className=' row mt-3'>

                  <div className='col-lg-6 col-md-6 col-sm-12' >
                    <input value={monthlyMaintenance} onChange={(e) => setMonthlyMaintenance(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Monthly maintenance</div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <input value={builtUpArea} onChange={(e) => setBuiltUpArea(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Built up (sq.ft.)</div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <input value={plotSize} onChange={(e) => setPlotSize(e.target.value)} type="text" className="form-control" id="propertybasics" />
                  <div id="emailHelp" className="form-text">Plot size (sq.ft.)</div>
                </div>


                <div className="mt-5 mb-2">
                  <label for="PropertyOverview " className="form-label">Property Overview </label>
                  <input value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} type="text" className="form-control" id="PropertyOverview " required />
                  <div id="emailHelp" className=" form-text">No. of bedrooms</div>
                </div>
                <input value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className=" mb-2 form-text">No. of bathrooms</div>


                <div className=' row mt-3'>

                  <div className='col-lg-6 col-md-6 col-sm-12' >
                    <input value={balconies} onChange={(e) => setBalconies(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">No. of balconies</div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <input value={carParks} onChange={(e) => setCarParks(e.target.value)} type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">No. of car parks</div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <input value={mainDoorDirection} onChange={(e) => setMainDoorDirection(e.target.value)} type="text" className="form-control" id="propertybasics" />
                  <div id="emailHelp" className="form-text">Direction of main door</div>
                </div>


                <label for="propertyfeatures " className=" mt-5 form-label">Property Features </label>
                <div className='d-flex '>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setStudyRoom(e.target.value)} type="checkbox" className="form-check-input" id="studyroom" value='Study Room' />
                    <label className=" me-4 form-check-label" for="studyroom">Study Room</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMaidsRoom(e.target.value)} type="checkbox" className="form-check-input" id="maidroom" value='Maids Room' />
                    <label className=" me-4 form-check-label" for="maidroom">Maid's Room</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMaidsToilet(e.target.value)} type="checkbox" className="form-check-input" id="maidtoilet" value='Maids Toilet' />
                    <label className=" me-4 form-check-label" for="maidtoilet">Maid's Toilet</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setPrivatePool(e.target.value)} type="checkbox" className="form-check-input" id="privatepool" value='privatepool' />
                    <label className=" me-4 form-check-label" for="Private Pool">Private Pool</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setPrivateGarden(e.target.value)} type="checkbox" className="form-check-input" id="privategarden" value='Private Garden' />
                    <label className=" me-4 form-check-label" for="privategarden">Private Garden</label>
                  </div>

                </div>
                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setPrivateTerrace(e.target.value)} type="checkbox" className="form-check-input" id="privateterrace" value='Private Terrace' />
                    <label className=" me-4 form-check-label" for="privateterrace">Private Terrace</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setHomeTheatreRoom(e.target.value)} type="checkbox" className="form-check-input" id="hometheatre" value='Home Theatre Room' />
                    <label className=" me-4 form-check-label" for="hometheatre">Home Theatre Room</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMediaRoom(e.target.value)} type="checkbox" className="form-check-input" id="mediaroom" value='Media Room' />
                    <label className=" me-4 form-check-label" for="mediaroom">Media Room</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input onChange={(e) => setModularKitchen(e.target.value)} type="checkbox" className="form-check-input" id="modulerkitchen" value='Modular Kitchen' />
                    <label className=" me-4 form-check-label" for="modulerkitchen">Modular Kitchen</label>
                  </div>


                </div>

                <label for="furnishingdetails " className=" mt-5 form-label">Furnishing Details </label>
                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setAirConditioner(e.target.value)} type="checkbox" className="form-check-input" id="aircondition" value='Air conditioner' />
                    <label className=" me-4 form-check-label" for="aircondition">Air conditioner</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setBed(e.target.value)} type="checkbox" className="form-check-input" id="bed" value='Bed' />
                    <label className=" me-4 form-check-label" for="bed">Bed</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setChimney(e.target.value)} type="checkbox" className="form-check-input" id="chimney" value='Chimney' />
                    <label className=" me-4 form-check-label" for="chimney">Chimney</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setCurtains(e.target.value)} type="checkbox" className="form-check-input" id="curtains" value='Curtains' />
                    <label className=" me-4 form-check-label" for="curtains">Curtains</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setDiningTable(e.target.value)} type="checkbox" className="form-check-input" id="diningtable" value='Dining Table' />
                    <label className=" me-4 form-check-label" for="diningtable">Dining Table</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setDishwasher(e.target.value)} type="checkbox" className="form-check-input" id="dishwasher" value='Dishwasher' />
                    <label className=" me-4 form-check-label" for="dishwasher">Dishwasher</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setDryer(e.target.value)} type="checkbox" className="form-check-input" id="dryer" value='Dryer' />
                    <label className=" me-4 form-check-label" for="dryer">Dryer</label>
                  </div>

                </div>


                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setGeyser(e.target.value)} type="checkbox" className="form-check-input" id="geyser" value='Geyser' />
                    <label className=" me-4 form-check-label" for="geyser">Geyser</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setHob(e.target.value)} type="checkbox" className="form-check-input" id="hob" value='Hob' />
                    <label className=" me-4 form-check-label" for="hob">Hob</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMattress(e.target.value)} type="checkbox" className="form-check-input" id="Mattress" value='mattress' />
                    <label className=" me-4 form-check-label" for="mattress">Mattress</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMicrowave(e.target.value)} type="checkbox" className="form-check-input" id="microwave" value='Microwave' />
                    <label className=" me-4 form-check-label" for="microwave">Microwave</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setOven(e.target.value)} type="checkbox" className="form-check-input" id="oven" value='Oven' />
                    <label className=" me-4 form-check-label" for="oven">Oven</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setRefrigerator(e.target.value)} type="checkbox" className="form-check-input" id="refrigerator" value='Refrigerator' />
                    <label className=" me-4 form-check-label" for="refrigerator">Refrigerator</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setSofaSet(e.target.value)} type="checkbox" className="form-check-input" id="sofa" value='Sofa Set' />
                    <label className=" me-4 form-check-label" for="sofa">Sofa Set</label>
                  </div>

                </div>


                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setSolarHeater(e.target.value)} type="checkbox" className="form-check-input" id="solarheater" value='Solar Heater' />
                    <label className=" me-4 form-check-label" for="solarheater">Solar Heater</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setTv(e.target.value)} type="checkbox" className="form-check-input" id="tv" value='TV' />
                    <label className=" me-4 form-check-label" for="tv">TV</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setWardrobe(e.target.value)} type="checkbox" className="form-check-input" id="wardrobe" value='Wardrobe' />
                    <label className=" me-4 form-check-label" for="wardrobe">Wardrobe</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setWashingMachine(e.target.value)} type="checkbox" className="form-check-input" id="washingmachine" value='Washing Machine' />
                    <label className=" me-4 form-check-label" for="washingmachine">Washing Machine</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setWaterPurifier(e.target.value)} type="checkbox" className="form-check-input" id="waterpurifier" value='Water Purifier' />
                    <label className=" me-4 form-check-label" for="waterpurifier">Water Purifier</label>
                  </div>


                </div>


                <label for="flooringtype " className=" mt-5 form-label">Flooring Type </label>

                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setGranite(e.target.value)} type="checkbox" className="form-check-input" id="granite" value='Granite' />
                    <label className=" me-4 form-check-label" for="granite">Granite</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setItalianMarble(e.target.value)} type="checkbox" className="form-check-input" id="italianmarble" value='Italian Marble' />
                    <label className=" me-4 form-check-label" for="italianmarble">Italian Marble</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setKotaStone(e.target.value)} type="checkbox" className="form-check-input" id="kotastone" value='Kota Stone' />
                    <label className=" me-4 form-check-label" for="kotastone">Kota Stone</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setMarble(e.target.value)} type="checkbox" className="form-check-input" id="marble" value='Marble' />
                    <label className=" me-4 form-check-label" for="marble">Marble</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input onChange={(e) => setTiles(e.target.value)} type="checkbox" className="form-check-input" id="tiles" value='Tiles' />
                    <label className=" me-4 form-check-label" for="tiles">Tiles</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input onChange={(e) => setWood(e.target.value)} type="checkbox" className="form-check-input" id="wood" value='Wood' />
                    <label className=" me-4 form-check-label" for="wood">Wood</label>
                  </div>


                </div>

                <label for="details " className=" mt-5 form-label">Additional information, if any</label>
                <div>
                  <textarea value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} className="form-control" id="details"></textarea>
                </div>
                <p className='text-muted fst-italic '>Example: Khata, Key information, Date of availability, etc</p>









                <div className="mb-5 mt-4 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">I am the owner of the above property, or authorised to act on behalf of the owner.</label>
                </div >
                <div className='d-flex justify-content-center mt-5 mb-5'>
                  <button type="submit" className="btn btn-primary ">Submit</button>
                </div>
              </form>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default PropertySignup;