import TechPill from "./TechPill";

const Project = ({title , desc , techUsed}) => {
return <div className="bg-white">
<p> {title} {desc}</p>
{techUsed.map(tech => <TechPill title={tech}/>)}
</div>
}

export default Project;