import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
  Loader,
} from "@/components/index";
import { ModalProvider } from "@/context";

export default async function page() {
  // const data = await getSanityData();

  // console.log(data , "data in nextjs");

  // if (!data) return <Loader />;

  let data = {
    "personalInfo": {
      "siteName": "Ahmed's Portfolio",
      "name": "Muhammad Ahmed",
      "email": "muhammadahmedaslamofficial@gmail.com",
      "address": "Karachi, Pakistan",
      "position": "Full Stack Developer",
      "resume": "https://example.com/resume.pdf",
      "profileImage": "https://media.licdn.com/dms/image/v2/D4E35AQE9lxrWBHOfRg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1712362003631?e=1738864800&v=beta&t=yP4HcVsMhpbVsHvYDFWUJKwzR916zWxWahv8YLw0UyI",
      "setupImage": "https://cdn.sanity.io/images/y178r8ab/production/fae1fdb810ce1939fd9af8f4f0cd07c495648ae2-1920x1440.webp",
      "moreInfo": "A passionate full stack developer with experience in web and mobile app development. Specialized in MERN stack, React Native, and creating innovative solutions.",
      "workingHours": "Monday - Saturday: 9 AM - 5 PM"
    },
    "socialLinks": [
      {
        "title": "GitHub",
        "url": "https://github.com/MuhammadAhmadAslam",
        "priority": 1
      },
      {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/in/muhammad-ahmed-b7b8452b6/",
        "priority": 2
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/ahmedaslamofficial",
        "priority": 3
      }
    ],
    "workExperience": [
      {
        "position": "Front End Developer",
        "jobDescription": "Developed web and mobile applications, ensured high-performance solutions, and implemented efficient code for business needs.",
        "companyName": "Integral Technologists",
        "companyUrl": "https://www.integraltechnologists.com/",
        "companyLogo": "https://media.licdn.com/dms/image/v2/C4E0BAQGuhDwIvIP8Tw/company-logo_200_200/company-logo_200_200/0/1633570852421?e=2147483647&v=beta&t=P_Yiw2TqM2sktH3GSHfzXPzE6uMbP-ztEdAsTNoasOY",
        "startDate": "2024-11-20",
        "endDate": "Present"
      }
    ],
    "skills": [
      {
        "name": "JavaScript",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        "name": "React",
        "image": "https://miro.medium.com/v2/resize:fit:1400/0*OLBBmwZWiKUNk685.png",
        "url": "https://reactjs.org"
      },
      {
        "name": "Node.js",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJbZnC5drwG8xBczuFg005-nD9KfJoN8idw&s",
        "url": "https://nodejs.org"
      },
      {
        "name": "MongoDB",
        "image": "https://www.svgrepo.com/show/331488/mongodb.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "NextJS",
        "image": "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "ExpressJS",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-QOD635HWyued_HWaH0CJMjuVIhIshCw6g&s",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "HTML",
        "image": "https://www.svgrepo.com/show/303205/html-5-logo.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "CSS",
        "image": "https://www.svgrepo.com/show/353623/css-3.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "Tailwind",
        "image": "https://www.svgrepo.com/show/374118/tailwind.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "Github",
        "image": "https://www.svgrepo.com/download/445786/github.svg",
        "url": "https://www.mongodb.com"
      },
      {
        "name": "Firebase",
        "image": "https://www.svgrepo.com/show/353735/firebase.svg",
        "url": "https://www.mongodb.com"
      },
    ],
    "projects": [
      {
        "title": "WhatsApp Clone",
        "description": "A real-time chat application with private messaging, media sharing, and status updates.",
        "images": [
          "https://example.com/whatsapp-clone-1.jpg",
          "https://example.com/whatsapp-clone-2.jpg"
        ],
        "techStack": ["React Native", "Node.js", "Express", "MongoDB"],
        "liveUrl": "https://whatsapp-clone.example.com",
        "gitUrl": "https://github.com/ahmed/whatsapp-clone",
        "priority": 1
      },
      {
        "title": "Microfinance App",
        "description": "A fintech application for microloans and financial management, built during a hackathon.",
        "images": [
          "https://example.com/microfinance-app-1.jpg"
        ],
        "techStack": ["React", "Firebase", "Bootstrap"],
        "liveUrl": "https://microfinance.example.com",
        "gitUrl": "https://github.com/ahmed/microfinance-app",
        "priority": 2
      }
    ],
    "testimonials": [
      {
        "authorName": "Bilal Raza",
        "authorImage": "https://example.com/bilal-raza.jpg",
        "companyName": "SMIT",
        "companyUrl": "https://smit.com",
        "position": "Mentor",
        "content": "Ahmed has consistently demonstrated exceptional problem-solving skills and a passion for developing innovative solutions.",
        "priority": 1
      }
    ],
    "certificates": [
      {
        "title": "MERN Stack Development",
        "image": "https://example.com/mern-certificate.jpg",
        "url": "https://example.com/mern-certificate"
      },
      {
        "title": "React Native Mastery",
        "image": "https://example.com/react-native-certificate.jpg",
        "url": "https://example.com/react-native-certificate"
      }
    ]
  }


  return (
    <ModalProvider>
      <Hero data={data.personalInfo} />
      <ExperienceSkills
        experiences={data.workExperience}
        skills={data.skills}
        certificates={data.certificates}
      />
      <Projects projects={data.projects} />
      <Testimonials data={data.testimonials} />
      <Contact
        personalInfo={data.personalInfo}
        socialLinks={data.socialLinks}
      />
    </ModalProvider>
  );
}
