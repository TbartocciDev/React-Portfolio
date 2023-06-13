import "./SkillsPage.css"
import SkillsCard from "./Components/SkillCard"

export default function SkillsPage({ data }) {
    return (
        <main className="SkillsPage-main" id="Skills">
            <div className="content">
                <h1>{data.header}</h1>
                <h2>{data.subheader}</h2>
                <div className="underline"></div>
                <div className="skills-div">
                    {data.originalList.map((s, key) => (
                        <SkillsCard skill={s} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}