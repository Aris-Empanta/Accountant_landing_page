import './App.css';
import {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { NavBar } from './components/NavBar';
import { Routes, Route,} from "react-router-dom";
import { HomeSection } from "./components/HomeSection";
import { Accounting } from './components/Accounting';
import { TaxServices } from './components/TaxServices';
import { Insurance } from './components/Insurance';
import { Contact } from './components/Contact';



//The parent component of the entire app
const App = () => {

  const [loading, setLoading] = useState(true)
 
  //Making the loading effect.
  useEffect(() => {    
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })  

  return (
    <div className="App">
      { loading?(<div id="loadingWrapper"><ClipLoader color={"darkcyan"} loading={loading} size={100} /></div>) :
      (<div id="components">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/taxServices" element={<TaxServices />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>                 
      </div>
      )}
    </div>
  );
}

export default App;
