import React from 'react';


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return  <p>boil</p>;
    }
    return <p>not boil</p>;
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }


    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius: </legend>
                <input value={temperature} onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(temperature)} />

            </fieldset>
        );
    }
}