import { integratedTools } from "../utils";

const IntegratedToolSection = () => {
  return (
    <section className="integrated-tools-section">
      <div className="best-decision-container">
        {integratedTools.map((item, index) => (
          <img
            className="tools-img"
            src={`../../../src/assets/${item}`}
            alt={item}
            key={index}
          />
        ))}
        <p className="heading-secondary tools-heading">
          Integrated with <br /> your favorite tools.
        </p>
        <p className="text-secondary tools-text">
          It showed a lady fitted out with a fur hat and fur <br />
          boa who sat upright, raise of the mark
        </p>
        <button className="market-place-btn">Try For Free</button>
      </div>
    </section>
  );
};

export default IntegratedToolSection;
