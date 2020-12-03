import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import {Link} from 'react-router-dom';
// import config from "../firebase.config";

class Door extends React.Component{
    state = {
        id:0,
    };
    componentDidMount() {
        this.state.id=this.props.match.params.id;

    }

    render(){
        return (
            <div>
                <div>
                    <button onClick={this._addNumber}>dd</button>
                    <div className="styles">
                        {this.props.match.params.id}를 입력하세요.
                    </div>
                </div>
            </div>
        );
    }}

export default Door;
