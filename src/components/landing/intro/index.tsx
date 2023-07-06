import img from "../../../assets";
import Button from "../../button";

const LandingIntro = () => {
  return (
    <section className="min-h-screen flex flex-row items-start justify-between pt-[10%] pl-[15%] relative ">
      <div className="w-[30%] min-w-[350px]">
        <h1 className="text-5xl font-semibold whitespace-no-wrap">
          Jerzy Bogucki
        </h1>
        <p className="text-2xl mt-5 mb-10">Full-Stack Developer</p>
        <Button dir="down" text="Skills" />
      </div>
      <div className="w-[70%]">
        <img
          className="w-auto max-w-[1000px] absolute right-0"
          src={img.porsche}
          alt="White Porsche GT3RS"
        />
      </div>
    </section>
  );
};
export default LandingIntro;
