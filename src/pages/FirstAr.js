import React from 'react';
import Firebase from 'firebase';
import config from "../firebase.config";
import {Link} from 'react-router-dom';
// import config from "../firebase.config";

class FirstAr extends React.Component{
    state = {
        id:0,
        code:''
    };
    handleChange=(e)=>{
        this.setState({
            code:e.target.value

        })
        console.log(this.state.code);
    }


    render(){
        return (
            <div>
                <input placeholder="숫자를 입력하시오" value={this.state.code} onChange={this.handleChange}/>
                <button></button>
            </div>
        );
    }}

export default FirstAr;
