import './css/Home.css';
import writting_pen from './images/writting_pen.jpg';
import Typed from 'react-typed';



export const Home = () => {



  return (
    <div className="Home">        
        <img src={ writting_pen } alt="writting pen" id="writting_pen"></img>    
        <h1 id="accountantOfficeTitle">ACCOUNTANT OFFICE IN BOSTON</h1>
        <h2 id="taxConsultantSubTitle">BUSINESS/TAX CONSULTANT FOR&nbsp;&nbsp;
          <span id="services" >
            <Typed 
            strings={[
              'ACCOUNTING MANAGEMENT',
              'BUSINESS SETUP',
              'ACCOUNTING SUPPORT',          
              'BUSINESS CONSULTING'
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
            />
          </span>
        </h2>        
        <h1 id="services"></h1>
        <div id="underHome"></div>
         
      

    </div>
  );
}

