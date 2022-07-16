import * as React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
const HomeSection = React.lazy(() => import("./components/HomeSection"))
const TaxServices = React.lazy(() => import("./components/TaxServices"))
const Insurance = React.lazy(() => import("./components/Insurance"))
const Contact = React.lazy(() => import("./components/Contact"))
const Accounting = React.lazy(() => import("./components/Accounting"))



//The parent component of the entire app
const App = () => {

    const [loading, setLoading] = useState(true)
  
    //Making the loading effect.
    useEffect(() => {    
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    })  

        return ( <div>
                  { loading?(<div id="loadingWrapper"><ClipLoader color={"darkcyan"} loading={loading} size={100} /></div>) :(
                    <div id="components">                    
                      <NavBar />      
                      <React.Suspense fallback={
                        <div id="loadingWrapper"><ClipLoader color={"darkcyan"} loading={loading} size={100} /></div>
                        }>          
                        <Routes>                        
                            <Route path="/" element={<HomeSection />} />                          
                            <Route path="/accounting" element={<Accounting />}/>                          
                            <Route path="/taxServices" element={<TaxServices />} />
                            <Route path="/insurance" element={<Insurance />} />
                            <Route path="/contact" element={<Contact />} />                        
                        </Routes>                  
                     </React.Suspense>  
                    </div>
                    )}
                  </div>                             
  );
}

export default App;
