import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

//state is something fully controlled by the component.
componentDidMount() {

    //idTimer is save in this.
    this.idTimer = setInterval (
        () => this.tick(), 1000
    );
}

componentWillUnmount() {
    clearInterval(this.idTimer);
}

tick() {
    //do not set state directly
    this.setState({
        date: new Date()
    });
}

render() {
    return(
        <div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
}

export default Clock;

