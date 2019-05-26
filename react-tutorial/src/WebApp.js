import React, {
    Component
} from 'react';
import Table from './Table';
import Form from "./Form"

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
            <p />
                <Form handleSubmit={this.handleSubmit} />
                <p />
                <Table characterData={characters} removeCharacter = {this.removeCharacter} />
                
            </div> 
        )
    }
}

export default WebApp