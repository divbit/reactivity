import React from 'react';

class SuperButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isShow: true};

    }

    // state = {
    //     isShow: true
    // }


    toggle() {
        this.setState({ isShow: !this.state.isShow });
    }

    render() {
        return (
            { this.state.isShow ? 'Showing' : 'Hiding' }
            <button onClick={this.toogle}>Toggle</button>
        );
    }


}

export default SuperButton;