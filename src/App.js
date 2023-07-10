import "./App.css";
import background from "./background.jpg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Demo from "./components/Demo";

function App() {

  const setsAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })

    setTimeout(() => {
      setsAlert(null)
    }, 3000);
  
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('success')
      document.body.style.backgroundColor='white'
    //  setsAlert('Light mode has been enabled','success')
    document.title= 'Text-utils: light mode'

    setInterval(() => {
      document.title= 'Text-utils is an amazing app!'
    }, 2000);
    setInterval(() => {
      document.title= 'Install Text-utils now!'
    }, 1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
   //   setsAlert('Dark mode has been enabled','info')
   document.title= 'Text-utils: dark mode'
    }

  }
  const  [mode, setMode]= useState('light')   //whether dark mode is enabled or not
   const [alert,setAlert] = useState(null)

 


  return (
    <>
     <Router>
      <div >
       
        <Navbar title="Text-Utils by Sam"  mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
        <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <TextForm setsAlert={setsAlert}></TextForm>
          </Route>

          <Route path="/demo">
        <Demo></Demo>
          </Route>

        </Switch>
        
        </div>
        <Link to='/about'>Click for about</Link>
        <Link to='/Demo'>Click for DEMO</Link>
      </div>
      </Router>
    </>
  );
}

export default App;
