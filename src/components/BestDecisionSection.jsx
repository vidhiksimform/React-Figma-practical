import { bestDecisionLeftCard, bestDecisionRightCard } from "../utils";
import BestDecisionCard from "./BestDecisionCard";

const BestDecisionSection = () => {
  return (
    <section className="best-decision">
      <div className="best-decision-container">
        <p className="heading-secondary">Take your best decision</p>
        <p className="text-secondary best-decision-text">
          A legendary actor and director reflects on the innumerable films
          <br /> he watched during his first decades
        </p>
        <div className="steps-container grid--3-cols">
          <div className="steps-left">
            {bestDecisionLeftCard.map(
              ({ stepNumber, text, subText }, index) => (
                <BestDecisionCard
                  stepNumber={stepNumber}
                  text={text}
                  subText={subText}
                  key={index}
                />
              )
            )}
          </div>
          <div>
            <img
              src="../../../src/assets/bestDecision.svg"
              alt="best decision"
            />
          </div>

          <div className="steps-right">
            {bestDecisionRightCard.map(
              ({ stepNumber, text, subText }, index) => (
                <BestDecisionCard
                  stepNumber={stepNumber}
                  text={text}
                  subText={subText}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDecisionSection;
