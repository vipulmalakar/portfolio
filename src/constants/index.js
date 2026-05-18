import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  mongodb,
  // git,
  docker,
  // redis,
  // svelte,
  express,
  // nestjs,
  nextjs,
  postman,
  mysql,
  postgres,
  // materialui,
  poulimainfotech,
  bestpeers,
  cornerstonesolutions,
  gallerydtudiopro,
  uamtec,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
  // {
  //   name: "Svelte",
  //   icon: svelte,
  // },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Material UI",
  //   icon: materialui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  // {
  //   name: "Nest JS",
  //   icon: nestjs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  // {
  //   name: "Redis",
  //   icon: redis,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Poulima Infotech",
    icon: poulimainfotech,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Feb 2024",
    points: [
      "Designed, developed, and maintained web and mobile applications using Node.js, React, and React Native for multiple client projects.",
      "Built reusable backend modules and REST APIs to support authentication, payments, and data-driven workflows.",
      "Integrated Razorpay, Stripe, and Instamojo payment gateways, ensuring secure and reliable transaction handling.",
      "Deployed and managed applications on AWS (EC2, S3), handling builds, environment setup, and production releases.",
      "Worked extensively with third-party APIs, form validation, and robust error handling to improve reliability and user experience.",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "Cornerstone Solutions",
    icon: cornerstonesolutions,
    iconBg: "#FFF",
    date: "Feb 2024 - May 2025",
    points: [
      "Delivered features and resolved complex issues across backend and frontend layers for UAMTEC and VitalX.",
      "Optimized backend logic and database queries, improving API response times by 20–25% for critical workflows.",
      "Implemented frontend optimizations and improved data-fetching strategies to enhance performance and usability.",
      "Built advanced functionality such as seamless image navigation and custom EXE setup creation to streamline deployments.",
      "Collaborated with QA and product teams to ensure production stability and timely feature delivery.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Bestpeers Infosystem Pvt. Ltd.",
    icon: bestpeers,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Designed and developed scalable backend services for ReturnPrime (GoKwik product) using Node.js and MongoDB, supporting 2000+ Shopify stores with high availability.",
      "Architected Kafka-based producer–consumer services for product and collection synchronization, decoupling Shopify webhook traffic and reducing core backend load by ~15–20%.",
      "Built AWB producer–consumer services using Kafka and Redis, exposing webhook endpoints to logistics partners for real-time shipment and order status updates.",
      "Implemented asynchronous processing with retries and idempotent consumers, reducing data inconsistencies and sync failures by ~20%.",
      "Integrated multiple logistics partners and automated backend flows, improving merchant onboarding efficiency and logistics coverage.",
      "Handled on-call production incidents, debugging live PROD issues and coordinating with CSMs and merchants to ensure SLA adherence.",
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
    name: "UAMTEC",
    description:
      "A comprehensive platform for subsea and underground exploration, offering advanced mapping and monitoring solutions using cutting-edge technologies like vehicles, sensors, cameras, and machine learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "text-yellow-500",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
      {
        name: "svelte",
        color: "green-text-gradient",
      },
      {
        name: "electron",
        color: "text-fuchsia-500",
      },
    ],
    image: uamtec,
    // source_code_link: "
    url: "https://uamtec.com",
  },
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
      {
        name: "stripe",
        color: "text-fuchsia-500",
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
