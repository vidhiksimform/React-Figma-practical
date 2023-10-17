import Cards from "./Cards";
import { mobileFriendlyCards } from "../utils";

const MobileFriendlySection = () => {
  return (
    <section className="section-mobileFriendly">
      <div className="container mobileFriendly grid--2-cols">
        <p className="heading-secondary">
          Mobile-friendly single <br />
          page wordpress the
          <br /> me for services
        </p>
        <div>
          <p className="text-secondary">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created.
          </p>
          <a href="#" className="mobileFriendly-sub-text">
            Learn More
          </a>
        </div>
      </div>
      <div className="container mobileFriendly-cards grid--5-cols">
        {mobileFriendlyCards.map(({ title, imgName }, index) => (
          <Cards key={index} heading={title} icon={imgName} />
        ))}
      </div>
    </section>
  );
};

export default MobileFriendlySection;
