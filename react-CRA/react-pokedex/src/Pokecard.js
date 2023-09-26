import React, { Component } from 'react'
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {

        let imageSource = `${POKE_API}${this.props.id}.png`

        return (
            <div className='Pokecard'>
                <p className='Pokecard-name'>{this.props.name}</p>
                <img src={imageSource} alt={`A ${this.props.name}`} />
                <p className='Pokecard-type'>{this.props.type}</p>
                <p className='Pokecard-exp'>{this.props.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard