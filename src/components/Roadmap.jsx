import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { hackathonimg, roadmap1, roadmap2, roadmap3 } from "../assets";
import Hackimg from "../assets/img/Hackathon.png";
import Projimg from "../assets/img/ProjectExpo.png";
import Rcimg from "../assets/img/RcCarRacing.png"
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { Paperclip } from 'lucide-react';
import { curve } from "../assets";
const timeline = [
  {
    id: "1",
    title: "Hackathon",
    text: "An exciting two-day coding marathon to build innovative solutions.",
    date: "Feb 14-15, 2025",
    status: "upcoming",
    imageUrl: Hackimg,
    colorful: true,
    schedule: [
        {
            time: "Feb 14, 9:00 AM - 11:00 AM",
            title: "Registration Process",
            description: "Participants register, providing essential team details and project ideas.",
            status: "Mandatory",
            attribute: "Registration Desk"
        },
        {
            time: "Feb 14, 11:00 AM - 12:00 PM",
            title: "Inauguration Ceremony",
            description: "Kickstart the hackathon with engaging speeches and a formal opening.",
            status: "Mandatory",
            attribute: "Main Hall"
        },
        {
            time: "Feb 14, 12:00 PM - 01:00 PM",
            title: "Lunch",
            description: "Enjoy a delicious meal and network with fellow participants.",
            status: "Optional",
            attribute: "Cafeteria"
        },
        {
            time: "Feb 14, 12:00 PM - 6:00 PM",
            title: "Hackathon Phase 1",
            description: "Teams brainstorm and start working on their projects.",
            status: "In Progress",
            attribute: "All Venues"
        },
        {
            time: "Feb 14, 6:00 PM - 8:00 PM",
            title: "Cultural Event",
            description: "Take a break and enjoy exciting performances or showcase your talent.",
            status: "Optional",
            attribute: "Auditorium"
        },
        {
            time: "Feb 14, 8:00 PM - 9:00 PM",
            title: "Dinner",
            description: "Refuel and connect with participants over a hearty meal.",
            status: "Optional",
            attribute: "Cafeteria"
        },
        {
            time: "Feb 14, 9:00 PM - 9:15 PM",
            title: "Jamming Session",
            description: "Sing along and enjoy the music in this creative session.",
            status: "Optional",
            attribute: "Main Hall"
        },
        {
            time: "Feb 14, 10:00 PM - 12:00 AM",
            title: "Jury Round 1",
            description: "Showcase your progress and receive feedback from the judges.",
            status: "In Progress",
            attribute: "Jury Room"
        },
        {
            time: "Feb 15, 12:00 AM - 6:00 AM",
            title: "Hackathon Phase 2",
            description: "The overnight coding marathon continues with focused energy.",
            status: "In Progress",
            attribute: "All Venues"
        },
        {
            time: "Feb 15, 6:00 AM - 7:00 AM",
            title: "Fun Games",
            description: "Relax and recharge with entertaining games.",
            status: "Optional",
            attribute: "Recreation Hall"
        },
        {
            time: "Feb 15, 8:00 AM",
            title: "Jury Round 2",
            description: "Present Phase 2 progress and gather final inputs from judges.",
            status: "In Progress",
            attribute: "Jury Room"
        },
        {
            time: "Feb 15, 8:00 AM - 12:00 PM",
            title: "Hackathon Phase 3",
            description: "Finalize and perfect your projects for the grand presentation.",
            status: "In Progress",
            attribute: "All Venues"
        },
        {
            time: "Feb 15, 12:00 PM - 1:00 PM",
            title: "Lunch",
            description: "Refuel with lunch and make your last connections.",
            status: "Optional",
            attribute: "Cafeteria"
        },
        {
            time: "Feb 15, 2:00 PM",
            title: "Jury Round 3",
            description: "Final project presentation and evaluation to decide the winners.",
            status: "Mandatory",
            attribute: "Main Hall"
        }
    ]
},
{
    id: "2",
    title: "Project Expo",
    text: "An exciting exhibition to showcase innovative projects.",
    date: "Feb 15, 2025",
    status: "upcoming",
    imageUrl: Projimg,
    schedule: [
        {
            time: "9:00 AM - 11:00 AM",
            title: "Registration Process",
            description: "Participants register and provide essential team details.",
            status: "Mandatory",
            attribute: "Registration Desk"
        },
        {
            time: "11:00 AM",
            title: "Inauguration Ceremony",
            description: "The formal inauguration ceremony for the Project Expo.",
            status: "Mandatory",
            attribute: "Main Hall"
        },
        {
            time: "12:00 PM - 1:00 PM",
            title: "Lunch",
            description: "Enjoy a hosted lunch and socialize with other participants.",
            status: "Optional",
            attribute: "Cafeteria"
        },
        {
            time: "1:00 PM - 4:00 PM",
            title: "Evaluation",
            description: "Judges evaluate projects based on various performance metrics.",
            status: "Important",
            attribute: "Evaluation Area"
        },
        {
            time: "4:00 PM - 5:30 PM",
            title: "Valedictory",
            description: "Winners announcement, prize distribution, and closing ceremony.",
            status: "Mandatory",
            attribute: "Main Hall"
        }
    ]
},
 {
    id: "3",
    title: "RC Car Racing",
    text: "High-octane RC car racing competition.",
    date: "Feb 15, 2025",
    status: "upcoming",
    imageUrl: Rcimg,
    schedule: [
        {
            time: "9:00 AM - 11:00 AM",
            title: "Registration Process",
            description: "Participants register and provide essential team details.",
            status: "Mandatory",
            attribute: "Registration Desk"
        },
        {
            time: "11:00 AM",
            title: "Inauguration Ceremony",
            description: "The formal inauguration ceremony for the RC Car Racing Event.",
            status: "Mandatory",
            attribute: "Main Hall"
        },
        {
            time: "12:00 PM - 1:00 PM",
            title: "Lunch",
            description: "Take a break and enjoy a hosted lunch. A great opportunity to connect with other participants.",
            status: "Optional",
            attribute: "Cafeteria"
        },
        {
            time: "1:00 PM - 4:00 PM",
            title: "Evaluation",
            description: "Judges evaluate the RC cars' performance based on various metrics.",
            status: "Important",
            attribute: "Race Track"
        },
        {
            time: "4:00 PM - 5:30 PM",
            title: "Valedictory",
            description: "Winners announcement, prize distribution, and closing ceremony.",
            status: "Mandatory",
            attribute: "Main Hall"
        }
    ]
}

];

const Roadmap = () => (
  <Section className="overflow-hidden" id="schedule">
    <div  className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <span ><Heading   tag="Event Timelines"  /></span>
      <h1 className="lg:text-6xl text-center text-5xl mb-5">
                <span className="inline-block relative mb-10">
                Schedule Plan{" "}
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </h1>

      <div className="relative mt-12 lg:mt-20">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 sm:left-1/2 top-0 h-full w-0.5 bg-n-6 transform sm:-translate-x-1/2 hidden sm:block" />

        {timeline.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col sm:flex-row items-center mb-8 sm:mb-16 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-0 sm:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-n-6 bg-gradient-to-r from-color-1 to-color-2 transform sm:-translate-x-1/2 hidden sm:block" />

            {/* Content Card */}
            <div className={`w-full sm:w-[calc(50%-2rem)] p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}>
              <div className="relative p-6 sm:p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden">
                {/* Grid Background */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={grid}
                    alt="Grid"
                  />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <Tagline>{item.date}</Tagline>
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={loading1}
                        width={16}
                        height={16}
                        alt="Upcoming"
                      />
                      <div className="tagline">Upcoming</div>
                    </div>
                  </div>

                  {/* Event Image */}
                  <div className="mb-6 -mx-6 sm:-mx-8">
                    <img
                      className="w-full rounded-2xl"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>

                  {/* Event Title and Description */}
                  <h4 className="text-xl sm:text-2xl font-bold text-n-1 mb-3">{item.title}</h4>
                  <p className="text-sm sm:text-base text-n-4 mb-6">{item.text}</p>

                  {/* Internal Timeline */}
                  <div className="relative pl-6 border-l border-n-6">
                    {item.schedule.map((event, eventIndex) => (
                      <div key={eventIndex} className="mb-6 last:mb-0">
                        {/* Timeline Dot */}
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-color-1 -translate-x-[5px]" />
                        
                        {/* Event Content */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          {/* Left Content */}
                          <div className="flex-1">
                            <h5 className="text-sm sm:text-base font-bold text-n-1 mb-1">
                              {event.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-n-4 mb-2">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-n-3">
                              <Paperclip className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{event.attribute}</span>
                            </div>
                          </div>

                          {/* Right Content */}
                          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                            <div className="text-xs sm:text-sm font-medium text-n-1 whitespace-nowrap">
                              {event.time}
                            </div>
                            <div className="px-2 py-1 text-xs rounded bg-n-6 text-color-1 whitespace-nowrap">
                              {event.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Gradient />
      </div>
{/* 
      <div className="flex justify-center mt-12 lg:mt-20">
        <Button href="/timeline">Download Schedule </Button>
      </div> */}
    </div>
  </Section>
);

export default Roadmap;

