import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import PropertySignup from './Pages/PropertySignup/PropertySignup';
import Home from './Pages/Home/Home';
import PlotSignup from './Pages/PlotSignup/PlotSignup';
import Requirement from './Pages/Requirement/Requirement';
import ListedProperties from './Pages/Listed Properties/ListedProperties';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import ServiceFee from './Pages/Service and Fee/ServiceFee';
import ContactUs from './Pages/ContactUs/ContactUs';
import Carrier from './Pages/Carrier/Carrier';
import AboutUs from './Pages/AboutUs/AboutUs';
import Interested from './Pages/Interested/Interested';
import ScrollToTop from './Pages/ScrollToTop';

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
          <Route exact path='/getPropertiesByProject/:projectId' element={<ListedProperties />} />
          <Route exact path='/propertyDetails' element={<PropertyDetails />} />
          <Route exact path='/requirement' element={<Requirement />} />
          <Route exact path='/serviceFee' element={<ServiceFee />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
          <Route exact path='/carrier' element={<Carrier />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/interested' element={<Interested />} />
          



          {/* {<PropertyDetails />} */}
          {/* {  <Home />  } */}
          {/* { <Requirement />} */}

          {/* { <ListedProperties />} */}
          {/* { <PlotSignup />}  */}


          {/* {<PropertySignup />} */}
        </Routes> 
        <Footer />
      </Router>
    </>

  );
}

export default App;
