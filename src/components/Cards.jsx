const Cards = ({ heading, icon }) => {
  return (
    <div className="card-container">
      <p className="card-text">{heading}</p>
      <img src={`../../src/assets/${icon}.svg`} alt={heading} className="card-img"/>
    </div>
  );
};

export default Cards;
