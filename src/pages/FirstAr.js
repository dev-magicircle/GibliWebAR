import React, {Component} from 'react'
import Firebase from 'firebase'
import config from "../firebase.config"
import '../js/firstar'
import AFrameRenderer from "../aframe/AframeRender";
import Marker from "../aframe/Marker";
// import { Entity } from "aframe-react";
import {render} from 'react-dom'

import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class FirstAr extends Component {
    state = {
        // id: ,
        // password: '',
        // doorEnter: false,
        arEnter: false,
    };

    componentDidMount() {
        // this._getNumber();
        // this._getVisible();
        // const script1 = document.createElement("script");
        // const script2 = document.createElement("script");
        //
        // script1.src = "https://aframe.io/releases/1.0.4/aframe.min.js";
        // script1.async = true;
        // script2.src = "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
        // script2.async = true;
        //
        //
        // document.body.appendChild(script1);
        // document.body.appendChild(script2);
        //
        // // eslint-disable-next-line no-undef
        // AFRAME.registerComponent('markerhandler', {
        //     init: function () {
        //         this.el.sceneEl.addEventListener('markerFound', () => {
        //             // redirect to custom URL
        //             window.location = 'https://github.com/AR-js-org/AR.js';
        //         });
        //     }
        // });
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password);
    }

    _getEnterPassWord = async () => {
        let num = 0;
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        console.log(this.state.password);
        Firebase.database().ref('/' + this.state.password).update({doorEnter: true}).then((dataSnapshot => {
            Firebase.database().ref('/' + this.state.password).on('value', (snapshot) => {
                const data = snapshot.val().doorEnter;
                this.setState({doorEnter: data});
            })
        })).then((dataSnapshot => {
            Firebase.database().ref('/' + this.state.password).on('value', (snapshot) => {
                const data = snapshot.val().arEnter;
                this.setState({arEnter: data});
            })
        }))
    }

    render() {

        return (<div>
                {!this.state.arEnter ?
                    //ar들어온 후
                    <AFrameRenderer
                        // arToolKit={{
                        //     trackingMethod: "best",
                        //     sourceType: "image",
                        //     sourceUrl: "../images/hiro_marker.png"
                        // }}
                        inherent={true}
                    >
                        <Marker parameters={{
                            preset: 'pattern',
                            type: 'pattern',
                            patternUrl: 'https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt',
                            url: 'https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt'
                        }}>
                            <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
                                <a-animation
                                    attribute="rotation"
                                    to="360 0 0"
                                    dur="2000"
                                    easing="linear"
                                    repeat="indefinite"
                                />
                            </a-box>
                        </Marker>
                    </AFrameRenderer>
                    // <AFrameRenderer inherent={true}>
                    //     <Marker parameters={{ preset: "custom" }}>
                    //         <a-box color="blue" position="0 0.09 0" scale="0.4 0.8 0.8">
                    //             <a-animation
                    //                 attribute="rotation"
                    //                 to="360 0 0"
                    //                 dur="2000"
                    //                 easing="linear"
                    //                 repeat="indefinite"
                    //             />
                    //         </a-box>
                    //     </Marker>
                    // </AFrameRenderer>
                    :
                    //ar들어오기 전
                    <div style={{
                        backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/W%20%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%203-min.png?alt=media&token=3cfcf953-9819-462e-abf2-e9c19111af62'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '100vh',
                        textAlign: 'center',

                    }}>
                        <div style={{paddingTop: '40vh'}}>
                            <div style={{color: 'white', fontSize: '20px'}}>Enter your password</div>
                            <input value={this.state.password} onChange={this.handleChange}></input>
                            <button onClick={this._getEnterPassWord}>Enter</button>

                        </div>

                    </div>}</div>
        );
    }
}

export default FirstAr;
