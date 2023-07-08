import img from "../../../assets";
import Button from "../../button";

const LandingIntro = () => {
  return (
    <section className="min-h-screen flex flex-row items-start justify-between pt-[15%] pl-[15%] ">
      <img
        src={img.logo}
        alt="Porsche logo"
        className=" absolute top-5 left-5 w-[50px] h-auto"
      />
      <h1 className=" absolute top-5 right-5 text-2xl">75 years of dreaming</h1>
      <div className="w-[30%] min-w-[350px]">
        <h1 className="text-5xl font-semibold whitespace-no-wrap">
          911 GT3 RS
        </h1>
        <p className="text-2xl mt-5 mb-0">Perfection is never the start.</p>
        <p className="text-2xl mt-1 mb-10">But always the goal.</p>

        <Button dir="down" text="Specs" />
      </div>
      <div className="w-[70%]">
        <img
          className="w-auto max-w-[1000px] absolute right-0 bottom-10"
          src={img.porsche}
          alt="White Porsche GT3RS"
        />
      </div>
    </section>
  );
};
export default LandingIntro;
