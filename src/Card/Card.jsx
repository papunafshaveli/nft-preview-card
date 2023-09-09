import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        className="cube"
        src="./images/image-equilibrium.jpg"
        alt="equilibrium image"
      />
      <h1>Equilibrium #3429</h1>
      <p className="description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="cripto-and-time">
        <div className="eth-and-image">
          <img
            className="eth-image"
            src="./images/icon-ethereum.svg"
            alt="arrows"
          />
          <strong className="eth">0.041 ETH</strong>
        </div>

        <div className="days-div">
          <img className="clock" src="./images/icon-clock.svg" alt="clock" />
          <span className="days">3 days left</span>
        </div>
      </div>
      <hr />
      <div className="profile-and-text">
        <img
          className="profile"
          src="./images/image-avatar.png"
          alt="profile images"
        />
        <p className="creation">
          Creation of <span className="name">Jules Wyvern</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
