class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Name />
                <Hello to="person-1" from="person-0" arr={[1, 2, 3, 4]} />
                <Hello to="person-2" from="person-1" arr={[6, 7, 8, 9]} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))