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
      "resume": "https://indigo-joye-52.tiiny.site/",
      "profileImage": "https://res.cloudinary.com/durstxroh/image/upload/v1738261904/mbzw9citnwhll1tpg47r.jpg",
      "setupImage": "https://cdn.sanity.io/images/y178r8ab/production/fae1fdb810ce1939fd9af8f4f0cd07c495648ae2-1920x1440.webp",
      "moreInfo": "I’m Muhammad Ahmed, a dedicated full-stack developer with a passion for crafting innovative web solutions. My journey began at a young age, and I’ve since mastered technologies like React, Node.js, and MongoDB to build scalable applications. I thrive on challenges, constantly learning and applying new skills to stay ahead in a fast-paced tech landscape. With a focus on delivering high-quality, user-centric products, my aim is to create software that not only meets but exceeds expectations. Code is like humor. When you have to explain it, it bad.",
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
      },
      {
        "title": "Whatsapp",
        "url": "https://wa.me/923362905320?text=I%27m%20intrested%20to%20buy%20your%20services",
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
        "authorName": "Hassan Raza",
        "authorImage": "https://res.cloudinary.com/durstxroh/image/upload/v1738264164/ymye5jpue0ppqivxhqpp.jpg",
        "companyName": "Indivtiutal",
        "companyUrl": "https://github.com/MuhammadHassanRaza25",
        "position": "",
        "content": "Ahmed has consistently demonstrated exceptional problem-solving skills and a passion for developing innovative solutions.",
        "priority": 1
      },
      {
        "authorName": "Cassius",
        "authorImage": "https://img.freepik.com/free-photo/young-handsome-man-outside-autumn-park_1303-17306.jpg?t=st=1738264355~exp=1738267955~hmac=cb50fef4cfb1a5cc0d03acfd58208d27665943177e17b1d095867f7370d0d0db&w=740",
        "companyName": "At Freelancing",
        "companyUrl": "https://github.com/MuhammadHassanRaza25",
        "position": "",
        "content": "Ahmed has consistently demonstrated exceptional problem-solving skills and a passion for developing innovative solutions.",
        "priority": 1
      },
      {
        "authorName": "Zora",
        "authorImage": "https://img.freepik.com/free-photo/portrait-handsome-male-entrepreneur-outside-office-building-suit-formal-business-attire-smiling_1303-13732.jpg?t=st=1738264355~exp=1738267955~hmac=cb50fef4cfb1a5cc0d03acfd58208d27665943177e17b1d095867f7370d0d0db&w=740",
        "companyName": "Integral Technologists",
        "companyUrl": "https://www.integraltechnologists.com",
        "position": "",
        "content": "Ahmed is an exceptional full-stack developer with a keen eye for detail and a strong drive for excellence. His work ethic and dedication are unmatched.",
        "priority": 2
      },
      {
        "authorName": "Elowen",
        "authorImage": "https://img.freepik.com/free-photo/female-entrepreneur-successful-young-woman-working-office_1303-12372.jpg?t=st=1738264355~exp=1738267955~hmac=cb50fef4cfb1a5cc0d03acfd58208d27665943177e17b1d095867f7370d0d0db&w=740",
        "companyName": "Tech Innovators",
        "companyUrl": "https://www.techinnovators.com",
        "position": "",
        "content": "Working with Ahmed has been an incredible experience. His creativity, problem-solving abilities, and dedication to delivering high-quality results set him apart.",
        "priority": 3
      }

    ],
    "certificates": [
      {
        "title": "MERN Stack Development",
        "image": "https://res.cloudinary.com/durstxroh/image/upload/v1738262605/pgolhnkpjkkx9rx1ozip.png",
        "url": "https://example.com/mern-certificate"
      },
      {
        "title": "React Native Mastery",
        "image": "https://res.cloudinary.com/durstxroh/image/upload/v1738262605/vb4oyrkyufcsyo0cvekb.png",
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
