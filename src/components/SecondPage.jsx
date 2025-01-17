import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import innovologo from '../assets/innovo.png'

const SecondPage = () => {
  return (
    <Section crosses>
         <Heading
          className="md:max-w-md text-center py-5 lg:max-w-5xl  font-bold"
          title="Welcome to INNOVO SSGMCE, 2025"
        />
      <div className="container lg:flex">
     

        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
          Build, Collaborate, Innovate
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

            <a href="https://docs.google.com/forms/d/1ztNk6piJ_XF0ShCR3pLdgxygANdqtJB4XDZjtjPtPeE/edit?fbzx=-8711547680457594187" target="_blank">

          <Button>Register Now</Button>
            </a>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[40rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative  left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[9rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={innovologo}
                    width={100}
                    height={100}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            {/* <ul className="">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul> */}

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SecondPage;
