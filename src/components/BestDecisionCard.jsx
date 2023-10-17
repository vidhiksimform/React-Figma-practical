const BestDecisionCard = ({ stepNumber, text, subText }) => {
  return (
    <div className="best-decision-card-container">
      <p className="best-decision-step">{stepNumber}</p>
      <p className="best-decision-card-text">{text}</p>
      <p className="best-decision-card-subtext">{subText}</p>
    </div>
  );
};

export default BestDecisionCard;
