import React from 'react';


function Tick() {
    return (
        <div>
            <h1>It s {new Date().toLocaleTimeString()}.</h1>
        </div>
    );
}


export default Tick;