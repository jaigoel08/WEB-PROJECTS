import List from "./List";
import Section from "./Section";
import { Award } from "lucide-react";

const Extracurricular = () => {
  const curricularItems = [
    "Vice-President at E-cell GTB4CEC",
    "Member of Code Geeks at GTB4CEC",
    "Participated in various Hackathons",
  ];
  return (
    <Section
      icon={<Award />}
      sectionTitle="Extracurricular Activities"
    >
      <List items={curricularItems}/>
    </Section>
  );
};

export default Extracurricular;