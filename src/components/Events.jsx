import React, { useState } from "react";
import { benefitIcon1, benefitIcon2, benefitIcon3, hackathonimg, benefitImage2 } from "../assets";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { curve } from "../assets";

export const benefits = [
  {
    id: "0",
    title: "Hackathon",
    pdfUrl: "/src/pdfs/Hackathon.pdf",
    text: "It's a celebration of innovation, learning, and the power of collective creativity. Brainstorm and build solutions overnight, have fun and win amazing prizes!",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: hackathonimg,
    light: true,
    rules: [
        "Participants must treat all other team members, competitors, judges, coaches, volunteers, etc., with respect and courtesy.",
        "The complete team must be present at the venue on the first day (14/02/2025) of the event without fail or any reasons.",
        "The complete team must be present at the venue on the second day (15/02/2025) of the event without fail or any reasons.",
        "Team size must be a maximum of 2-4 participants.",
        "Problem statements will be provided by INNOVO SSGMCE’25, and the description of all problem statements will be given on time.",
        "Each team must carry a laptop and a power extension.",
        "Each team member must carry their Aadhar card and College ID.",
        "Accommodation will be provided by the College, and only one participant is allowed to take rest in the restrooms for 1 hour only.",
        "Prizes will be given for the complete hackathon. There will not be any individual prizes for any theme or problem statement.",
        "Participating teams must exclusively consist of students who are not part of any organizers, volunteers, judges, sponsors, or in another privileged position related to the event.",
        "Hackathon will be conducted in 3 phases: Phase-I (Day-1: 11:00 AM to Day-2: 07:00 PM), Phase-II (Day-1: 9:30 PM to Day-2: 06:00 AM), Phase-III (Day-2: 07:00 AM to Day-2: 04:00 PM).",
        "Registration time is between 9:00 AM to 11:00 AM on the first day.",
        "All other rules will be conveyed on time.",
        "The final decision will be taken by INNOVO SSGMCE 2025 (*Terms & Conditions apply).",
],
    buttonBgColor: "bg-color-1 hover:bg-color-2"
  },
  {
    id: "1",
    title: "R/C Car Racing",
    pdfUrl: "/src/pdfs/RCRacing.pdf",
    text: "Build the RC cars, and race them to the finish line. Don't miss out on the action, join us for RC Car Racing Event and experience the miniature mayhem!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    rules: [
        "Do you have the skills to maneuver an RC car through hairpin bends, ladders, tunnels, and surprise obstacles? Test your control and speed in a thrilling race to the finish line!",
        "It is imperative that your vehicle passes the TI (Technical Inspection) to ensure it meets all competition requirements. Racing alone is not enough, and passing the inspection is equally crucial for participation.",
        "1. Open Competition:",
        "   - This is an open event for anyone interested in showcasing their RC car driving skills, vehicle design, and vehicle tilt control.",
        "   - A team must have a minimum of 1 member and a maximum of 3 members, which includes a driver/controller.",
        "   - More details regarding the RC race will be given at the location.",
        "   - JUDGE'S DECISION WILL BE FINAL.",
        "2. RC Vehicle Specification:",
        "   - RC vehicle Dimensions should have minimum (200mm L, 150mm B, 150mm H) and maximum (550mm L, 350mm B, 350mm). It must not exceed beyond the given size.",
        "   - RC vehicles should have electric engines instead of IC engines.",
        "   - The maximum weight limit for an RC is 5KG, while the minimum weight limit is 0.5KG.",
        "   - The RC vehicle is operated using a wireless controller, not a wired one.",
        "   - It is important to ensure that the wires are appropriately insulated.",
        "   - With safety as our top priority, we have set the maximum voltage limit to 24V. This ensures that our equipment runs smoothly and efficiently while keeping you and your surroundings safe.",
        "   - If you plan on using any equipment or methods during the event, please make sure to inform the organizers in advance.",
        "   - Please note that bringing pre-made toy cars is not permitted.",
        "3. The Challenge:",
        "   - First Round will be TI. (50 Points)",
        "     1. Battery Safety:",
        "        - Ensure that the battery used in the RC device complies with safety standards.",
        "        - Regularly inspect batteries for any signs of damage or wear.",
        "     2. Electronic Components:",
        "        - Regularly check the electronic components for any damage or loose connections.",
        "        - Follow proper installation procedures for electronic components.",
        "     3. Structural Integrity:",
        "        - Inspect the overall structural integrity of the RC device to ensure it is not compromised.",
        "        - Pay attention to any signs of wear, cracks, or damage to the frame or body.",
        "     4. Radio Frequency Interference (RFI):",
        "        - Ensure that the RC device does not emit excessive radio frequency interference.",
        "        - Follow guidelines for operating in designated frequency bands.",
        "     5. Compliance with Local Regulations:",
        "        - Be aware of and comply with any local regulations or guidelines regarding the use of RC devices in public spaces.",
        "     6. Insurance and Liability:",
        "        - The organizing team will not be held responsible for any damage to the car during the race.",
        "     7. Emergency Procedures:",
        "        - Establish emergency procedures in case of malfunctions or accidents.",
        "        - Have a plan for quickly disabling or grounding the RC device in case of emergencies.",
        "   - The vehicle must pass through the TI. If it fails to do so, the team will be disqualified.",
        "   - Acceleration Test: (50 Points)",
        "     - Objective: Measure the time it takes for an electric RC car to accelerate from a standstill to a designated speed over a 10-meter distance.",
        "     - Rules:",
        "        1. It's crucial to remember that while operating your RC vehicle, you should avoid colliding with other vehicles. Not only can collisions cause damage to the vehicles, but it can also result in a negative mark being given.",
        "        2. Participants must drive the RC car along the track, completing it as quickly as possible.",
        "        3. Trials are not allowed.",
        "   - 30-meter RC race circuit: (100 Points)",
        "     - Race Duration: Specify the total race duration, considering the shorter track length.",
        "     - Start and Finish Line: Clearly mark the start and finish lines, considering the challenges posed by the track layout.",
        "     - No Laps, Elapsed Time: Emphasize that the race is a point-to-point format, and participants will be timed for their elapsed time to cover the 30-meter distance.",
        "     - Timing System: Use a reliable timing system that can accommodate dirt track conditions.",
        "     - Scoring System: Establish a scoring system based on elapsed time. The participant with the fastest time is the winner.",
        "     - Driver Conduct: Emphasize safe and responsible driving, especially in hairpin bends and curves.",
        "     - Participant Briefing: Conduct a mandatory participant briefing before the race.",
        "     - Safety Measures: Mandate the use of safety gear, including appropriate eye protection.",
        "     - Disqualification for Going Off Track: If a participant's vehicle goes off the track two times, it will result in automatic disqualification.",
        "     - Inspections: Conduct pre-race inspections to ensure that all vehicles comply with the specified rules, especially for dirt track racing.",
        "4. Provided Equipment:",
        "   - An AC power supply will be provided for charging the batteries.",
        "5. Bonus Points:",
        "   - The track includes bonus points obtained by crossing certain challenging obstacles.",
        "   - Extra credits will be given for those cars with unique design and advanced features.",
        "All The Best"
],
    buttonBgColor: "bg-color-2 hover:bg-color-4"
  },
  {
    id: "2",
    title: "Project Expo",
    pdfUrl: "/src/pdfs/ProjectExpo.pdf",
    text: "Whether you're a technology enthusiast, investor, or simply curious about the forefront of innovation, this expo offers a unique opportunity to explore, connect, and be inspired!",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
    rules: [
        "Participant must treat all other team members, competitors, judges, coaches, volunteers with respect and courtesy.",
        "Members should have a valid Student ID card of the school/college, Aadhar card.",
        "Maximum 2 to 3 students per project will be allowed.",
        "Participation is open to students from designated categories: Juniors (class 5th to 12th), Seniors (UG/PG).",
        "Students need to specify the stream of their project before the Expo.",
        "The model should be in good working condition.",
        "Participants have to bring their power extension and other equipment as per requirement.",
        "Five minutes will be given for each participant to present their project to the jury.",
        "PPT presentation is NOT mandatory. Stand-up model or project should be shown.",
        "At the time of presentation, students are requested to submit a HARD COPY of the abstract mandatorily.",
        "The prizes will be awarded based on the presentation, viva, and model presentation.",
        "Teams should mandatorily carry a Banner/Flex of 3*3 meters.",
        "Final decision will be taken by judges. (*Terms & Conditions applied)"
],
    buttonBgColor: "bg-color-3 hover:bg-color-1"
  },
];
const RulesModal = ({ rules, title, onClose, buttonBgColor, pdfUrl }) => {

  const handleDownload = (pdfUrl, title) => {
    if (!pdfUrl) {
      console.warn('No PDF URL provided for download');
      return;
    }

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}-rules.pdf`;

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <h2 className="text-2xl font-bold mb-4">{title} Rules</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-4 lg:px-6">
          <ul className="list-disc pl-6 text-gray-300">
            {rules.map((rule, index) => (
              <li key={index} className="mb-2">
                {rule}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 lg:p-6 border-t border-n-6">
          <button
            onClick={() => handleDownload(pdfUrl, title)}
            className={`w-full text-n-1 px-4 py-2 rounded-md shadow-md transition ${buttonBgColor}`}
          >
            Download Rules & Regulations
          </button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleExploreMore = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <Section id="events">
      <div className="flex items-center justify-center py-4 lg:pb-10">
        <h1 className="lg:text-6xl text-5xl mb-5">
          <span className="inline-block relative mb-10">
            Tech Events{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
      </div>
      <div className="container relative z-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col h-[22rem] p-[2.4rem]">
                <h5 className="h5 lg:text-3xl font-bold mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <button
                    onClick={() => handleExploreMore(item)}
                    className="flex items-center ml-auto group"
                  >
                    <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider group-hover:text-color-1 transition-colors">
                      Rules & Regulations
                    </p>
                    <Arrow className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <RulesModal
          rules={selectedEvent.rules}
          title={selectedEvent.title}
          buttonBgColor={selectedEvent.buttonBgColor}
          pdfUrl={selectedEvent.pdfUrl}
          onClose={closeModal}
        />
      )}
    </Section>
  );
};

export default Events;