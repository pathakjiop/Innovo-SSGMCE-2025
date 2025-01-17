// import { check } from "../assets";
// import { pricing } from "../constants";
// import Button from "./Button";

// const PricingList = () => {
//   return (
//     <div className="flex items-center gap-[1rem] max-lg:flex-wrap">
//       {pricing.map((item) => (
//         <div
//           className="flex max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
//         >
//           <ul>
//             {item.features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="flex items-start py-5 border-t border-n-6"
//               >
//                 <p className="body-2 ml-4">{feature}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PricingList;

// import { check } from "../assets";
// import { pricing } from "../constants";
// import Button from "./Button";

// const PricingList = () => {
//   return (
//     <div className="flex gap-[1rem] max-lg:flex-wrap">
//       {pricing.map((item) => (
//         <div
//           key={item.id}
//           className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
//         >
//           <h4 className="h4 mb-4">{item.title}</h4>

//           <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
//             {item.description}  
//           </p>

//           {/* <div className="flex items-center h-[5.5rem] mb-6">
//             {item.price && (
//               <>
//                 <div className="h3">$</div>
//                 <div className="text-[5.5rem] leading-none font-bold">
//                   {item.price}
//                 </div>
//               </>
//             )}
//           </div> */}


//           <ul>
//             {item.features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="flex items-start py-5 border-t border-n-6"
//               >
//                 {/* <img src={check} width={24} height={24} alt="Check" /> */}
//                 <p className="body-2 ml-4 items-center">{feature}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PricingList;
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  if (!pricing || pricing.length < 2 || !pricing[1]) {
    return <div>No contact data available.</div>;
  }

  const item = pricing[1];
  const featuresPerColumn = Math.ceil(item.features.length / 3);
  const column1 = item.features.slice(0, featuresPerColumn);
  const column2 = item.features.slice(featuresPerColumn, 2 * featuresPerColumn);
  const column3 = item.features.slice(2 * featuresPerColumn);

  const splitFeature = (feature) => {
    // const phoneMatch = feature.match(/\+91\s+\d+\s+\d+/);
    // const emailMatch = feature.match(/[\w.-]+@[\w.-]+\.\w+/);
    
    // const phone = phoneMatch ? phoneMatch[0] : '';
    // const email = emailMatch ? emailMatch[0] : '';
    
     // Updated regex to handle the specific format including titles (Mr./Miss.)
    const nameMatch = feature.match(/(?:Mr\.|Miss\.)\s+[\w\s\.]+?\s+(?=\+91)/);
    const phoneMatch = feature.match(/\+91\s+\d+\s+\d+/);
    const emailMatch = feature.match(/[\w.-]+@[\w.-]+\.\w+/);
    
    const name = nameMatch ? nameMatch[0].trim() : '';
    const phone = phoneMatch ? `(${phoneMatch[0]})` : '';
    const email = emailMatch ? emailMatch[0] : '';

    return {
      name,
      phone,
      email
    };
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="w-full max-w-4xl mx-auto px-6 bg-n-8 border border-n-6 rounded-[2rem] py-8">
          <p className="body-2 mb-8 text-n-1/50 text-center">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[column1, column2, column3].map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-6">
                {column.map((feature, index) => {
                  const { name, phone, email } = splitFeature(feature);
                  return (
                    <li
                      key={index}
                      className="flex flex-col items-start py-4 border-t border-n-6"
                    >
                      <p className="body-2 font-bold mb-1">{name}</p>
                      <p className="body-2 text-n-1/70 mb-1">{phone}</p>
                      <p className="body-2 text-n-1/70">{email}</p>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PricingList;