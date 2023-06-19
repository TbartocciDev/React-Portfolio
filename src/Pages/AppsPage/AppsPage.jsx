import "./AppsPage.css"
import ProjectCard from "./ProjectCard/ProjectCard"

export default function AppsPage({ data }) {
    return (
        <main className="AppsPage-main" id="Apps">
            <div className="content">
                <h1>{data.header}</h1>
                <h2>{data.subheader}</h2>
                <div className="underline"></div>
                <div className="projects-div">
                    {data.projects.map((p) => (
                        <ProjectCard data={p} />
                    ))}
                </div>
            </div>
        </main>
    )
}