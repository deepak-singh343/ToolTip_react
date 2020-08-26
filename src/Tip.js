import React from 'react';

function Tip(props) {
    const dynamiclass=(position)=>{
        if(position==="Left")
        {
            return 'tipleft';
        }
        else if(position==="Right")
        {
            return 'tipright';
        }
        else if(position==="Top")
        {
            return 'tiptop';
        }
        else if(position==="Bottom")
        {
            return 'tipbottom';
        }
        else{
            return 'tiptop';
        }

    }
    return (
        <div>
            <span id='tip' className={dynamiclass(props.position)}>
            Learn By Doing, Practicing and Not Just Reading
            </span>
        </div>
    );
}

export default Tip;