import { checkMark } from "../utils";
import Checkmark from "./Checkmark";

const MarketPlaceSection = () => {
  return (
    <section className="section-market-places">
      <div className="market-place-container grid--2-cols">
        <div className="market-place-img">
          <img src="/assets/budget.svg" alt="budget" />
        </div>
        <div>
          <p className="heading-secondary">
            Rank your mobile
            <br />
            app on <br />
            marketplaces.
          </p>
          <p className="text-secondary">
            I neglect my talents. I should be incapable of drawing a single
            stroke at the present moment; and yet I feel that I never was a
            greater artist than now.
          </p>
          <div className="market-place-btn-container">
            <button className="market-place-btn">Try For Free</button>
          </div>
          {checkMark.map(({ imgName, text }, index) => (
            <Checkmark imgUrl={imgName} text={text} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlaceSection;
