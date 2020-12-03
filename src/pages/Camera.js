import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
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
            <div>
                <div>
                    <button className="say-hi-button">SAY HI!</button>
                </div>
                <a-scene embedded arjs>
                    <a-marker preset="hiro">
                        <a-entity
                            position="0 0 0"
                            scale="0.05 0.05 0.05"
                            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                        ></a-entity>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        )
            ;
    }
}


export default Camera;
