
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import PropertySignup from './Pages/PropertySignup/PropertySignup';
import Home from './Pages/Home/Home';
import PlotSignup from './Pages/PlotSignup/PlotSignup';
import Requirement from './Pages/Requirement/Requirement';
//import ListedProperties from './Pages/Listed Project Properties/ListedProperties';
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
//import BuilderProjects from './Pages/BuilderProjects/BuilderProjects.js';
import ProjectByLocation from './Pages/BuilderProjectsByLocation/ProjectByLocation';
import PageNotFound from './Pages/Page Not Found/PageNotFound';
//import ResidentailProjects from './Pages/ResidentialProject/ResidentialProject';

//import ProjectDirection from './Pages/ProjectDirection/ProjectDirection';
const Lazyload = React.lazy(() => import('./Pages/Listed Project Properties/ListedProperties'));
const LazyResidential = React.lazy(() => import('./Pages/ResidentialProject/ResidentialProject'));
const LazyBuilderProject = React.lazy(() => import('./Pages/BuilderProjects/BuilderProjects.js'));
//const LazyProjectByLocation=React.lazy(()=> import('./Pages/BuilderProjectsByLocation/ProjectByLocation'));
const LazyProjectDirection = React.lazy(() => import('./Pages/ProjectDirection/ProjectDirection'));

function App() {




  return (

    <>
      <Router>

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/propertySignup' element={<PropertySignup />} />
          <Route exact path='/plotSignup' element={<PlotSignup />} />
          {/* <Route exact path='/getPropertiesByProject/:projectId'  element={<ListedProperties  />} /> */}
          <Route exact path='/getPropertiesByProject/:projectId' element={<React.Suspense fallback='Loading...'>
            <Lazyload />
          </React.Suspense>} />
          <Route exact path='/getPropertiesByLocation/:locationId' element={<PropertyListLocation />} />
          <Route exact path='/propertyDetails/:propertyId' element={<PropertyDetails />} />
          <Route exact path='/plotDetails/:plotId' element={<PlotDetails />} />
          <Route exact path='/getPlotByProject/:projectId' element={<ListedPlot />} />
          <Route exact path='/getPlotByLocation/:locationId' element={<PlotListLocation />} />
          <Route exact path='/builderProject/:builderId' element={<React.Suspense fallback='Loading...'>
            <LazyBuilderProject />
          </React.Suspense>} />
          <Route exact path='/builderProjectByLocation/:location' element={<ProjectByLocation />} />

          {/* <Route exact path='/residentialProjects' element={<ResidentailProjects />} /> */}
          <Route exact path='/residentialProjects' element={<React.Suspense fallback='Loading...'>
            <LazyResidential />
          </React.Suspense>} />
          {/* <Route exact path='/projectDirection/:direction' element={<ProjectDirection />} /> */}
          <Route exact path='/projectDirection/:direction' element={<React.Suspense fallback='Loading...'>
            <LazyProjectDirection />
          </React.Suspense>} />
          <Route exact path='/requirement' element={<Requirement />} />
          <Route exact path='/serviceFee' element={<ServiceFee />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
          <Route exact path='/careers' element={<Carrier />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/interested' element={<Interested />} />
          <Route  path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>

  );
}

export default App;
