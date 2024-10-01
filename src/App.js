// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (msg,typ)=> {
        setAlert({
          msg: msg,
          typ: typ
      })
      setTimeout(()=>{
        setAlert(null);
      },3000);
  }
  
  // const [btnTxt,setBtnTxt] = useState("Enable Light Mode");

  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert('Dark mode has been enabled!','success');
      // document.title='Textutils - Dark Mode ';
      setInterval(() => {
        document.title = 'TextUtils is amazing ';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert('Light mode has been enabled!','success');
      // document.title='Textutils - Light Mode ';

    }

  }
  return (
  <>
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
  <Alert alert={alert}/>
  <div className="container my-3" >
    {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Insert text below" mode={mode} alert={showAlert}/>}>
            </Route>
    </Routes> */}
  {/* </div> */}
  {/* </Router> */}
            <TextForm heading="Insert text below" mode={mode} alert={showAlert}  />
            {/* <About/> */}
  </div>
  </>
  );
}

export default App;
