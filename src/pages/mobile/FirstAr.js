import React, {Component} from 'react'
import Firebase from '../../firebase.json'
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
        compass1Black: false,
        compass1Blue: false,
        compass1Green: false,
        compass1Red: false,
        compass2Black: false,
        compass2Green: false,
        compass2Red: false,
        compass2Yellow: false,
    };

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

    componentDidMount() {
        this._getDoorEnter();
        // this._getVisible();
    }

    //고유 숫자 번호 추가
    _getDoorEnter = async () => {
        let num = 0;
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/' + this.state.password).on("value", (snapshot) => {
            const compass1BlackData = snapshot.val().compass1Black;
            const compass1BlueData = snapshot.val().compass1Blue;
            const compass1GreenData = snapshot.val().compass1Green;
            const compass1RedData = snapshot.val().compass1Red;
            const compass2BlackData = snapshot.val().compass2Black;
            const compass2GreenData = snapshot.val().compass2Green;
            const compass2RedData = snapshot.val().compass2Red;
            const compass2YellowData = snapshot.val().compass2Yellow;
            this.setState({
                compass1Black: compass1BlackData,
                compass1Blue: compass1BlueData,
                compass1Green: compass1GreenData,
                compass1Red: compass1RedData,
                compass2Black: compass2BlackData,
                compass2Green: compass2GreenData,
                compass2Red: compass2RedData,
                compass2Yellow: compass2YellowData,
            })

        })
            .then((dataSnapshot => {

            }))
        // })).then((dataSnapshot => {
        //     Firebase.database().ref('/' + this.state.id).on('value', (snapshot) => {
        //         const data = snapshot.val().doorEnter;
        //         this.setState({doorEnter: data});
        //     })
        // }))

    }

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
                {!this.state.arEnter ?
                    //ar들어온 후
                    <div>
                        <QrReader
                            delay={300}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            // style={{width: '100%'}}
                        />
                        <p>{this.state.result}</p>
                        {this.state.result != 'https://qrco.de/bbrCSd' ? <div></div> :
                            <div>
                                <img src=""/>
                                <img/>
                                <img/>
                                <img/>
                                {/*<Link to={`/compass/${this.state.password}`}>*/}
                                {/*    <button>Go</button>*/}
                                {/*</Link>*/}
                            </div>}
                    </div>
                    // <AFrameRenderer
                    //     inherent={true}
                    //     getSceneRef={(ref) => this.scene = ref}
                    //     // arToolKit={{ trackingMethod: "tango" }}
                    // >
                    //     <Marker markerhandler parameters={{
                    //         "hit-testing-enabled": true,
                    //         preset: 'pattern',
                    //         type: 'pattern',
                    //         patternUrl: 'https://raw.githubusercontent.com/dev-magicircle/GibliWebAR/master/src/images/pattern-compass.patt',
                    //         url: 'https://raw.githubusercontent.com/dev-magicircle/GibliWebAR/master/src/images/pattern-compass.patt',
                    //         // "hit-testing-enabled": true
                    //     }}>
                    //         <a-box onClick={() => this.appendChild()}>><button>d</button></a-box>
                    //         {/*<a-entity*/}
                    //         {/*    // onClick={this._entityClick}*/}
                    //         {/*    position="0 0 0"*/}
                    //         {/*    scale="0.05 0.05 0.05"*/}
                    //         {/*    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"*/}
                    //         {/*></a-entity>*/}
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
