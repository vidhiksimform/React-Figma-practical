import Accordian from "../../components/Accordian";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { faqsVerticalNavigation } from "../../utils";

const Faqs = () => {
  return (
    <>
      <Header />
      <section className="faqs-section">
        <div className="container">
          <div className="faqs-container">
            <p className="heading-secondary faqs-heading">
              Frequently Asked Question
            </p>
            <div className="faqs-menu grid--2-cols">
              <nav>
                <ul className="faqs-main-nav-list">
                  {faqsVerticalNavigation.map((item) => (
                    <li key={item}>
                      <a className="faqs-main-nav-link" href={"/"}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="accordian-list">
                {faqsVerticalNavigation.map((item) => (
                  <Accordian heading={item} key={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;
