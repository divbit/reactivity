import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className='warning'>
            Warning!
        </div>
    );
}


export default class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);

    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <h1>: {this.state.showWarning.toString()}</h1>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}