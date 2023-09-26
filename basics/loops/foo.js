class App extends React.Component {
    render() {
        return (
            <Student name='adarsh' hobbies={['foo', 'foo-1']} />
        )
    }
}

class Student extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
// const display = function (map) {
//     map.forEach((value, key) => {
//         console.log(`${key}, ${value}`)
//     })
// }

// const newMap = new Map(
//     [
//         [1, ['adarsh', 'google']],
//         [2, ['arun', 'microsoft']],
//         [3, ['akash', 'atlassian']],
//         [4, ['aashrith', 'apple']]
//     ]
// )

// display(newMap)

// console.log(newMap.get(1))
