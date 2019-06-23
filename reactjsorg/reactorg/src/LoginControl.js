import React from 'react';

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.LoginButton = this.LoginButton.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

    return (
        <div>
            {button}
        </div>
    );

    }

}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
