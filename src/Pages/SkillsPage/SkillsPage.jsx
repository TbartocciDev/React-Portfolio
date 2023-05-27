import "./SkillsPage.css"
import SkillsCard from "./Components/SkillCard"

export default function SkillsPage({ skills }) {
    return (
        <main className="SkillsPage-main" id="Skills">
            <div className="content">
                <div className="section-header">Skills & Tools</div>
                <div className="section-subheader">Here are some skills, tools, and technologies I use to make ideas reality:</div>
                <div className="skills-div">
                    {skills.list.map((s) => (
                        <SkillsCard skill={s}/>
                    ))}
                </div>
            </div>
        </main>
    )
}