import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import '../../css/Persona.css';
// import Firebase from '../firebase.json';
import config from "../../firebase.config";
import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class Persona extends React.Component {
    state = {
        id: 0,
        howlEnter: false,
        marklEnter: false,
        witchEnter: false,
        turnipHeadEnter: false,
        sophieEnter: false,
    };

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
                            </div>
                            <div className="section">
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}


export default Persona;
