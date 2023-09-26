import React, { Component } from 'react'
import './Dog.css'
import img from './tesseract.png'

class Dog extends Component {
    render() {
        return (
            <div className='Dog'>
                <h1>DOG</h1>
                <img src={img} alt='Something' className='Dog-img' />
            </div>
        )
    }
}

export default Dog