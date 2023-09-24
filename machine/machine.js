
class Machine extends React.Component {
    render() {
        return (
            <h1>{this.props.p1},{this.props.p2}, {this.props.p3}</h1>
        )
    }
}


class DisplayText extends React.Component {
    render() {
        return (
            <h2>{this.props.text}</h2>
        )
    }
}