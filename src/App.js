import './App.css';
import { Home } from "./components/Home.js";
import {useState, useEffect} from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import { NavBar } from './components/NavBar';

//The parent component of the entire app
const App = () => {

  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 45vh 45vw;
  border-color: magenta;

`;

  return (
    <div className="App">
      { loading?(<BounceLoader loading={loading} css={override} size={150} />) :
      (
      <div id="components">
        <NavBar />
        <Home />
      </div>)}
    </div>
  );
}

export default App;
