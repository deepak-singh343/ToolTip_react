import React from 'react';
import Tip from './Tip';
function Tooltip(props) {
    const show=()=>{
        let tip=document.getElementById('tip');
        tip.style.display="block";
    }
    const hide=()=>{
        let tip=document.getElementById('tip');
        tip.style.display="none";
    }
    return (
        <div>
            <button id="btn" onMouseEnter={show} onMouseLeave={hide}>Hover over me</button>
            <Tip position={props.position}/>
        </div>
    );
}

export default Tooltip;