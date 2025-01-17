import { locIcon } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center  h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={locIcon} alt="Loading" />
      <a href="https://www.google.com/maps/place/Shri+Sant+Gajanan+Maharaj+College+Of+Engineering/@20.7804738,76.6780264,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd7457296aaba57:0xa9f05c70098ee6c7!8m2!3d20.7804738!4d76.6780264!16zL20vMGRxenpn?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D"target="_blank " className="truncate w-full">Shri Sant Gajanan Maharaj College of Engineering, Shegaon</a>
    </div>
  );
};

export default Generating;
