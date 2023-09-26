class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <h1>Hello React</h1>
                <h1>Hello React</h1>
                <img src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            </div>
        )
    }
}


ReactDOM.render(<Hello />, document.querySelector('#root'))