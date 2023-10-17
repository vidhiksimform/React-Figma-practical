import { navigationMenu } from "../utils";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/logo.svg" alt="Logo appex" className="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          {navigationMenu.map(({ menuName, redirectRoute }, index) => (
            <li key={index}>
              <a className="main-nav-link" href={`/${redirectRoute}`}>
                {menuName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
