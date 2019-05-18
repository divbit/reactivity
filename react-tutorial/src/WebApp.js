import React, {
    Component
} from 'react';
import Table from './Table';

class WebApp extends Component {

    state = {
        characters: [

            {
                name: 'Charlie',
                job: 'Janitor'
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Dee',
                job: 'Aspring actress'
            },
            {
                name: 'Dennis',
                job: 'Bartender'
            },
            {
                name: 'Joe',
                job: 'Pro Player'
            },
            {
                name: 'James',
                job: 'Gamer'
            }

        ],
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({

            characters: characters.filter((character, i) => {
                    return i !== index
            })
        });
    }


    render() {

        const { characterData } = this.props;
        const { characters } = this.state;

        // const characters = [

        //     {
        //         name: 'Charlie',
        //         job: 'Janitor'
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer'
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspring actress'
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartender'
        //     },
        //     {
        //         name: 'Joe',
        //         job: 'Pro Player'
        //     },
        //     {
        //         name: 'James',
        //         job: 'Gamer'
        //     }

        // ]


        return (

            <div className = "container" >
                <Table characterData={characters} removeCharacter = {this.removeCharacter} />
            </div> 
        )
    }
}

export default WebApp