import React, {
    Component
} from 'react';
import Table from './Table';
import Form from "./Form"

class WebApp extends Component {

    state = {

        characters: []
        // characters: [
// 
            // {
            //     name: 'Charlie',
            //     job: 'Janitor'
            // },
            // {
            //     name: 'Mac',
            //     job: 'Bouncer'
            // },
            // {
            //     name: 'Dee',
            //     job: 'Aspring actress'
            // },
            // {
            //     name: 'Dennis',
            //     job: 'Bartender'
            // },
            // {
            //     name: 'Joe',
            //     job: 'Pro Player'
            // },
            // {
            //     name: 'James',
            //     job: 'Gamer'
            // }

        // ],
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

        const { characterData } = this.props;
        const { characters } = this.state;

        return (

            <div className = "container" >
                <Table characterData={characters} removeCharacter = {this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div> 
        )
    }
}

export default WebApp