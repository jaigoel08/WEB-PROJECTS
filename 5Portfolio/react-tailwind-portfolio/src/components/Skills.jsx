import Pill from "./Pill";
import Section from "./Section";
import { Code } from 'lucide-react';

const Skills = () => {
  const skillTitles = ["JavaScript", "React", "Java", "DSA", "SQL", "Git", "Tailwind"];
  return <Section icon={<Code />} sectionTitle="Skills">
    {skillTitles.map(title => <Pill title={title} />)}
  </Section>
}

export default Skills;