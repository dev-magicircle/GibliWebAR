import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import {Link} from 'react-router-dom';
import Door from '../pages/Door';

// import config from "../firebase.config";

class Home extends React.Component {
    state = {
        doorEnter: false,
        id: 0,
    };

    componentDidMount() {
        this._getNumber();
        this._getVisible();
    }

    //고유 숫자 번호 추가
    _getNumber=async()=>{
        let num = 0;
        if(!Firebase.apps.length)Firebase.initializeApp(config);
        Firebase.database().ref('/').once("value")
            .then((dataSnapshot=>{
            this.setState({id:dataSnapshot.numChildren()+1})
        })).then((dataSnapshot=>{console.log(this.state.id);Firebase.database().ref('/' + this.state.id).set({doorEnter:false});}))
    }
    // _getVisible(){
    //     if(!Firebase.apps.length)Firebase.initializeApp(config);
    //     Firebase.database().ref('/').on("value"){
    //
    //     }
    //        }


    render() {
        return (
            <div>
                <div>
                    {this.state.doorEnter?'d':<Link to={`/Door/${this.state.id}`}><button>Enter</button></Link>}
                    <div className="styles">
                        {this.state.id}를 입력하세요.
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
