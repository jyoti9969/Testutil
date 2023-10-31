
import './App.css';
import Navbar from './componentes/Navbar';
// import About from './componentes/About';
import Textform from './componentes/Textform';
import React,{useState} from 'react'
import Alert from './componentes/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
//   Link,
 
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
             type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }

  
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
      document.title="textuits dark mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="textuits light mode"
    }
  }
  return (
    <>
    
    <Navbar  title="My-textutil" mode={mode}  enableDarkmode={togglemode}/>
    <Alert  alert={alert} />
    <div className="container">
    <Textform mode={mode} showAlert={showAlert}  /> 
    </div>

    
  </>
  );
}

export default App;
