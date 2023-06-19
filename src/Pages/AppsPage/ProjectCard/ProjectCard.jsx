import "./ProjectCard.css"
import { useEffect } from "react"

export default function ProjectCard({ data }) {
    let detailViewPage = null

    useEffect(() => {
        detailViewPage = document.querySelector('.project-detail-page')
    },[])

    function showDetailPage() {
        detailViewPage.style.opacity = "1"
        detailViewPage.style.zIndex = "3"
    }

    return (
        <div className="project-card">
            <img src="https://icongr.am/devicon/git-plain.svg?size=256&color=ffffff" alt="" className="project-img"/>
            <div className="project-info">
                <h1>{data.title}</h1>
                <h2>{data.summary}</h2>
            </div>
            <div className="project-cover"></div>
        </div>
    )
}