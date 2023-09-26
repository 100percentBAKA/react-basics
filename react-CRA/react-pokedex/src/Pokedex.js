import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

// class Pokedex extends Component {
//     render() {
//         return (
//             <div className='Pokedex'>
//                 <Pokecard
//                     id={4}
//                     name="Charmander"
//                     type="fire"
//                     base_experience={62}
//                 />
//                 <Pokecard
//                     id={7}
//                     name="Squirtle"
//                     type="water"
//                     base_experience={63}
//                 />
//                 <Pokecard
//                     id={11}
//                     name="Metapod"
//                     type="bug"
//                     base_experience={72}
//                 />
//                 <Pokecard
//                     id={12}
//                     name="Butterfree"
//                     type="flying"
//                     base_experience={178}
//                 />
//                 <Pokecard
//                     id={25}
//                     name="Pikachu"
//                     type="electric"
//                     base_experience={112}
//                 />
//                 <Pokecard
//                     id={39}
//                     name="Jigglypuff"
//                     type="normal"
//                     base_experience={95}
//                 />
//                 <Pokecard
//                     id={94}
//                     name="Gengar"
//                     type="poison"
//                     base_experience={225}
//                 />
//             </div>
//         )
//     }
// }

class Pokedex extends Component {

    // ! Default Props
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {

        return (
            <div className='Pokedex'>
                <div className='Pokedex-display'>
                    <h1 className='Pokedex-team'>{this.props.name}</h1>
                    <h1 className='Pokedex-result'>{this.props.result}</h1>
                </div>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <Pokecard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            base_experience={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex