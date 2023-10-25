// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from "./Components/About";
import Alert from './Components/Alert';
import React, {useState} from 'react'
 


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleNavmode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#000040";
      showAlert("Dark Mode is enabled", "success");
    }
    
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success")
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleNavmode={toggleNavmode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

