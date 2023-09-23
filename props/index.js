class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Name />
                <Hello to="person-1" from="person-0" />
                <Hello to="person-2" from="person-1" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))