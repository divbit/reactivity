import React from 'react';

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}

        //need to take a look at the function binding.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // <button onClick={this.handleClick}>
            // {this.state.isToggleOn ? 'ON' : 'OFF'}
            // </button>

            <button onClick={(e) => this.handleClick(e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;