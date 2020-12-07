import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import '../Home.css';
import {Link} from 'react-router-dom';
import Door from './Door';
import Fullpage, {FullPageSections, FullpageSection} from '@ap.cx/react-fullpage'
import '../react-transitions.css';
// import config from "../firebase.config";

class Home extends React.Component {
    state = {
        doorEnter: false,
        id: 0,
        test:false,
    };

    componentDidMount(){
        this._getNumber();
        // this._getVisible();
    }

    //고유 숫자 번호 추가
    _getNumber = async () => {
        let num = 0;
        if (!Firebase.apps.length) Firebase.initializeApp(config);
        Firebase.database().ref('/').once("value")
            .then((dataSnapshot => {
                this.setState({id: dataSnapshot.numChildren() + 1})
            })).then((dataSnapshot => {
            console.log(this.state.id);
            Firebase.database().ref('/' + this.state.id).set({doorEnter: false});
        })).then((dataSnapshot => {
            Firebase.database().ref('/' + this.state.id).on('value', (snapshot) => {
                const data = snapshot.val().doorEnter;
                this.setState({doorEnter: data});
                console.log(this.state.doorEnter);
            })
        }))

    }
    // _getVisible(){
    //     if(!Firebase.apps.length)Firebase.initializeApp(config);
    //     Firebase.database().ref('/').on("value"){
    //
    //     }
    //        }


    render() {
        return (
            <Fullpage>
                <FullPageSections>
                    <FullpageSection class="fullPage" style={{
                        backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/W%20%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%201-min.png?alt=media&token=eeb89679-065d-4946-a062-6a7b72c5f944'})`,
                        height: '100vh',
                        padding: '1em',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <div id="section1Title">Howl’s Moving Castle</div>
                    </FullpageSection>
                    <FullpageSection style={{
                        backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/W%20%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%202-min.png?alt=media&token=dd930606-d824-4ec5-847b-4f83d0664b66'})`,
                        padding: '1em',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}></FullpageSection>
                    {this.state.doorEnter? <div><FullpageSection class="section3 Enter" style={{
                            backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/W%20%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%203-min.jpg?alt=media&token=96afa857-7fa9-475b-a2f5-954df6446951'})`,
                            padding: '1em',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            textAlign:'center'
                        }}>
                            <div  className="transition-container" style={{marginTop:'40vh'}}>

                                <div style={{color: 'black'}}>
                                    You can go in now.
                                </div>
                                <Link to={`/Door/${this.state.id}`}>
                                    <button>Go</button>
                                </Link>
                            </div>
                        </FullpageSection></div> :
                        <div><FullpageSection class="section3 noEnter" style={{
                            backgroundImage: `url(${'https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/%EC%A0%84%EC%8B%9C%20%EC%86%8C%EA%B0%9C%20%EB%B2%88%ED%98%B8%20%EC%9E%85%EB%A0%A5%20%EC%A0%84-min.png?alt=media&token=bf6491f7-5ede-4f3c-b95a-7fb2d04f1eb6'})`,
                            padding: '1em',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            textAlign:'center'
                        }}>
                            <img style={{marginTop:'40vh'}} class="qrCode"
                                 src="https://firebasestorage.googleapis.com/v0/b/gibliwebar.appspot.com/o/frame.png?alt=media&token=5be0fe12-c438-4600-a856-498b21daca68"/>
                            <div>
                                {/*{this.state.doorEnter ? <Link to={`/Door/${this.state.id}`}><button></button></Link>:'d'}*/}
                                <div style={{color: 'black'}}>
                                    Take this QR CODE with your phone.<br/>
                                    And enter '{this.state.id}'.
                                </div>
                            </div>
                        </FullpageSection></div>}
                </FullPageSections>

            </Fullpage>
            //
            // <div>
            //     <div>
            //         {this.state.doorEnter?'d':<Link to={`/Door/${this.state.id}`}><button>Enter</button></Link>}
            //         <div className="styles">
            //             {this.state.id}를 입력하세요.
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Home;
