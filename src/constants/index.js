import { Linkedin } from "lucide-react";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  hackathonimg,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Events",
    url: "#events",
  },
  {
    id: "2",
    title: "Schedule",
    url: "#schedule",
  },
  {
    id: "3",
    title: "Problem Statements",
    url: "#problemstatements",
  },
  {
    id: "4",
    title: "FAQ",
    url: "#faq",
    // onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#pricing",
  },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const eventRules = {
  hackathon: [
    "All participants must register before the event starts",
    "Teams should consist of 2-4 members",
    "Code must be original and created during the hackathon",
    "Use of open source libraries and APIs is allowed",
    "Projects must be submitted before the deadline",
    "Each team will have 5 minutes to present their project",
    "Judges' decision will be final",
    "All code must be published on GitHub",
    "Participants must follow the code of conduct",
    "Remote participation is allowed"
  ],
  workshop: [
    "Registration is mandatory for all participants",
    "Bring your own laptop with required software installed",
    "Sessions will be recorded for future reference",
    "Active participation is encouraged",
    "Questions can be asked during designated Q&A sessions",
    "Workshop materials will be provided digitally",
    "No sharing of workshop materials with non-participants",
    "Attendance is mandatory for certification"
  ],
  conference: [
    "Early bird registration closes 2 weeks before the event",
    "Schedule will be shared 1 week in advance",
    "Sessions will be conducted in hybrid mode",
    "Networking breaks between sessions",
    "Presentation slides will be shared post-event",
    "Questions can be asked through the event platform",
    "Recording of sessions is not allowed without permission",
    "Certificates will be provided to all attendees",
    "Business casual dress code",
    "Follow social media guidelines when sharing event content"
  ]
};



export const collabText =
  "INNOVO is a national level event. This event comprises of a Hackathon, Project Expo, RC Car Racing Event and lots of other fun events. We invite you to tag along for a journey filled with hacking, learning, networking and fun!";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Collaboration",
    text: 'Collaborate with teammates in real time using advanced tools and integrations.',
  },
  {
    id: "1",
    title: "Hack Smarter with Automation",
 
  },
  {
    id: "2",
    title: "Secure Development Space",
    
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Instagram",
    icon: instagram,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: twitter,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: Linkedin,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
];

export const pricing = [
{
    id: "0",
    title: "Name",
    description: "Names of the team heads, for your help in any inquiries. ",
    price: "0",
    features: [
      "Ishwar Sharma",
      "Tushar Fuse",
      "Ayush Mishra",
      "Tejaswini Bhagat",
      "Srushti Babhulkar",
      "Dhruv Nemade",
    ],
  },
  {
    id: "1",
    title: "Phone No.",
    description: "For advanced inquiries, contact via phone numbers or via Email for immediate assistance.",
    price: "9.99",
    features: [
      "Ishwar Sharma +91 72490 23607 ishwarsharma704@gmail.com",
      "Tushar Fuse +91 88055 88593 tusharfuse18@gmail.com",
      "Ayush Mishra +91 93735 21814 mishraayush1212@gmail.com",
      "Tejaswini Bhagat +91 97642 37406 tejaswinibhagat4@gmail.com",
      "Srushti Babhulkar +91 98607 89451 srushtibabhulkar2003@gmail.com",
      "Dhruv Nemade +91 93735 65427 dhruvasnemade@gmail.com"
    ],
  },
  // {
  //   id: "2",
  //   title:"Email",
  //   description: "For users seeking custom solutions, via email.",
  //   price: null,
  //   features: [
  //     "ishwarsharma704@gmail.com",
  //     "tusharfuse18@gmail.com",
  //     "mishraayush1212@gmail.com",
  //     "tejaswinibhagat4@gmail.com",
  //     "srushtibabhulkar2003@gmail.com",
  //     "dhruvasnemade@gmail.com",
  //   ],
  // },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
