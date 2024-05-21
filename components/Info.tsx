import Edge from "./images/Edge";

const Info = () => {
  return (
    <div className="w-full flex justify-center mt-60 sm:mt-80">
      <div className="px-10 sm:px-0 sm:w-[50%] relative">
        <div className="absolute sm:left-0 w-[40px] h-[40px] -translate-x-[30px] -translate-y-[30px]">
          <Edge />
        </div>
        <p className="text-center">
          Wir möchten einen Beitrag zu einer gerechteren Welt leisten! Viele von
          uns arbeiten bereits als Nachhilfelehrer*innen und haben selbst
          erfahren, welche Chancen eine gute und umfassende Unterstützung
          während der Schulzeit ermöglicht. Deshalb setzen wir uns ehrenamtlich
          dafür ein, dass möglichst jeder Schüler diese Unterstützung erhält und
          in ein Leben voller Möglichkeiten starten kann
        </p>
        <div className="absolute rotate-180 right-0 w-[40px] h-[40px] translate-x-[-15px] sm:translate-x-[30px] -translate-y-[10px]">
          <Edge />
        </div>
      </div>
    </div>
  );
};

export default Info;
