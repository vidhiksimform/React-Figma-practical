import { pricingDetails } from "../utils";

const PricingFeatures = () => {
  return (
    <>
      {pricingDetails.map(({ features, free, team, popular, enterprise }) => (
        <>
          <p className="text-tertiary">{features}</p>
          <p className="text-tertiary">{free}</p>
          <p className="text-tertiary">
            {typeof team === "number" ? String.fromCharCode(team) : team}
          </p>
          <p className="text-tertiary">
            {typeof popular === "number"
              ? String.fromCharCode(popular)
              : popular}
          </p>
          <p className="text-tertiary">
            {typeof enterprise === "number"
              ? String.fromCharCode(enterprise)
              : enterprise}
          </p>
        </>
      ))}
    </>
  );
};

export default PricingFeatures;
