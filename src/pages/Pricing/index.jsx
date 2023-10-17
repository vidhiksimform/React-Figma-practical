import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PricingPlan from "../../components/PricingPlan";

const Pricing = () => {
  return (
    <>
      <Header />
      <section className="pricing-plans">
        <div className="container">
          <div className="pricing-container">
            <p className="pricing-heading">Pricing & Plans</p>
            <span className="pricing-monthly pricing-plan">PER MONTHLY</span>
            <span className="pricing-plan">PER YEARLY</span>
            <PricingPlan />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
