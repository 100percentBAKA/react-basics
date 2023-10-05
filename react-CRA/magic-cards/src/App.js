import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './component/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //* Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // console.log(cards, turns)
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // * Reset Turns
  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  // ! useEffect takes in a callback function and dependencies (list) as arguments 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      console.log('Both Cards selected')
    }
  },
    [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='App-card-grid'>
        {
          cards.map(card => (
            // <div className='App-card' key={card.id}>
            //   <div>
            //     <img src={card.src} className='App-card-front' alt='card front' />
            //     <img src={`${process.env.PUBLIC_URL}/img/cover.png`} className='App-card-back' alt='card back' />
            //   </div>
            // </div>
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
            />
          ))
        }
      </div>
    </div>
  );
}

// export default App

// function App() {
//   return (
//     <div className="App">
//       <h1>Magic Game</h1>
//       <button>New Game</button>

//       <div className='App-card-grid'>
//         {
//           cardImages.map(card => (
//             <div>
//               <img src={card.src} alt='puzzle' />
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

export default App;
