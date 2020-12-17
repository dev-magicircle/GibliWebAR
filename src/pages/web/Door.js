import React from 'react';
import Parallax from 'parallax-js'
import '../../css/Door.css';
import '../../spotLight';
import Firebase from 'firebase';
import config from "../../firebase.config";
import {Link} from 'react-router-dom';
import $ from 'jquery';

// $(function(){
//     $('.spotlight').attr({
//         'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
//     });
// });

// import config from "../firebase.config";

class Door extends React.Component {

    state = {
        id: 0,
    };

    componentDidMount() {
        this.state.id = this.props.match.params.id;
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
        parallaxInstance.friction(0.2, 0.2);
    }
    render() {
        return (
            <div className="react-transition white-wash-in " style={{
                height:'100vh',
                backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%ED%95%98%EC%9A%B8%20%EC%84%B1%20%EB%82%B4%EB%B6%80%20%EB%8D%94%EB%9F%AC%EC%9B%802-min.png?alt=media&token=9c317cc4-2309-4d52-a4ba-3c88c9adffb8'})`,
                padding: '1em',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <img style={{position:'absolute',bottom:'10px',width:'5vw',right:'10px'}}src="https://raw.githubusercontent.com/dev-magicircle/GibliWebAR/master/src/images/pattern-compass.png"/>
                <div id="scene" className="spotlight">
                    <div data-depth="0.1" style={{
                        color:'white'}}><img style={{width:'20vh'}} src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%EC%BA%98%EC%8B%9C%ED%8D%BC-min.png?alt=media&token=75ccf42f-6243-4c29-b0c0-4d14b4654920"/>
                    </div>
                    <div data-depth="0.9"  style={{
                        color:'white'}}>Look for the compass.</div>
                </div>
            </div>
        );
    }
}

export default Door;
