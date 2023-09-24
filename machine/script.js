const root = document.querySelector('#root');

const randomGen = () => Math.floor(Math.random() * 3);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.emojiArr = ["🐘", "🐈", "🐒"];
        this.randomIndexes = [randomGen(), randomGen(), randomGen()];
        this.displayText =
            this.randomIndexes.every((index) => index === this.randomIndexes[0])
                ? 'You WIN'
                : 'You LOSE';
    }

    render() {
        return (
            <div>
                <Machine
                    p1={this.emojiArr[this.randomIndexes[0]]}
                    p2={this.emojiArr[this.randomIndexes[1]]}
                    p3={this.emojiArr[this.randomIndexes[2]]}
                />
                <DisplayText text={this.displayText} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);


// const root = document.querySelector('#root');

// const randomGen = function () {
//     return Math.floor(Math.random() * 3);
// };

// class App extends React.Component {
//     render() {
//         const arr = ["🐘", "🐈", "🐒"];
//         const randomIndexes = [randomGen(), randomGen(), randomGen()];

//         let displayText = '';
//         if (
//             randomIndexes[0] === randomIndexes[1] &&
//             randomIndexes[1] === randomIndexes[2]
//         ) {
//             displayText = 'You WIN';
//         } else {
//             displayText = 'You LOSE';
//         }

//         return (
//             <div>
//                 <Machine
//                     p1={arr[randomIndexes[0]]}
//                     p2={arr[randomIndexes[1]]}
//                     p3={arr[randomIndexes[2]]}
//                 />
//                 <DisplayText text={displayText} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, root);
