import DownloadBtn from "./DownloadBtn";

const AppThemeSection = () => {
  return (
    <section className="appex-theme-section">
      <div className="container appex-theme grid--2-cols">
        <div className="appex-theme-text">
          Start achieving exitance <br />
          with appex theme
          <div className="appex-theme-btn">
            <DownloadBtn />
          </div>
        </div>
        <div className="appex-theme-img-box">
          <img
            src={"./assets/budget.svg"}
            alt="budget"
            className="appex-theme-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AppThemeSection;
