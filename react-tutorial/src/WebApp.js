import React, {
    Component
} from 'react';
import Table from './Table';
import Form from "./Form";

class WebApp extends Component {

    state = {
        characters: []
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({

            characters: characters.filter((character, i) => {
                    return i !== index
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {

        //const { characterData } = this.props;
        const { characters } = this.state;

        return (

            <div className = "container" >
            <div className="row">
            <div className="col-md-4 offset-1">
                <p />

                <Form handleSubmit={this.handleSubmit} />
                
                <p />
                </div>
                <div className="col-md-7">
                <p />
                <Table characterData={characters} removeCharacter = {this.removeCharacter} />
                </div>
                </div>
            </div> 
        )
    }
}

export default WebApp