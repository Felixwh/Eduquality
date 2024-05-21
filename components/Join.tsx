import JoinImg from "./images/JoinImg";

const Join = () => {
  return (
    <div className="md:flex mt-40 sm:mt-80 md:px-10 xl:px-0" id="join">
      <div className="md:hidden">
        <JoinImg />
      </div>
      <div>
        <p className="font-normal text-center md:text-left text-3xl md:text-6xl">
          Jetzt mitmachen
        </p>
        <p className="mt-10 md:w-[400px] xl:w-[550px] px-4 md:px-0 text-center md:text-left">
          Als nächstes würden wir dich gerne kurz kennenlernen, um den/die
          richtige/n Tutor*in für dich zu finden. Schreib uns dazu einfach eine
          WhatsApp oder Email und dann machen wir ein erstes Kennenlerngespräch
          aus
        </p>
        <div className="mt-10 flex md:block justify-center">
          <a
            href="#"
            className="items-center bg-[#3BB0AF] text-white px-8 py-3 rounded-xl shadow-md shadow-[#999999]"
          >
            Whatsapp
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <JoinImg />
      </div>
    </div>
  );
};

export default Join;
