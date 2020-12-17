import React from 'react';
// import Firebase from '../firebase.json';
import config from "../../firebase.config";
import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class Camera extends React.Component {
    state = {
        id: 0,
    };

    componentDidMount() {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
        script1.src = "https://aframe.io/releases/1.0.4/aframe.min.js";
        script1.async = true;
        script2.src = "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
        script2.async = true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);
    }

    render() {
        return (
            <div style={{
                backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/W%20%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%203-min.png?alt=media&token=3cfcf953-9819-462e-abf2-e9c19111af62'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height:'100vh',
                textAlign:'center',

            }}>
                <div style={{paddingTop:'40vh'}}>
                    <div style={{color:'white', fontSize:'20px'}}>Enter your password</div>
                    <input></input>
                    <button>Enter</button>
                    {/*<button className="say-hi-button">SAY HI!</button>*/}
                </div>
                {/*<a-scene embedded arjs>*/}
                {/*    <a-marker preset="hiro">*/}
                {/*        <a-entity*/}
                {/*            position="0 0 0"*/}
                {/*            scale="0.05 0.05 0.05"*/}
                {/*            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"*/}
                {/*        ></a-entity>*/}
                {/*    </a-marker>*/}
                {/*    <a-entity camera></a-entity>*/}
                {/*</a-scene>*/}
            </div>
        )
            ;
    }
}


export default Camera;
