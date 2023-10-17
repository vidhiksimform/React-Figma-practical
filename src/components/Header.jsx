import { Link } from "react-router-dom";
import { navigationMenu } from "../utils";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/logo.svg" alt="Logo appex" className="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navigationMenu.map(({ menuName, redirectRoute }, index) => (
            <li key={index}>
              <Link to={`/${redirectRoute}`} xclassName="main-nav-link">
                {menuName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
