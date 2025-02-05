import {
  Hero,
  ExperienceSkills,
  Projects,
  Testimonials,
  Contact,
  Loader,
} from "@/components/index";
import { ModalProvider } from "@/context";
import data from "@/lib/data"
export default async function page() {


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
