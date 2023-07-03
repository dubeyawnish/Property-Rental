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

function App() {
  return (

    <>
      <Router>
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/propertySignup' element={<PropertySignup />} />
          <Route exact path='/plotSignup' element={<PlotSignup />} />
          <Route exact path='/propertylist' element={<ListedProperties />} />
          <Route exact path='/propertyDetails' element={<PropertyDetails />} />
          <Route exact path='/requirement' element={<Requirement />} />


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
