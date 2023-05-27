import "./SkillCard.css"

export default function SkillsCard({ skill }) {
    return (
        <div className="skill-card">
            <img src={skill.iconURL} />
            <h2>{skill.name}</h2>
        </div>
    )
}