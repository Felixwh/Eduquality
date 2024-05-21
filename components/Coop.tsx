import Kjr from "./images/Kjr";
import Lra from "./images/Lra";

const Coop = () => {
  return (
    <div className="w-full mt-20 sm:mt-0">
      <p className="w-full text-center text-xl text-gray-500">
        In Kooperation mit
      </p>
      <div className="sm:flex justify-center mt-8 sm:mt-5 sm:space-x-5">
        <div className="w-[200px] pl-[50px] pr-[50px] mx-auto sm:mx-0">
          <Kjr />
        </div>
        <div className="mt-5 sm:mt-0 w-[150px] mx-auto sm:mx-0">
          <Lra />
        </div>
      </div>
    </div>
  );
};

export default Coop;
