import "./ProjectDetailPage.css"
import { useEffect } from "react"

export default function ProjectDetailPage() {
    let detailViewPage = null

    useEffect(() => {
        detailViewPage = document.querySelector('.project-detail-page')
    },[])

    function hideDetailPage() {
        detailViewPage.style.opacity = "0"
        detailViewPage.style.zIndex = "-2"
    }

    return (
        <main className="project-detail-page">
            <div className="project-detail-blur" onClick={hideDetailPage}></div>
            <div className="project-detail-content"></div>
        </main>
    )
}