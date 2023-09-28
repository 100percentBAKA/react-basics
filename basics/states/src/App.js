import React from 'react';
import { useState } from 'react'

const App = (props) => {

    const [events, setEvents] = useState([
        { title: 'Study Maths module 1', id: 1 },
        { title: 'Learn React and firebase', id: 2 },
        { title: 'Learn Asynchronous Javascript', id: 3 }
    ])

    const handleClick = (id) => {
        setEvents((prevEvents) => {
            return prevEvents.filter((event) => {
                return event.id !== id
            })
        })
    }

    return (
        <div className='App'>
            {events.map((event, index) => (
                <div key={event.id}>
                    <h1>{index} - {event.title}</h1>
                    <button onClick={() => (handleClick(event.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;