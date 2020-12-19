import React from 'react';
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import AFrameRenderer from "../../aframe/AframeRender";
import Marker from "../../aframe/Marker";
import AwesomeSlider from 'react-awesome-slider';
import $ from "jquery";
import Swiper from 'swiper'
import '../../css/Persona.css';
import Slider from "react-slick";
// import Firebase from '../firebase.json';
import config from "../../firebase.config";
import {Link} from 'react-router-dom';

// import config from "../firebase.config";
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

// function Section() {
//     return
//     (<div className="section">
//         <div className="slide">
//             <h3>Slide 2.1</h3>
//         </div>
//         <div className="slide">
//             <h3>Slide 2.2</h3>
//         </div>
//         <div className="slide">
//             <h3>Slide 2.3</h3>
//         </div>
//     </div>)
// }

class Persona extends React.Component {
    state = {
        id: 0,
        howlEnter: false,
        marklEnter: false,
        witchEnter: false,
        turnipHeadEnter: false,
        sophieEnter: false,
    };

    componentDidMount() {
        window.$(".slides").slick({
            asNavFor: '.captions',
            slidesToScroll: 1,
            infinite: true,
            speed: 200,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        })

        window.$(".captions").slick({
            asNavFor: '.slides',
            infinite: false,
            speed: 200,
            fade: true,

            prevArrow: '<div class="pagination__button"><i class="material-icons">left</i></div>',
            nextArrow: '<div class="pagination__button"><i class="material-icons">right</i></div>'
        })
    }

    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
    }

    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
    }

    render() {
        return (
            <ReactFullpage
                scrollOverflow={true}
                sectionsColor={["black"]}
                onLeave={this.onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                render={({state, fullpageApi}) => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1"
                                 style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <img style={{width: '10vw'}}
                                     src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/howl_test.gif?alt=media&token=d54c09fc-9bce-446a-8d6e-250903b2f696"
                                     onClick={() => fullpageApi.moveTo(2, 0) & this.setState({
                                         howlEnter: true,
                                         marklEnter: false,
                                         witchEnter: false,
                                         turnipHeadEnter: false,
                                         sophieEnter: false,
                                     })}
                                />
                                <img style={{width: '10vw'}}
                                     src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/howl_test.gif?alt=media&token=d54c09fc-9bce-446a-8d6e-250903b2f696"
                                     onClick={() => fullpageApi.moveTo(2, 0) & this.setState({
                                         howlEnter: false,
                                         marklEnter: true,
                                         witchEnter: false,
                                         turnipHeadEnter: false,
                                         sophieEnter: false,
                                     })}/>
                                <img style={{width: '10vw'}}
                                     src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/howl_test.gif?alt=media&token=d54c09fc-9bce-446a-8d6e-250903b2f696"
                                     onClick={() => fullpageApi.moveTo(2, 0) & this.setState({
                                         howlEnter: false,
                                         marklEnter: false,
                                         witchEnter: true,
                                         turnipHeadEnter: false,
                                         sophieEnter: false,
                                     })}/>
                                <img style={{width: '10vw'}}
                                     src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/howl_test.gif?alt=media&token=d54c09fc-9bce-446a-8d6e-250903b2f696"
                                     onClick={() => fullpageApi.moveTo(2, 0) & this.setState({
                                         howlEnter: false,
                                         marklEnter: false,
                                         witchEnter: false,
                                         turnipHeadEnter: true,
                                         sophieEnter: false,
                                     })}/>
                                <img style={{width: '10vw'}}
                                     src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/howl_test.gif?alt=media&token=d54c09fc-9bce-446a-8d6e-250903b2f696"
                                     onClick={() => fullpageApi.moveTo(2, 0) & this.setState({
                                         howlEnter: false,
                                         marklEnter: false,
                                         witchEnter: false,
                                         turnipHeadEnter: false,
                                         sophieEnter: true,
                                     })}/>

                            </div>

                            <div className="section">

                                {this.state.howlEnter?
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
                                            <a-box onClick={() => this.appendChild()}>><button>d</button></a-box>
                                            {/*<a-entity*/}
                                            {/*    // onClick={this._entityClick}*/}
                                            {/*    position="0 0 0"*/}
                                            {/*    scale="0.05 0.05 0.05"*/}
                                            {/*    gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"*/}
                                            {/*></a-entity>*/}
                                        </Marker>
                                    </AFrameRenderer>
                                    : <div></div>}

                            </div>

                            {/*{this.state.marklEnter ?*/}
                            {/*    <div> <Slider {...settings}>*/}
                            {/*        <div>*/}
                            {/*            <h3>1</h3>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h3>2</h3>*/}
                            {/*        </div>*/}
                            {/*        <div>*/}
                            {/*            <h3>3</h3>*/}
                            {/*        </div>*/}
                            {/*    </Slider></div>: <div></div>}*/}
                            {/*{this.state.sophieEnter ?  <div> <Slider {...settings}>*/}
                            {/*    <div>*/}
                            {/*        <h3>1</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>2</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>3</h3>*/}
                            {/*    </div>*/}
                            {/*</Slider></div>: <div></div>}*/}
                            {/*{this.state.turnipHeadEnter ?  <div> <Slider {...settings}>*/}
                            {/*    <div>*/}
                            {/*        <h3>1</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>2</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>3</h3>*/}
                            {/*    </div>*/}
                            {/*</Slider></div>: <div></div>}*/}
                            {/*{this.state.witchEnter ? <div> <Slider {...settings}>*/}
                            {/*    <div>*/}
                            {/*        <h3>1</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>2</h3>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3>3</h3>*/}
                            {/*    </div>*/}
                            {/*</Slider></div>: <div></div>}*/}

                        </div>
                    );
                }}
            />
        )
            ;
    }
}


export default Persona;
