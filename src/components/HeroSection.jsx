import DownloadBtn from "./DownloadBtn";

const HeroSection = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="hero-container">
          <div className="heading-primary hero-text-box">
            <p>Better way to</p>
            <p>promote your app</p>
          </div>
          <div className="text-secondary hero-subtext">
            <p>Latin contentus presumably developed from the more literal</p>
            <p>meaning self-contained, restrained, held in.</p>
          </div>
          <div className="download-btn">
            <DownloadBtn />
          </div>
          <div style={{ marginTop: "7.8rem" }}>
            <img src={"../../src/assets/hero.svg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
