// import Section from "./Section";
// import { smallSphere, stars } from "../assets";
// import Heading from "./Heading";
// import PricingList from "./PricingList";
// import { LeftLine, RightLine } from "./design/Pricing";
// import { slogo, ilogo } from "../assets";

// const Pricing = () => {
//   return (
//     <Section className="overflow-visible" id="pricing">
//       <div className="container relative z-2">
//         <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
//           <img
//             src={smallSphere}
//             className="relative z-1"
//             width={255}
//             height={255}
//             alt="Sphere"
//           />
//           <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
//             <img
//               src={stars}
//               className="w-full"
//               width={950}
//               height={400}
//               alt="Stars"
//             />
//           </div>
//         </div>

//         <Heading
//           tag="If some query"
//           title="Contact Us"
//         />

//         <div className="relative">
//           <PricingList />
//           <LeftLine />
//           <RightLine />
//         </div>

//         {/* Responsive Logo Section */}
//         <div className="w-full mt-10">
//           {/* Mobile Layout (up to 639px) */}
//           <div className="sm:hidden flex flex-col items-center space-y-8">
//             <div className="w-[200px] h-[84px]">
//               <img 
//                 src={slogo} 
//                 alt="slogo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="w-[200px] h-[84px]">
//               <img 
//                 src={ilogo} 
//                 alt="ilogo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//           {/* Small Tablet Layout (640px - 767px) */}
//           <div className="hidden sm:flex md:hidden flex-col items-center space-y-10">
//             <div className="w-[300px] h-[126px]">
//               <img 
//                 src={slogo} 
//                 alt="slogo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="w-[300px] h-[126px]">
//               <img 
//                 src={ilogo} 
//                 alt="ilogo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//           {/* Large Tablet to Desktop Layout (768px and above) */}
//           <div className="hidden md:block relative">
//             <div className="relative min-h-[250px] max-w-[1920px] mx-auto">
//               {/* Left logo - responsive positioning */}
//               <div className="absolute left-0 md:left-[-20px] lg:left-[-50px] xl:left-[-100px] 2xl:left-[-150px] top-1/2 -translate-y-1/2">
//                 <div className="w-[250px] h-[105px] md:w-[300px] md:h-[126px] lg:w-[400px] lg:h-[168px] xl:w-[481px] xl:h-[202px]">
//                   <img 
//                     src={slogo} 
//                     alt="slogo" 
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>

//               {/* Right logo - responsive positioning */}
//               <div className="absolute right-0 md:right-[-20px] lg:right-[-50px] xl:right-[-100px] 2xl:right-[-150px] top-1/2 -translate-y-1/2">
//                 <div className="w-[250px] h-[105px] md:w-[300px] md:h-[126px] lg:w-[400px] lg:h-[168px] xl:w-[481px] xl:h-[202px]">
//                   <img 
//                     src={ilogo} 
//                     alt="ilogo" 
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Responsive spacer */}
//           <div className="h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[202px]"></div>
//         </div>
//       </div>
//         <div className="fless items-center">© Copyright Innovo SSGMCE 2024. All Right Reserved.</div>
//     </Section>
//   );
// };

// export default Pricing;

import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import { slogo, ilogo } from "../assets";

const Pricing = () => {
  return (
    <Section className="overflow-visible" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="If some query"
          title="Contact Us"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* Responsive Logo Section */}
        <div className="w-full mt-10">
          {/* Mobile Layout (up to 639px) */}
          <div className="sm:hidden flex flex-col items-center space-y-8">
            <div className="w-[200px] h-[84px]">
              <img 
                src={slogo} 
                alt="slogo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[200px] h-[84px]">
              <img 
                src={ilogo} 
                alt="ilogo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Small Tablet Layout (640px - 767px) */}
          <div className="hidden sm:flex md:hidden flex-col items-center space-y-10">
            <div className="w-[300px] h-[126px]">
              <img 
                src={slogo} 
                alt="slogo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[300px] h-[126px]">
              <img 
                src={ilogo} 
                alt="ilogo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Large Tablet to Desktop Layout (768px and above) */}
          <div className="hidden md:block relative">
            <div className="relative min-h-[250px] max-w-[1920px] mx-auto">
              {/* Left logo - responsive positioning */}
              <div className="absolute left-0 md:left-[-20px] lg:left-[-50px] xl:left-[-100px] 2xl:left-[-150px] top-1/2 -translate-y-1/2">
                <div className="w-[250px] h-[105px] md:w-[300px] md:h-[126px] lg:w-[400px] lg:h-[168px] xl:w-[481px] xl:h-[202px]">
                  <img 
                    src={slogo} 
                    alt="slogo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right logo - responsive positioning */}
              <div className="absolute right-0 md:right-[-20px] lg:right-[-50px] xl:right-[-100px] 2xl:right-[-150px] top-1/2 -translate-y-1/2">
                <div className="w-[250px] h-[105px] md:w-[300px] md:h-[126px] lg:w-[400px] lg:h-[168px] xl:w-[481px] xl:h-[202px]">
                  <img 
                    src={ilogo} 
                    alt="ilogo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Responsive spacer */}
          <div className="h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[202px]"></div>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="w-full text-center py-6 bg-transparent">
        <p className="text-sm md:text-base lg:text-lg">
          © Copyright INNOVO SSGMCE 2025. All Right Reserved.
        </p>
      </div>
    </Section>
  );
};

export default Pricing;