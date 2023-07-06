interface props {
  text: string;
  dir: string;
}

const Button = ({text, dir}: props) => {
  const handleClick = () => {
    const topDist =
      dir === "up"
        ? window.pageYOffset - window.innerHeight
        : window.pageYOffset + window.innerHeight;

    window.scrollTo({
      top: topDist,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="border-solid rounded-lg bg-gray-300 text-black px-[25px] py-[10px] text-xl font-medium text-black  hover:bg-[#10190a] hover:text-white drop-shadow-lg min-w-min whitespace-nowrap"
      onClick={handleClick}>
      {text} {dir === "down" ? "↓" : "↑"}
    </button>
  );
};

export default Button;
