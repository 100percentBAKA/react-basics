import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './component/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
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
    // ! Passing the card object, we might need to compare the src property to check for card match 
  }

  // * Reset Turns
  const resetTurns = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  // ! useEffect takes in a callback function and dependencies (list) as arguments 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            }
            else {
              return card
            }
          })
        })
        resetTurns()
      }
      else {
        setTimeout(() => resetTurns(), 1000)
      }
    }
  },
    [choiceOne, choiceTwo])

  // useEffect(() => {
  //   if (choiceOne && choiceTwo) {
  //     if (choiceOne.src === choiceTwo.src) {
  //       setCards(prevCards => {
  //         return prevCards.map(card => {
  //           if (card.src === choiceOne.src) {
  //             return { ...card, matched: true }
  //           }
  //           return card; // * Make sure to return the card even if it doesn't match
  //         });
  //       });
  //     }
  //     setTurns(resetTurns(), 1000)
  //   }
  // }, [choiceOne, choiceTwo]);


  console.log(cards)

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
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            // ! If the user has previously matched the cards, we want them to stay flipped
            />
          ))
        }
      </div>
    </div>
  );
}


export default App;
