import React, {Component} from 'react'
import Firebase from 'firebase';
import config from "../../firebase.config"
import '../../js/firstar'
import AFrameRenderer from "../../aframe/AframeRender";
import Marker from "../../aframe/Marker";
import QrReader from 'react-qr-reader'
import {render} from 'react-dom'

import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class FirstAr extends Component {
    state = {
        id: 0,
        password: '',
        doorEnter: false,
        arEnter: false,
        result: 'No result',

    };

    componentDidMount() {
        if (!Firebase.apps.length) Firebase.initializeApp(config);
    }

    //Firebase RDB 값 바꿈
    _compass1RedEnter = async () => {
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        console.log('click');
        Firebase.database().ref('/' + this.state.password).update({
            compass1BlackEnter: false,
            compass1BlueEnter: false,
            compass1GreenEnter: false,
            compass1RedEnter: true,
            compass2BlackEnter: false,
            compass2GreenEnter: false,
            compass2RedEnter: false,
            compass2YellowEnter: false,
        });
    }
    _compass1BlackEnter = async () => {
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/' + this.state.password).update({
            compass1BlackEnter: true,
            compass1BlueEnter: false,
            compass1GreenEnter: false,
            compass1RedEnter: false,
            compass2BlackEnter: false,
            compass2GreenEnter: false,
            compass2RedEnter: false,
            compass2YellowEnter: false,
        });
    }
    _compass1BlueEnter = async () => {
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/' + this.state.password).update({
            compass1BlueEnter: true,
            compass1GreenEnter: false,
            compass1RedEnter: false,
            compass2BlackEnter: false,
            compass2GreenEnter: false,
            compass2RedEnter: false,
            compass2YellowEnter: false,
        });
    }
    _compass1GreenEnter = async () => {
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/' + this.state.password).update({
            compass1BlueEnter: false,
            compass1GreenEnter: true,
            compass1RedEnter: false,
            compass2BlackEnter: false,
            compass2GreenEnter: false,
            compass2RedEnter: false,
            compass2YellowEnter: false,
        });
    }
    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }


    // })).then((dataSnapshot => {
    //     Firebase.database().ref('/' + this.state.id).on('value', (snapshot) => {
    //         const data = snapshot.val().doorEnter;
    //         this.setState({doorEnter: data});
    //     })
    // }))


    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
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

    appendChild() {
        console.log('dd');
    }


    render() {
        return (<div>
                {this.state.arEnter ?
                    //ar들어온 후
                    <div>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            // style={{width: '100%'}}
                        />

                        {!this.state.result == 'https://qrco.de/bbrCSd' ? <div></div> :
                            // <div className='compass1'>
                            //     <img id='compass1Red' style={{width: '50vw'}} onClick={this._compass1RedEnter}
                            //          src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass_red.png?alt=media&token=b24735f1-d62b-4bab-8895-61d9580f8d80"/>
                            //     <img id='compass1Black' style={{width: '50vw'}} onClick={this._compass1BlackEnter}
                            //          src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass_black.png?alt=media&token=0ebea1d8-3e61-4f39-a585-ceef2e600d71"/>
                            //     <img id='compass1Blue' style={{width: '50vw'}} onClick={this._compass1BlueEnter}
                            //          src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass_blue.png?alt=media&token=61e95f41-9643-42eb-b04b-22a049d7927c"/>
                            //     <img id='compass1Green' style={{width: '50vw'}} onClick={this._compass1GreenEnter}
                            //          src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass_green.png?alt=media&token=202c90c6-b35b-4084-b7a2-434e5aee7124"/>
                                {/*<Link to={`/compass/${this.state.password}`}>*/}
                                {/*    <button>Go</button>*/}
                                {/*</Link>*/}
                            {/*</div>*/}
                        }
                    {/*</div>*/}
                    <AFrameRenderer
                        inherent={true}
                        getSceneRef={(ref) => this.scene = ref}
                        // arToolKit={{ trackingMethod: "tango" }}
                    >
                        <Marker markerhandler parameters={{
                            "hit-testing-enabled": true,
                            preset: 'pattern',
                            type: 'pattern',
                            patternUrl: 'https://raw.githubusercontent.com/dev-magicircle/GibliWebAR/master/src/images/pattern-compass.patt',
                            url: 'https://raw.githubusercontent.com/dev-magicircle/GibliWebAR/master/src/images/pattern-compass.patt',
                            // "hit-testing-enabled": true
                        }}>
                            <a-image  rotation="-90 0 0" src="https://tpc.googlesyndication.com/simgad/6785946098714999368"></a-image>
                            {/*<a-entity*/}
                            {/*    // onClick={this._entityClick}*/}
                            {/*    position="0 0 0"*/}
                            {/*    scale="0.05 0.05 0.05"*/}
                            {/*    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"*/}
                            {/*></a-entity>*/}
                        </Marker>
                        <Marker parameters={{ preset: 'hiro' }}>
                            <a-box color='pink' material='opacity: 1;' position="0 0.003 0" scale='0.4 0.4 0.4'>
                                <a-animation attribute="rotation" to="360 0 0" dur="5000" easing="linear" repeat="indefinite" />
                            </a-box>
                        </Marker>
                    </AFrameRenderer>

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
