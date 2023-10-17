import { pricingPlan } from "../utils";
import Getstarted from "./Getstarted";
import PricingFeatures from "./pricingFeatures";

const PricingPlan = () => {
  return (
    <div className="plan-category grid--5-cols">
      {pricingPlan.map((item, index) => (
        <div className="plan-heading" key={index}>
          <p className="plan-name">{item.name}</p>
          <p className="plan-rupees">{item.price}</p>
          <p className="plan-period"> {item.period}</p>
        </div>
      ))}
      <PricingFeatures />
      {[...Array(4)].map((x, i) => (
        <Getstarted key={i} />
      ))}
    </div>
  );
};

export default PricingPlan;
