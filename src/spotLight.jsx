import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

$(document).mousemove(function(e){
    $('.spotlight').attr({  'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
    });
});

class SpotLight extends React.Component {
    render() {
        return(<div></div>);
    }
}
export default SpotLight;
