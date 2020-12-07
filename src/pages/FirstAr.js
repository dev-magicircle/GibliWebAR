import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import {Link} from 'react-router-dom';

// import config from "../firebase.config";

class FirstAr extends React.Component {
    state = {
        id: ,
        password: '',
        doorEnter: false,
    };

    componentDidMount() {
        // this._getNumber();
        // this._getVisible();
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
        }))
    }

    render() {
        return (<div>
                {this.state.doorEnter?<div>d</div>:
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
