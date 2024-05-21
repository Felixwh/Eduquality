import Cubes from "./images/Cubes";
import Explain21 from "./images/Explain21";
import Explain22 from "./images/Explain22";
import Explain23 from "./images/Explain23";

const Explain2 = () => {
  return (
    <div className="mt-60 sm:mt-80">
      <p className="text-center font-semibold text-3xl w-full">
        Was bieten wir?
      </p>
      <div className="w-full">
        <div className="relative mt-6 mx-auto max-w-[280px] md:max-w-[475px] overflow-hidden">
          <p className="text-center">
            Wir wollen ihr Kind möglichst gut und unkompliziert unterstützen und
            ihm/ ihr Perspektiven bieten! Dazu bieten wir dir:
          </p>
          <div className="absolute right-[60px] top-[-50px] sm:right-0 sm:top-0 w-[100px] h-[100px] translate-x-[75px] -translate-y-[100px]">
            <Cubes />
          </div>
        </div>
      </div>
      <div className="flex mt-16">
        <div className="xl:flex mx-auto space-y-4 xl:space-y-0">
          <div className="w-[300px]">
            <div className="w-[300px]">
              <Explain21 />
            </div>
            <p className="text-center mx-auto mt-5 max-w-[200px]">
              Eigene*n Tutor*in der nur dich unterstützt
            </p>
          </div>
          <div className="w-[300px]">
            <div className="w-[300px]">
              <Explain22 />
            </div>
            <p className="text-center mx-auto mt-5 max-w-[200px]">
              1h pro Woche persönliche Nachhilfe
            </p>
          </div>
          <div className="w-[300px]">
            <div className="w-[300px]">
              <Explain23 />
            </div>
            <p className="text-center mx-auto mt-5 max-w-[200px]">
              Hilfe auch bei dingenden Fragen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explain2;
