import React from 'react'
import ReactDOM from 'react-dom'
import { choice, remove } from './helper'

class App extends React.Component {
    render() {
        const fruit = choice()
        return (
            <div>
                <h3>I'd like one {fruit}, please</h3>
                <h3>Here you go {fruit}</h3>
                <h3>Delicious, may I have another ?</h3>
                <h3>I am sorry we are all out, we have {remove(fruit).length} other fruits left</h3>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))