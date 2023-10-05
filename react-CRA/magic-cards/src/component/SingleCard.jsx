import "../component/SingleCard.css";

// ! In the below component, we pass individual props as arguments by using destructuring of object
function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="App-card">
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
