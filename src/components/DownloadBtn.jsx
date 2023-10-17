import { downloadBtn } from "../utils";

const DownloadBtn = () =>
  downloadBtn.map(({ imgUrl, text, subText }) => (
    <button className="hero-download-button" key={text}>
      <img src={imgUrl} className="download-btn-img" />
      <div className="download-btn-text">
        <p>
          {text} <br />
          <span className="download-btn-subtext">{subText}</span>
        </p>
      </div>
    </button>
  ));

export default DownloadBtn;
