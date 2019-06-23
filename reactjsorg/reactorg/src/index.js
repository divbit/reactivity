import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Clock from './Clock';
import Toggle from './Toggle';
import Page from './Page';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<TickTock />, document.getElementById('root'));

ReactDOM.render(<Hello name= "Jone"/>, document.getElementById('hello'));

ReactDOM.render(<Clock />, document.getElementById('clock'));

ReactDOM.render(<Toggle />, document.getElementById('toggle'));

ReactDOM.render(<Page />, document.getElementById('page'));

ReactDOM.render(<NameForm />, document.getElementById('nameform'));

ReactDOM.render(<EssayForm />, document.getElementById('essayform'));

// function tick(){

//     const element = (
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//     );
//     ReactDOM.render(element, document.getElementById('clock'));
// }

// setInterval(tick, 1000);

var i = 1;
var j = 1;
function counter(){

    const element = (
        <h2>{++i} - {j}</h2>
    );

    if(i === 60000){
        i = 1;
        j = j +1;
    }
    ReactDOM.render(element, document.getElementById('counter'));
}

setInterval(counter, 1000);




serviceWorker.unregister();
