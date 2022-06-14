import './App.css';
import { HomeSection } from "./components/HomeSection.js";
import {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { NavBar } from './components/NavBar';

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
        <HomeSection />       
      </div>)}
    </div>
  );
}

export default App;
