import Arrow from "./images/Arrow";
import HeroImg from "./images/HeroImg";

const Hero = () => {
  return (
    <div className="h-[calc(70vh)]">
      <div className="mt-[calc(25vh)] sm:mt-72 w-full sm:flex">
        <div className="flex w-full justify-center sm:hidden">
          <div className="relative px-4 max-w-[400px]">
            <HeroImg />
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-normal sm:w-[50%]">
          <div className="w-full px-6 mt-10 max-w-[400px]">
            <p className="text-2xl sm:text-5xl leading-snug">
              Dein online Nachhilfe
              <br />
              Netzwerk, für{" "}
              <u style={{ textDecorationColor: "#3BB0AF" }}>alle</u>
              <br />
              zugänglich!
            </p>
            <p className="text-gray-700 mt-8 sm:w-[550px]">
              Leiste deinen Beitrag zur Chancengleichheit und unterstütze
              bildungsbenachteiligte Kinder und Jugendliche!
            </p>
            <a href="#explain" className="flex mt-8 items-center">
              <p className="text-[#3BB0AF] font-semibold">Mehr erfahren</p>
              <div className="relative w-[15px] h-[15px] ml-4">
                <Arrow />
              </div>
            </a>
          </div>
        </div>
        <div className="w-[50%] sm:flex hidden">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
