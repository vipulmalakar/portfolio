import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  redis,
  poulimainfotech,
  carrent,
  jobit,
  tripguide,
  threejs,
  gallerydtudiopro,
  akashmalviya,
  prateekmalakar,
  bhagyavakta,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Developement",
    icon: backend,
  },
  {
    title: "Desktop App Developement",
    icon: mobile,
  },
  {
    title: "Backend Developement",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Full stack Developer Intern",
    company_name: "Poulima Infotech",
    icon: poulimainfotech,
    iconBg: "#E6DEDD", // #383E56
    date: "Oct 2022 - March 2023",
    points: [
      "Spearheaded the development of a job searching website, elevating user access to career opportunities and contributing to an enhanced job-seeking experience.",
      "Implemented astrology APIs in an astrology website, enriching functionality and user engagement.",
      "Collaborated with a dynamic team to design intuitive interfaces, showcasing a commitment to user-centric application design.",
      "Acquired hands-on experience in web development, troubleshooting, and issue resolution, ensuring seamless website functionality.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Poulima Infotech",
    icon: poulimainfotech,
    iconBg: "#E6DEDD", // #383E56
    date: "March 2023 - Present",
    points: [
      "Continuously developed and maintained diverse web applications and mobile apps, showcasing versatility and adaptability.",
      "Successfully integrated payment gateways, including Instamojo and Stripe, ensuring secure and smooth transaction processes.",
      "Leveraged advanced technologies like AWS S3 bucket and EC2 instances for efficient and secure hosting, optimizing application performance.",
      "Demonstrated proactive problem-solving skills, ensuring uninterrupted functionality and a positive user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vipul proved me wrong.",
    name: "Akash Malviya",
    designation: "CEO",
    company: "Code Matrix",
    image: akashmalviya,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vipul does.",
    name: "Vijay Patel",
    designation: "CO",
    company: "Spreadwings Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Vipul optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Prateek Malakar",
    designation: "CEO",
    company: "Spacegenics",
    image: prateekmalakar,
  },
];

const projects = [
  {
    name: "Gallery Studio Pro",
    description:
      "Web-based platform that allows photo studios to create clients, upload various media types, and securely share access credentials with clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "text-yellow-500",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: gallerydtudiopro,
    // source_code_link: "https://github.com/",
    url: "https://gallerystudio.in",
  },
  {
    name: "Bhagyavakta",
    description:
      "Versatile astrology mobile app and website, offering features such as kundli creation, match making reports, panchang, horoscope viewing, and more.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "text-yellow-500",
      },
      {
        name: "astrology",
        color: "pink-text-gradient",
      },
    ],
    image: bhagyavakta,
    // source_code_link: "https://github.com/",
    url: "https://play.google.com/store/apps/details?id=com.bhagyavaktapp",
  },
];

export { services, technologies, experiences, testimonials, projects };
