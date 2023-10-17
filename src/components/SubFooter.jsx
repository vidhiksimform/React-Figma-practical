const SubFooter = ({ heading, footerLinks }) => {
  return (
    <nav className="nav-col">
      <p className="footer-heading">{heading}</p>
      <ul className="footer-nav">
        {footerLinks.map((item) => (
          <li key={item}>
            <a className="footer-link text-tertiary" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubFooter;
