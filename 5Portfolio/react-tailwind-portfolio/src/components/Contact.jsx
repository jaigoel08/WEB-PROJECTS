import Section from "./Section";
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Contact = () => {

  const socialLinks = [
    {icon: <Linkedin />, title: "Linkedin", url: "https://www.linkedin.com/in/jai-goyal-80ba17254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "},
    {icon: <Github />, title: "Github", url: "https://github.com/jaigoel08"},
    {icon: <Twitter />, title: "Twitter", url: "https://x.com/JaiGoel1035914?t=7Cd3Zm1Sj1dx71LayJXXxQ&s=08"}
  ];

  return <div className="pb-6">
    <Section icon={<Globe />} sectionTitle="Contact & Social Media">
      <p className="text-gray-700 mb-4">
        Email: jaigoel14@gmail.com <br />
        Phone: (+91) 9205089083
      </p>
      {socialLinks.map(social => <SocialMedia icon={social.icon} title={social.title} key={social.title} url={social.url} />)}
      
    </Section>
  </div>
}

export default Contact;