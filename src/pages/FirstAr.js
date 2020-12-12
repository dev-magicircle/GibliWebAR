import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import '../js/firstar';
import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class FirstAr extends React.Component {
    state = {
        // id: ,
        password: '',
        doorEnter: false,
        arEnter:false,
    };

    componentDidMount() {
        // this._getNumber();
        // this._getVisible();
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
        script1.src = "https://aframe.io/releases/1.0.4/aframe.min.js";
        script1.async = true;
        script2.src = "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
        script2.async = true;

        document.body.appendChild(script1);
        document.body.appendChild(script2);

        // eslint-disable-next-line no-undef
        AFRAME.registerComponent('markerhandler', {
            init: function () {
                this.el.sceneEl.addEventListener('markerFound', () => {
                    // redirect to custom URL
                    window.location = 'https://github.com/AR-js-org/AR.js';
                });
            }});
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
                {!this.state.arEnter?
                    //ar들어온 후
                    <div>
                        {/* minimal loader shown until image descriptors are loaded */}
                        <div className="arjs-loader">
                            <div>Loading, please wait...</div>
                        </div>
                        <a-scene vr-mode-ui="enabled: false;" renderer="logarithmicDepthBuffer: true;" embedded arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
                            <a-nft markerhandler type="nft" url="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%EB%82%98%EC%B9%A8%EB%B0%98-min.png?alt=media&token=d7ddba82-3e02-4806-a94f-9959c667eef7">
                            </a-nft>
                            <a-entity camera />
                        </a-scene>
                    </div>:
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
