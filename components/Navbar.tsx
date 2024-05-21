import Logo from "./images/Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full h-24 shadow-xl left-0 flex items-center justify-center z-50 bg-white">
      <div className="flex w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex">
          <a href="/" className="flex items-center">
            <div className="relative mx-auto w-[45px] h-[45px] md:w-[50x] md:h-[50px]">
              <Logo />
            </div>
            <p className="font-semibold ml-4 md:text-2xl">Eduquality</p>
          </a>
          <a
            href="#explain"
            className="hidden md:flex items-center min-h-full ml-16"
          >
            <p>Über uns</p>
          </a>
          <a
            href="#join"
            className="md:flex hidden items-center min-h-full md:ml-16"
          >
            <p>Mitmachen</p>
          </a>
        </div>
        <div>
          <a
            href="#join"
            className="flex items-center bg-[#3BB0AF] px-6 md:px-8 py-2 rounded-xl shadow-md shadow-[#999999]"
          >
            <p className="text-white">Kontakt</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
