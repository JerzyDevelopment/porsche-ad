import img from "../../../assets";
import Button from "../../button";

const LandingSkills = () => {
  return (
    <section className="min-h-screen flex flex-col items-start pt-[5%] px-[10%] relative">
      <div className="w-full min-w-[350px] flex flex-row align-middle justify-between">
        <h1 className="text-5xl font-semibold whitespace-no-wrap">
          Technical Skills
        </h1>
        <div className="flex gap-5">
          <Button text="Projects" dir="down" />
          <Button text="Intro" dir="up" />
        </div>
      </div>
      <div
        className="relative"
        style={{
          width: "80%",
          margin: "auto",
          height: "70vh", // Or replace with the desired height
        }}>
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${img.porscheFront})`,
            opacity: 0.3, // Adjust opacity as needed
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default LandingSkills;
