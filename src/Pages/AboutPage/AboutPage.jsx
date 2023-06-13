import "./AboutPage.css"

export default function AboutPage({ data }) {
    return (
        <main className="AboutPage-main" id="About">
            <div className="content">
                <h1>{data.header}</h1>
                <div className="underline"></div>
                <div className="brand-div">
                    <div>
                        <img src="/2023-faceshot.png" alt="" />
                    </div>
                    <div className="comments-div">
                        <h2>{data.summary}</h2>
                        <h2>{data.background}</h2>
                        <h2>{data.finalWords}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}