import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import PropertySignup from './Pages/PropertySignup/PropertySignup';
import Home from './Pages/Home/Home';
import PlotSignup from './Pages/PlotSignup/PlotSignup';
import Requirement from './Pages/Requirement/Requirement';

function App() {
  return (
    <>
      <Navbar />
     {/* { <Home />} */}
     <Requirement />


      {/* { <PlotSignup />} */}


      {/* {   <PropertySignup />}  */}
      <Footer />
    </>

  );
}

export default App;
