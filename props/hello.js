class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.from} says Hello There to {this.props.to}</h1>
            </div>
        )
    }
}
