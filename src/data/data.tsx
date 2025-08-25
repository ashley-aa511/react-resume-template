import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ashley Awuor | Backend Engineer & Economist',
  description: "Backend Engineer & Economist based in Kenya, passionate about building scalable backend systems and leveraging technology for economic growth.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ashley Awuor.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A Kenyan based <strong className="text-stone-100">Backend Engineer & Economist</strong>, currently I’m interning at <strong className="text-stone-100">Uwezo Fund</strong> where I’m gaining hands-on experience in financial inclusion and development economics.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I have a passion for <strong className="text-stone-100">building scalable backend systems</strong> and a keen interest in <strong className="text-stone-100">data analysis</strong>. My goal is to leverage technology to drive economic growth and improve lives.  
      </p>
      <video muted loop width="100%" height="auto">
  <source src="images/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </>
  ),
  actions: [
    {
      href: 'files/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: 'I thrive at the intersection of technology and development, using code not just to solve problems but to open up opportunities for underserved communities. My recent projects range from sentiment analysis of internet culture to data-driven economic visualizations.Outside of coding, I’m passionate about sustainable development, digital access, and the future of tech in Africa. My goal? To keep blending economics, backend engineering, and AI to build solutions that actually make people’s lives better.',
  aboutItems: [
    {label: 'Location', text: 'Nairobi, KE', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Kenyan', Icon: FlagIcon},
    {label: 'Interests', text: 'Travelling, Singing and Researching', Icon: SparklesIcon},
    {label: 'Study', text: 'Moi University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Uwezo Fund', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Tailwind CSS',
        level: 7,
      },
      {
        name: 'HTML/CSS',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js with Express',
        level: 8,
      },
      {
        name: 'Flask(Python)',
        level: 8,
      },
      {
        name: 'Databases (SQLite, MongoDB)',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
  title: 'CBC Learning Track - Video Presentation',
  description: 'A recorded presentation of me explaining the CBC learning track project, where I broke down the goals, outcomes, and implementation approach in a clear and structured manner.',
  url: 'https://www.loom.com/share/07958a3886eb470b8f29528a34bf5387?sid=de786288-6f27-43f1-88fa-89832f4a7561',
  image: porfolioImage1, 
},

{
  title: 'CBC Learning Track - Slide Deck',
  description: 'A concise slide presentation highlighting what my group and I researched on CBC Learning, which includes the problem, methodology, and results in a visual format.',
  url: 'https://docs.google.com/presentation/d/1RKXBG3GyRTAaqA7y6gnRzc1YDk5VgYjCyPFbIjBuAss/edit?usp=drive_link',
  image: porfolioImage2, 
},
  {
    title: 'Short CV',
    description: 'A personal portfolio web application designed to showcase my skills, projects, and experience in an interactive way. Built with React on the frontend for a smooth UI and deployed with Vercel, it serves as a dynamic alternative to a traditional resume.',
    url: 'https://cv-eight-blond.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Github Stats Visualizer',
    description: 'A web app that fetches and visualizes my GitHub activity, including repositories, commits, languages, and contributions. Built with JavaScript/React on the frontend and integrated with the GitHub API, it gives a clean snapshot of my coding journey and projects in one place.',
    url: 'https://ashley-project-ashley-aa511-val2491s-projects.vercel.app/',
    image: porfolioImage4,
  },
  {
    title: 'Fibonacci App',
    description: 'A minimalist web app that generates the Fibonacci sequence up to a user-defined number. It’s perfect for demonstrating basic logic, user interaction, and clean UI design, built for simplicity and clarity.',
    url: 'https://val249124-fibonacci-app.netlify.app/',
    image: porfolioImage5,
  },
  {
    title: 'Mathematics Switch-Up',
    description: 'A playful stats calculator where you can input numbers and instantly compute key statistics like sum, average, min/max, median, mode, or range. Designed to help users explore basic math operations through an interactive interface and smooth switch-case logic in JavaScript.',
    url: 'https://val249124-mathematics-switch-up.netlify.app/',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'January 2021 - December 2024',
    location: 'Moi University',
    title: 'Bachelor of Arts in Economics.',
    content: <p>I built a strong foundation in microeconomics, macroeconomics, and development economics while also gaining hands-on experience with statistical and econometric analysis. I developed key skills in analytical thinking, research, and quantitative problem-solving, alongside the ability to evaluate policies and interpret complex data. Beyond academics, I honed my collaboration, communication, and critical thinking skills, preparing me to apply economic insights to real-world challenges.</p>,
  },
  {
    date: 'February 2025',
    location: 'ALX Africa',
    title: 'Software Engineering',
    content: <p>I gained practical experience in building scalable applications and working with modern technologies. I learned how to design and implement APIs, manage databases (SQL & NoSQL), and apply best practices in problem-solving, debugging, and version control with Git/GitHub. The program also emphasized collaboration, agile teamwork, and peer learning, which sharpened my ability to work in fast-paced, team-driven environments. Through this, I developed strong technical and soft skills that prepared me to build impactful, real-world solutions.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2025 - Present',
    location: 'Uwezo Fund',
    title: 'Intern',
    content: (
      <p>
        I support initiatives that promote financial inclusion and empower youth and women through access to affordable credit. My work involves data management, report preparation, and assisting in community outreach activities, which has strengthened my skills in research, analysis, and public sector operations. I’m also gaining hands-on experience in collaboration and administrative processes within a development-focused institution, while deepening my interest in the intersection of economics, finance, and technology.
      </p>
    ),
  },
  {
    date: 'May 2023 - July 2023',
    location: 'National Health Insurance Fund',
    title: 'Attachee',
    content: (
      <p>
        I worked on projects that blended data, research, and tech to improve how health programs reach people. I helped spot gaps in reporting, made processes smoother, and collaborated with teams from different backgrounds to push for better accountability. The experience showed me how economics and tech can come together to actually drive impact in real communities.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: ' What I bring to the table',
      text: 'I’m passionate about blending economics and backend engineering to solve real-world challenges. I value collaboration, clear communication, and building solutions that make a difference.',
      image: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg',
    },
    {
      name: 'How I work',
      text: 'Understand the problem, Plan the solution, Build & test and finally Iterate & deploy',
      image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg',
    },
    {
      name: 'Hackathons',
      text: 'I don’t just build for myself, I build in public and test my skills against others. I love the thrill of hackathons and the opportunity to learn from others.',
      image: 'https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me through any of the platforms below, or send me an email directly. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
  items: [
    {
      type: ContactType.Email,
      text: 'okeyoashley@gmail.com',
      href: 'mailto:okeyoashley@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nairobi, Kenya',
      href: 'https://www.google.com/maps/place/Nairobi,+Kenya',
    },
    {
      type: ContactType.Instagram,
      text: '@ashleyokeyo',
      href: 'https://www.instagram.com/ashleyokeyo/?utm_source=qr&igsh=MTFlMGlwcWVnbTYwNA%3D%3D#',
    },
    {
      type: ContactType.Github,
      text: 'ashley-aa511',
      href: 'https://github.com/ashley-aa511',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ashley-aa511'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/27969498/ashley-okeyo'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ashley-okeyo-a781a61b5/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ashleyokeyo/?utm_source=qr&igsh=MTFlMGlwcWVnbTYwNA%3D%3D#'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/ashleyawuor254?t=_AYpsabA-3eraMfyixYoAQ&s=03'},
];
