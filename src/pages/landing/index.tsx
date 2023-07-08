import LandingIntro from "../../components/landing/intro";
import LandingPrice from "../../components/landing/price";
import LandingSpecs from "../../components/landing/specs";

const LandingPage = () => {
  return (
    <div>
      <LandingIntro />
      <LandingSpecs />
      <LandingPrice />
    </div>
  );
};

export default LandingPage;
