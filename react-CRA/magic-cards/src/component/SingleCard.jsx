import "../component/SingleCard.css";

// ! In the below component, we pass individual props as arguments by using destructuring of object
function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      // ! card is not disabled, handle click
      handleChoice(card);
    }
  };

  return (
    <div className={`App-card ${flipped ? "App-card-flipped" : ""}`}>
      <div>
        <img src={card.src} className="App-card-front" alt="card front" />
        <img
          src={`${process.env.PUBLIC_URL}/img/cover.png`}
          className="App-card-back"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
