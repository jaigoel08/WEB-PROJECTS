import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
   <Graduation title= "Bachelors in Technology" school= "GTB4CEC" year ="2026" />
  
  </Section>
}

export default Education;