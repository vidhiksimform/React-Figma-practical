const Checkmark = ({ imgUrl, text }) => {
  return (
    <div className="market-place-checkmark">
      <img src={`/assets/${imgUrl}.svg`} alt="check" />
      <p className="checkmark-text">{text}</p>
    </div>
  );
};

export default Checkmark;
