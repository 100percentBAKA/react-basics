class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Number />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))