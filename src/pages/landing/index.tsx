import LandingIntro from "../../components/landing/intro";
import LandingProjects from "../../components/landing/projects";
import LandingSkills from "../../components/landing/skills";

const LandingPage = () => {
  return (
    <div>
      <LandingIntro />
      <LandingSkills />
      <LandingProjects />
    </div>
  );
};

export default LandingPage;
