import { useState } from 'react'
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

  //* Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

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
            <SingleCard src={card.src} id={card.id} />
          ))
        }
      </div>
    </div>
  );
}

export default App