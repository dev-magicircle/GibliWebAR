import React,{useEffect} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import config from "../src/firebase.config";
import Firebase from 'firebase';
import Home from './pages/Home';
import Door from './pages/Door';
import Camera from './pages/Camera';
import FirstAr from "./pages/FirstAr";
import Compass from './pages/Compass';

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
                        <Route path="/camera/:id" component={Camera}/>
                        <Route path="/firstar" component={FirstAr}/>
                        <Route path="/compass" component={Compass}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
