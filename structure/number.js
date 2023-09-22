class Number extends React.Component {
    render() {
        let message;
        const num = getNum();

        if (num % 2 === 0) {
            message = <p>Even Number</p>
        }
        else {
            message = <p>Odd Number</p>
        }

        return (
            <div>
                <h1>The number is : {num}</h1>
                {message}
            </div>
        )
    }
}