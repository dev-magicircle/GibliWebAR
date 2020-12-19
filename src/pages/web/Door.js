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
        compass1Black: false,//한번 이미 클릭했으면 false로 되게 하기
        compass1Blue: false,
        compass1Green: false,
        compass1Red: false,
        compass2Black: false,
        compass2Green: false,
        compass2Red: false,
        compass2Yellow: false,
        compass1BlackEnter: false,
        compass1BlueEnter: false,
        compass1GreenEnter: false,
        compass1RedEnter: false,
        compass2BlackEnter: false,
        compass2GreenEnter: false,
        compass2RedEnter: false,
        compass2YellowEnter: false,
    };

    componentDidMount() {
        this.state.id = this.props.match.params.id;
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene, {
            relativeInput: true
        });
        parallaxInstance.friction(0.2, 0.2);
        this._getDoorEnter();
        // this._getVisible();
    }

    //고유 숫자 번호 추가
    _getDoorEnter = async () => {
        let num = 0;
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/' + this.props.match.params.id).once("value").then((dataSnapshot => {
        })).then((dataSnapshot => {
            Firebase.database().ref('/' + this.props.match.params.id).on('value', (snapshot) => {
                const compass1BlackData = snapshot.val().compass1BlackEnter;
                if (compass1BlackData) {
                    this.setState({
                        compass1Black: true,
                        compass1BlackEnter: true,
                        compass1BlueEnter: false,
                        compass1GreenEnter: false,
                        compass1RedEnter: false,
                        compass2BlackEnter: false,
                        compass2GreenEnter: false,
                        compass2RedEnter: false,
                        compass2YellowEnter: false,

                    })
                }
                const compass1BlueData = snapshot.val().compass1BlueEnter;
                if (compass1BlueData) this.setState({
                    compass1Blue: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: true,
                    compass1GreenEnter: false,
                    compass1RedEnter: false,
                    compass2BlackEnter: false,
                    compass2GreenEnter: false,
                    compass2RedEnter: false,
                    compass2YellowEnter: false,
                })
                const compass1GreenData = snapshot.val().compass1GreenEnter;
                if (compass1GreenData) this.setState({
                    compass1Green: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: true,
                    compass1RedEnter: false,
                    compass2BlackEnter: false,
                    compass2GreenEnter: false,
                    compass2RedEnter: false,
                    compass2YellowEnter: false,
                })
                const compass1RedData = snapshot.val().compass1RedEnter;
                if (compass1RedData) this.setState({
                    compass1Red: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: false,
                    compass1RedEnter: true,
                    compass2BlackEnter: false,
                    compass2GreenEnter: false,
                    compass2RedEnter: false,
                    compass2YellowEnter: false,
                })
                const compass2BlackData = snapshot.val().compass2BlackEnter;
                if (compass2BlackData) this.setState({
                    compass2Black: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: false,
                    compass1RedEnter: false,
                    compass2BlackEnter: true,
                    compass2GreenEnter: false,
                    compass2RedEnter: false,
                    compass2YellowEnter: false,
                })
                const compass2GreenData = snapshot.val().compass2GreenEnter;
                if (compass2GreenData) this.setState({
                    compass2Green: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: false,
                    compass1RedEnter: false,
                    compass2BlackEnter: false,
                    compass2GreenEnter: true,
                    compass2RedEnter: false,
                    compass2YellowEnter: false,
                })
                const compass2RedData = snapshot.val().compass2RedEnter;
                if (compass2RedData) this.setState({
                    compass2Red: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: false,
                    compass1RedEnter: false,
                    compass2BlackEnter: false,
                    compass2GreenEnter: false,
                    compass2RedEnter: true,
                    compass2YellowEnter: false,
                })
                const compass2YellowData = snapshot.val().compass2YellowEnter;
                if (compass2YellowData) this.setState({
                    compass2Yellow: true,
                    compass1BlackEnter: false,
                    compass1BlueEnter: false,
                    compass1GreenEnter: false,
                    compass1RedEnter: false,
                    compass2BlackEnter: false,
                    compass2GreenEnter: false,
                    compass2RedEnter: false,
                    compass2YellowEnter: true,
                })

                console.log(this.state)
            })


        }))
    }


    render() {
        return (
            <div>
                {this.state.compass1BlackEnter ? <div className="react-transition white-wash-in "
                                                      style={{
                                                          height: '100vh',
                                                          backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass1Black-min.png?alt=media&token=0ce791dc-ab3f-4e0c-bd38-5e6934a9a883'})`,
                                                          padding: '1em',
                                                          backgroundRepeat: 'no-repeat',
                                                          backgroundSize: 'cover'
                                                      }}/> : <div></div>}
                {this.state.compass1BlueEnter ? <div className="react-transition white-wash-in "
                                                     style={{
                                                         height: '100vh',
                                                         backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass1Bue-min.png?alt=media&token=92e417ec-1b72-49e2-a181-9dcfc3790aa5'})`,
                                                         padding: '1em',
                                                         backgroundRepeat: 'no-repeat',
                                                         backgroundSize: 'cover'
                                                     }}/> : <div></div>}
                {this.state.compass1GreenEnter ? <div className="react-transition white-wash-in "
                                                      style={{
                                                          height: '100vh',
                                                          backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass1Green-min.png?alt=media&token=062b30ef-7287-4b7d-b3d8-80dcbb9f5068'})`,
                                                          padding: '1em',
                                                          backgroundRepeat: 'no-repeat',
                                                          backgroundSize: 'cover'
                                                      }}/> : <div></div>}
                {this.state.compass1RedEnter ? <div className="react-transition white-wash-in "
                                                    style={{
                                                        height: '100vh',
                                                        backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compass1Red-min.png?alt=media&token=92a94163-1c0f-4ad4-b097-f162331a72f1'})`,
                                                        padding: '1em',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover'
                                                    }}/> : <div></div>}
                {!(this.state.compass1RedEnter || this.state.compass1GreenEnter || this.state.compass1BlackEnter || this.state.compass1BlueEnter) ?
                    <div>
                        <div className="react-transition white-wash-in "
                             style={{
                                 height: '100vh',
                                 backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%ED%95%98%EC%9A%B8%20%EC%84%B1%20%EB%82%B4%EB%B6%80%20%EB%8D%94%EB%9F%AC%EC%9B%802-min.png?alt=media&token=9c317cc4-2309-4d52-a4ba-3c88c9adffb8'})`,
                                 padding: '1em',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundSize: 'cover'
                             }}>

                            <img style={{position: 'absolute', bottom: '10px', width: '10vw', right: '10px'}}
                                 src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/compassQR-min.png?alt=media&token=8aa342bc-d7f4-42b1-8c27-9a2e61c5096b"/>
                            <div id="scene" className="spotlight">
                                <div data-depth="0.1" style={{
                                    color: 'white'
                                }}><img style={{width: '20vh'}}
                                        src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%EC%BA%98%EC%8B%9C%ED%8D%BC-min.png?alt=media&token=75ccf42f-6243-4c29-b0c0-4d14b4654920"/>
                                </div>
                                <div data-depth="0.9" style={{
                                    color: 'white'
                                }}>This is Howl's castle. Find a magic compass where you can go somewhere else.
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>}
            </div>
        );
    }
}

export default Door;
