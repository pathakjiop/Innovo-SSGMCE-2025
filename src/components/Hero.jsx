// import { curve, heroBackground, robot } from "../assets";
// import Button from "./Button";
// import Section from "./Section";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
// import { useRef } from "react";
// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";
// import {  hackimg1 } from "../assets";
// import poster1 from "../assets/posters/poster1.png"
// import poster2 from "../assets/posters/poster2.png"

// const Hero = () => {
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem]"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="hero"
//     >
//       <div className="container relative">
//         <div className="relative z-1 max-w-[63rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
//           <h1 className="h1 mb-6">
//             Unleashing Innovation at {` `}
//             <span className="inline-block relative">
//               Innovo 2025{" "}
//               <img
//                 src={curve}
//                 className="absolute top-full left-0 w-full xl:-mt-2"
//                 width={624}
//                 height={30}
//                 alt="Curve"
//               />
//             </span>
//           </h1>
//           <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//             Join us for the ultimate innovation experience at SSGMCE. Create, Collaborate, and Innovate to solve real-world challenges and showcase your creativity.
//           </p>
//           <Button href="#" white className={'hover:text-orange-600'}>
//             Register Now
//           </Button>
//         </div>

//         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//           <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//             <div className="relative bg-n-8 rounded-[1rem]">
//               <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
//                 {/* First Banner - Slides in from the left */}
//                 <img
//                   src={poster1}
//                   style={{
//                     animation: "slideInFromLeft 1s ease-out forwards",
//                   }}
//                   className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[%]"
//                   width={1024}
//                   height={200}
//                   alt="Hackathon"
//                 />

//                 {/* Second Banner - Slides in from the right */}
//                 <img
//                   src={poster2}
//                   style={{
//                     animation: "slideInFromRight 1s ease-out forwards",
//                     animationDelay: "0.5s", // Delay for the second banner
//                   }}
//                   className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[%]"
//                   width={1024}
//                   height={200}
//                   alt="Second Banner"
//                 />

//                 <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[36rem] md:-translate-x-1/2" />
                

//                 {/* <ScrollParallax isAbsolutelyPositioned>
//                   <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
//                     {heroIcons.map((icon, index) => (
//                       <li className="p-5" key={index}>
//                         <img src={icon} width={24} height={25} alt={icon} />
//                       </li>
//                     ))}
//                   </ul>
//                 </ScrollParallax> */}

//                 {/* <ScrollParallax isAbsolutelyPositioned>
//                   <Notification
//                     className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
//                     title="Code generation"
//                   />
//                 </ScrollParallax> */}
//               </div>
//             </div>

//             <Gradient />
//           </div>

//           <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//             <img
//               src={heroBackground}
//               className="w-full"
//               width={1440}
//               height={1800}
//               alt="hero"
//             />
//           </div>

//           <BackgroundCircles />
//         </div>
//       </div>

//       <BottomLine />
//     </Section>

    
//   );
// };
// <style>
//   {`
//     @keyframes slideInFromLeft {
//       0% {
//         transform: translateX(-100%);
//         opacity: 0;
//       }
//       100% {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }

//     @keyframes slideInFromRight {
//       0% {
//         transform: translateX(100%);
//         opacity: 0;
//       }
//       100% {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }
//   `}
// </style>

// export default Hero;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import { poster1, poster2 } from '../assets';
import unstopIcon from "../assets/socials/unstop.svg";
import '../assets/fonts/fonts.css';
import "@fontsource/cinzel-decorative";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[63rem]  mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
      <h1 
            className="text-4xl font-bold mb-6"
            style={{
              fontFamily: "'Cinzel Decorative', system-ui",
              unicodeBidi: 'isolate',
              fontFeatureSettings: '"ss01"'
            }}
          >
            # साक्षर BHARAT
          </h1>

          <h1 className="h1 mb-6">
            Unleashing Innovation at {` `}
            <span className="inline-block relative">
              Innovo 2025{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={30}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Join us for the ultimate innovation experience at SSGMCE. Create, Collaborate, and Innovate to solve real-world challenges and showcase your creativity.
          </p>
          
          <a href="https://docs.google.com/forms/d/1ztNk6piJ_XF0ShCR3pLdgxygANdqtJB4XDZjtjPtPeE/edit?fbzx=-8711547680457594187" target="_blank">

          <Button>Register Now</Button>
            </a>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://www.instagram.com/innovossgmce" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-n-2 hover:text-orange-600" />
            </a>
            <a href="https://www.linkedin.com/in/innovo-ssgmce-38a2b92b3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-n-2 hover:text-orange-600" />
            </a>
            <a href="https://unstop.com/p/innovo-ssgmce-2025-shri-sant-gajanan-maharaj-college-of-engineering-ssgmce-shegaon-maharashtra-1361311" target="_blank" rel="noopener noreferrer">
                <img src={unstopIcon} alt="Unstop" className="w-6 h-6 hover:opacity-75" />
            </a>
            <a href="https://x.com/innovossgmce" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl text-n-2 hover:text-orange-600" />
            </a>
          </div>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[50vh] rounded-[0.9rem] overflow-hidden relative">
                <div className="poster-slider h-full flex items-center justify-center">
                  <img
                    src={poster1}
                    className="poster"
                    alt="Poster 1"
                  />
                  <img
                    src={poster2}
                    className="poster"
                    alt="Poster 2"
                  />
                </div>
              </div>

              <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[36rem] md:-translate-x-1/2" />
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />

      <style>
        {`
          .poster-slider {
            position: top;
            width: 100%;
            height: 100%;
          }

          .poster {
            position: absolute;
            width: 100%; /* Reduced from 100% */
            height: 100%; /* Reduced from 100% */
            object-fit: contain; /* Changed from cover to contain */
            opacity: 0;
            animation: slideShow 8s infinite;
            margin: auto;
          }

          .poster:nth-child(1) {
            animation-delay: 0s;
          }

          .poster:nth-child(2) {
            animation-delay: 4s;
          }

          @keyframes slideShow {
            0%, 45% {
              opacity: 1;
              transform: scale(1);
            }
            50%, 95% {
              opacity: 0;
              transform: scale(1.1);
            }
            100% {
              opacity: 0;
              transform: scale(1);
            }
          }
        `}
      </style>
    </Section>
  );
};

export default Hero;