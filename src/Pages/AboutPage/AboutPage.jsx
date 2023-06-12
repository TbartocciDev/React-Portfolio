import "./AboutPage.css"

export default function AboutPage({ data }) {
    return (
        <main className="AboutPage-main" id="About">
            <div className="content">
                <div className="intro-bio">
                    <h2>{data.header}</h2>
                </div>
            </div>
        </main>
    )
}