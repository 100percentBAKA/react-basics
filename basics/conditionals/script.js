
function getNum() {
    return Math.floor(Math.random() * 10 + 1)
}

// * Conditionals using ternary operator
// class Hello extends React.Component {
//     render() {
//         const num = getNum()
//         return (
//             <div>
//                 <h1>The Number is: {num}</h1>
//                 <p>{(num == 7) ? 'Lucky Number' : 'Not so Lucky Number'}</p>
//                 {/* {(num === 7) ? <p>"Hello there"</p> : null} */}
//                 {(num % 2 === 0) && <p>"Even"</p>}
//             </div>
//         )
//     }
// }

// * Conditionals using if else statements 
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

ReactDOM.render(<Number />, document.querySelector('#root'))