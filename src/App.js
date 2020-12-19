import React,{useEffect} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Door from './pages/web/Door';
import Camera from './pages/mobile/Camera';
import FirstAr from "./pages/mobile/FirstAr";
import Compass from './pages/mobile/Compass';
import Persona from './pages/web/Persona';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        style1: false,
        readError:null
      };
    }


    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/door/:id" component={Door}/>
                        <Route path="/firstar" component={FirstAr}/>
                        <Route path="/compass" component={Compass}/>
                        <Route path="/persona" component={Persona}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
