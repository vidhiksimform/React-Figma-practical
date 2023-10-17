import { useState } from "react";
import { generalFaqs } from "../utils";

const Accordian = ({ heading }) => {
  const [accordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setActiveAccordion(0);
      return;
    }
    setActiveAccordion(index);
  };
  return (
    <>
      <div className="accordion-faq">
        <p className="accordian-heading">{heading}</p>
        {generalFaqs.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className="accordian-container"
          >
            <div className="accordion-faq-heading accordian-question">
              <p className={accordion === index ? "active" : ""}>
                {item.question}
              </p>
              <div>
                {accordion === index ? (
                  <span className="verticle">
                    <img src={"/assets/arrow-up.svg"} />
                  </span>
                ) : (
                  <span className="horizental">
                    <img src={"/assets/arrow-down.svg"} />
                  </span>
                )}
              </div>
            </div>
            <div className="text-tertiary text-answer">
              <p className={accordion === index ? "active" : "inactive"}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian;
