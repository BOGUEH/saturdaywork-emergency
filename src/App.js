
import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import ContactUs from './Components/ContactUs';

import About from './Components/About';
import Service from './Components/Service';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

  
 
      <div id="navbar">  
            <div className="container">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
              <a class="navbar-brand" href="home"><img src="../images/emergencylogo.jpeg" alt="logo" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
                <div className="float-left">   
                  <div class="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul class="navbar-nav">
                          <li class="nav-item">
                          <Link to ="/home" className="navDetails">HOME</Link> 
                          </li>
                          <li class="nav-item">
                          <Link to ="/service" className="navDetails"> SERVICE</Link> 
                          </li>
                          <li class="nav-item">
                          <Link to ="/about"className="navDetails">ABOUT </Link>
                          </li>
                          <li class="nav-item">
                          <Link to ="/downloadapp"className="navDetails" id="downloadLogo">Download App </Link>
                          </li>
                        
                        </ul>
                    </div>
                    
                    </div> 
                    {/* this the the end of the nav-menu link */}
                  
                </div>
            </nav>
          </div>
        </div>

      <Switch>
          <Route path="/contact">
            <ContactUs />
          </Route>
      

          <Route path="/service">
            <Service />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

      </Switch>
   
    </div>
  );
}

export default App;
