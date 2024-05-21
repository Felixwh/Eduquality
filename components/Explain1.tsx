import ExplainImg from "./images/ExplainImg";
import Note from "./images/Note";

const Explain1 = () => {
  return (
    <div className="mt-64 sm:mt-96" id="explain">
      <div className="absolute w-[300px] sm:w-[700px] z-0 left-[50%] -translate-x-[50%] sm:left-auto sm:-translate-x-0 translate-y-[140px] sm:-translate-y-[150px]">
        <ExplainImg />
      </div>
      <div className="relative sm:w-[80%] sm:ml-auto text-center z-10 px-4 sm:px-0">
        <p className="font-semibold text-2xl">Was ist Eduquality?</p>
        <div className="relative mt-5 w-[60px] h-[60px] translate-y-[30px] mx-auto">
          <Note />
        </div>
        <div className="bg-white/75 mx-auto sm:w-[500px] px-14 py-12 shadow-[0_0_20px_5px_rgba(0,0,0,0.2)] rounded-lg">
          <p>
            Wir sind eine Gruppe junger, engagierter Schüler*innen und
            Studenten*innen, die kostenlose schulische Unterstützung für Kinder
            und Jugendliche bietet. Unser Angebot richtet sich besonders and
            finanziell oder sozial Benachteiligte Kinder und Jugendliche.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explain1;
