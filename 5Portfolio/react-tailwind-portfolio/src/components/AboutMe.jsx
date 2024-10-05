import { User } from "lucide-react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <div className="mt-6">
    <Section icon={<User />} sectionTitle="About Me" >
      <p>
      As a driven and innovative BTech Computer Science student, I'm eager to leverage my technical skills and creativity to build impactful solutions. With a strong foundation in programming languages, data structures, and algorithms, I'm well-versed in software development principles.

      </p>
    </Section>
    </div>
  );
};

export default AboutMe;