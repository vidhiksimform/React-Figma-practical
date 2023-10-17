import {
  companyFooterLinks,
  footerThemePages,
  informationFooterLinks,
  socialMediaIcons,
} from "../utils";
import DownloadBtn from "./DownloadBtn";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid-footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" src="/assets/logo.svg" alt="logo" />
          </a>
          <div>
            <p className="follow-us text-tertiary footer-text">Follow us on:</p>
            <ul className="social-links">
              {socialMediaIcons.map((item, index) => (
                <li key={index}>
                  <a className="footer-link" href="#">
                    <img
                      src={`/assets/${item}.svg`}
                      className="social-icon"
                      alt={`${item}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SubFooter heading={"Theme Pages"} footerLinks={footerThemePages} />
        <SubFooter heading={"Company Bio"} footerLinks={companyFooterLinks} />
        <SubFooter
          heading={"Information"}
          footerLinks={informationFooterLinks}
        />
        <nav className="nav-col">
          <p className="footer-heading">Download</p>
          <div className="footer-download">
            <DownloadBtn />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
