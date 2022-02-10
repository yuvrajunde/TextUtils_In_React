
import { useState } from 'react';
import './App.css';
//import About from './component/About';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
 import Textform from './component/Textform';

//  import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


//let name="Yuvi";
function App() {

  const [mode, setMode]= useState('light');

  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      type: type,
      msg: message})
      setTimeout(() => {
        setAlert(null);
      }, 1000);
      
  }
  
  const [selects,setSelects]= useState('');
  
  const handlebar=(e)=>{
    //console.log(e);
     console.log(selects);
    setSelects(e.target.value);
    console.log(typeof e.target.value);
    let num=Number(e.target.value);
    console.log(typeof num);
    switch(num)
    {
      case 1:console.log("red");
      document.body.style.backgroundColor= 'red';
      showAlert("Red Mode Enabled", "Success");
      break;
      case 2: console.log("green");
      document.body.style.backgroundColor= 'green';
      showAlert("green Mode Enabled", "Success");
      break;
      case 3:console.log("yellow");
      document.body.style.backgroundColor= 'yellow';
      showAlert("Yellow Mode Enabled", "Success");
      break;
      default:console.log("none");
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode Enabled", "Success");
      break;
    }
  
    
    
        
  }
  const toggleModeChange=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      document.body.style.color='white'; 
      showAlert("Dark Mode Enabled", "Success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color='black'; 
      showAlert("Light Mode Enabled", "Success");
    }
  }
  
  return (
    
    <>
   
     {/* <BrowserRouter> */}

     <Navbar title="YuviUtils" aboutText="About Company" toggleModeChange={toggleModeChange} handlebar={handlebar} mode={mode}></Navbar>
    <Alert alert={alert}  ></Alert>
    <div className="container">
    {/* <Routes> */}
      {/* <Route exact path="/" element={ */}
      <Textform showAlert={showAlert} heading="We will analyze the Text..."label="Please Enter Details"></Textform>
          {/* }> */}
            {/* </Route> */}
      {/* <Route exact path="/about" element={<About />}> */}
      {/* </Route> 
    </Routes> */}
    </div>
  {/* </BrowserRouter> */}

    </>
  );
 
}

export default App;
