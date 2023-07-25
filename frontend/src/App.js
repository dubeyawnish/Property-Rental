
import './App.css';
import { useState  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import PropertySignup from './Pages/PropertySignup/PropertySignup';
import Home from './Pages/Home/Home';
import PlotSignup from './Pages/PlotSignup/PlotSignup';
import Requirement from './Pages/Requirement/Requirement';
import ListedProperties from './Pages/Listed Project Properties/ListedProperties';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import ServiceFee from './Pages/Service and Fee/ServiceFee';
import ContactUs from './Pages/ContactUs/ContactUs';
import Carrier from './Pages/Carrier/Carrier';
import AboutUs from './Pages/AboutUs/AboutUs';
import Interested from './Pages/Interested/Interested';
import ScrollToTop from './Pages/ScrollToTop';
import PropertyListLocation from './Pages/Listed Location Properties/PropertyListLocation.js'
import ListedPlot from './Pages/Listed Project Plot/ListedPlot.js'
import PlotDetails from './Pages/PlotDetails/PlotDetails.js'
import PlotListLocation from './Pages/Listed Location Plot/PlotListLocation.js'

function App() {
  const [pr,setPr]=useState('');

  const receiveDataFromChild = (data) => {
   // console.log("Rammmmmmmm data",data);
    setPr(data);
  };

  return (

    <>
      <Router>
        
        <Navbar pr={pr}  sendDataToParent={receiveDataFromChild} />
        <ScrollToTop />

         <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/propertySignup' element={<PropertySignup />} />
          <Route exact path='/plotSignup' element={<PlotSignup />} />
          <Route  path='/getPropertiesByProject/:projectId'  element={<ListedProperties  pr={pr} />} />
          <Route exact path='/getPropertiesByLocation/:locationId' element={<PropertyListLocation />} />
          <Route exact path='/propertyDetails/:propertyId' element={<PropertyDetails />} />
          <Route exact path='/plotDetails/:plotId' element={<PlotDetails />} />
          <Route exact path='/getPlotByProject/:projectId' element={<ListedPlot />} />
          <Route exact path='/getPlotByLocation/:locationId' element={<PlotListLocation />} />
          <Route exact path='/requirement' element={<Requirement />} />
          <Route exact path='/serviceFee' element={<ServiceFee />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
          <Route exact path='/careers' element={<Carrier />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/interested' element={<Interested />} />
        </Routes> 
        <Footer />
      </Router>
    </>

  );
}

export default App;
