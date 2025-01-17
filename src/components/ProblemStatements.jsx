import { useState } from 'react';
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import { curve } from '../assets';

// export const problemstatements = [
//   {
//     id: "0",
//     title: "Voice recognition",
//     text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//     date: "May 2023",
//     status: "done",
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: "Gamification",
//     text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//     date: "May 2023",
//     status: "progress",
//   },
//   {
//     id: "2",
//     title: "Chatbot customization",
//     text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//     date: "May 2023",
//     status: "done",
//   },
//   {
//     id: "3",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
//     colorful: true,
//   },
//   {
//     id: "4",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
  
//   },
//   {
//     id: "5",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
    
//   },
//   {
//     id: "6",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
//     colorful: true,
//   },
//   {
//     id: "7",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
   
//   },

//   // Add more problem statements here...
// ];

export const problemstatements = [
  {
    id: "0",
    title: "Gamifying Education for Underprivileged Children",
    text: "Design and develop an engaging gamified learning platform tailored for children of rag pickers to teach them basic linguistic (reading, writing, and speaking) and arithmetic skills. The solution should address their unique socio-economic challenges while making learning fun, accessible, and scalable.",
    description: `
      Objective:
      Create a software solution that leverages gamification principles to teach children fundamental linguistic and arithmetic skills in an engaging way. The platform should be interactive and tailored to the needs and lifestyle of children who might lack consistent access to traditional education.

      Core Features:
      - Gamification Elements: Include features like rewards, points, badges, levels, leaderboards, and storytelling to make learning motivating and engaging.
      - Offline Access: Ensure that the platform has offline capabilities or low internet dependency, as these children may not have continuous access to the internet.
      - Multilingual Support: Provide language options relevant to the local demographic.
      - Accessibility: Design a user interface that is intuitive and child-friendly, considering that the children may have limited or no prior exposure to digital devices.
      - Assessment Mechanism: Include progress tracking and personalized feedback to monitor and motivate learning.

      Constraints:
      - Device Limitations: The solution should work on low-cost Android devices with limited memory and processing power.
      - Content Format: The educational content must be adaptable for children aged 6–12, with minimal reliance on literacy levels. Use visuals, voice instructions, and interactive elements.
      - Cultural Relevance: Incorporate culturally familiar themes, characters, or settings to make the content relatable and engaging.
      - Cost Efficiency: Ensure the solution is either free or extremely low-cost to deploy and maintain.
      - User Testing: Incorporate feedback loops that allow testing and improvement with real users.
      - Social Sharing: Include features for NGOs, volunteers, or teachers to use the platform collaboratively to track group progress or achievements.

      Hackathon Deliverables:
      - A working prototype or MVP (Minimum Viable Product).
      - A demo video showcasing the solution's key features and usability.
      - Presentation covering the tech stack, system requirements, and how to scale the solution.

      Evaluation Criteria:
      - Innovation: Novelty and creativity of the gamified approach.
      - Impact: Potential to make a real difference in the target demographic's learning journey.
      - Usability: Ease of use for children and educators or facilitators.
      - Scalability: Potential to scale the solution across different regions or user groups.
      - Technical Feasibility: Efficient use of resources to ensure smooth performance.
    `,
    date: "2025",
    status: "progress",
    colorful: true,
  },
  {
    id: "1",
    title: "Engineering Opportunities Prediction Platform",
    text: "Design a predictive solution that forecasts the likelihood of admissions and job opportunities in Engineering and Technology fields based on demographic data. The solution should analyze trends, highlight disparities, and provide actionable insights to support students, educators, and policymakers.",
    description: `
      Objective:
      Develop a data-driven platform or tool that predicts admission probabilities into engineering programs and job opportunities in the Engineering and Technology sectors. The solution should consider demographic factors like geographic location, socio-economic status, educational infrastructure, and industry demand.

      Core Features:
      - Predictive Modeling: Use machine learning or statistical techniques to predict:
        - Admission trends based on academic scores, availability of institutions, and regional demand.
        - Job placement probabilities considering industry presence, skill requirements, and regional hiring patterns.
      - Visualization: Provide intuitive dashboards or heatmaps that display insights about opportunities and trends in various regions.
      - Recommendations: Offer actionable suggestions to bridge gaps in admissions or employment, such as relevant skills to acquire or regions with better opportunities.
      - Custom Queries: Allow users to input specific parameters (e.g., test scores, preferred fields) and receive personalized predictions or insights.

      Constraints:
      - Data Sources: Use publicly available or simulated data on engineering admissions, job trends, and demographics. If real-world data is used, ensure compliance with ethical guidelines and data privacy laws.
      - Demographic Diversity: The solution should accommodate diverse regions, including urban, rural, and underrepresented areas.
      - Scalability: Design for scalability to handle varying datasets and new demographics over time.
      - Accessibility: The platform should be intuitive and usable for students, parents, and institutions with varying levels of tech literacy.

      Hackathon Deliverables:
      - A functional prototype or MVP showcasing predictive models and key features.
      - A demo video illustrating the platform’s functionality and impact.
      - Technical presentation covering the methodology, data sources, and system architecture.

      Evaluation Criteria:
      - Accuracy: Effectiveness of predictive algorithms in estimating admission and job probabilities.
      - Innovation: Unique approaches to leveraging demographic data and presenting actionable insights.
      - Impact: Potential to inform students, educators, and policymakers about opportunities and disparities.
      - Usability: Intuitive design and user-friendly interface.
      - Scalability: Ability to adapt to new regions, datasets, or fields of study.
    `,
    date: "2025",
    status: "progress",
    colorful: true,
  }
];

// const ProblemStatements = () => {

//   const handleExploreMore = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const [showAll, setShowAll] = useState(false);
//   const displayedStatements = showAll ? problemstatements : problemstatements.slice(0, 4);

//   return (
//     <Section className="overflow-hidden" id="problemstatements">
//       <div className="container md:pb-10">
//         <Heading tag="Ready to get started"/>
//          <h1 className="lg:text-6xl text-center text-5xl mb-5">
//                         <span className="inline-block relative mb-10">
//                         Problem Statements{" "}
//                           <img
//                             src={curve}
//                             className="absolute top-full left-0 w-full xl:-mt-2"
//                             width={624}
//                             height={28}
//                             alt="Curve"
//                           />
//                         </span>
//                       </h1>
        
//         <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
//           {displayedStatements.map((item, index) => {
//             const status = item.status === "done" ? "Done" : "In progress";

//             return (
//             <div
//                   className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
//                     item.colorful ? "bg-conic-gradient" : "bg-n-6"
//                   }`}
//                   key={item.id}
//                 >
//                   <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-6">
//                     <div className="relative z-1">
//                       <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-16">
//                         <Tagline>{index + 1}</Tagline>
//                       </div>
//                       <div className="mb-10 -my-10 -mx-15">
//                         {/* Additional content can go here */}
//                       </div>
//                       <h4 className="h4 mb-4">{item.title}</h4>
//                       <p className="body-2 text-n-4">{item.text}</p>
//                     </div>
//                     {/* Button moved to the end of the div */}
//                     <Button className="mt-5" onClick={() =>  handleExploreMore(item)}>
//                       Description
//                     </Button>
//                   </div>
//                 </div>
//             );
//           })}

//           <Gradient />
//         </div>

//         <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
//           <Button onClick={() => setShowAll(!showAll)}>
//             {showAll ? "Show less" : "Show more"}
//           </Button>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default ProblemStatements;

const DescriptionModal = ({ description, title, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-n-7 rounded-lg shadow-lg w-full max-w-2xl m-2 lg:max-w-3xl relative flex flex-col max-h-[80vh]">
        <div className="p-4 lg:p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-gray-400 transition"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-4 lg:px-6">
          <p className="text-gray-300 whitespace-pre-line">{description}</p>
        </div>
        <div className="p-4 lg:p-6 border-t border-n-6">
          <button
            onClick={onClose}
            className="w-full text-n-1 px-4 py-2 rounded-md shadow-md bg-color-1 hover:bg-color-2 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ProblemStatements = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleExploreMore = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const displayedStatements = showAll ? problemstatements : problemstatements.slice(0, 4);

  return (
    <Section className="overflow-hidden" id="problemstatements">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" />
        <h1 className="lg:text-6xl text-center text-5xl mb-5">
          <span className="inline-block relative mb-10">
            Problem Statements{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {displayedStatements.map((item, index) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-6">
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-16">
                      <Tagline>{index + 1}</Tagline>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      {/* Additional content can go here */}
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                  <Button className="mt-5" onClick={() => handleExploreMore(item)}>
                    Description
                  </Button>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "Show more"}
          </Button>
        </div> */}
      </div>

      {selectedEvent && (
        <DescriptionModal
          description={selectedEvent.description}
          title={selectedEvent.title}
          onClose={closeModal}
        />
      )}
    </Section>
  );
};

export default ProblemStatements;