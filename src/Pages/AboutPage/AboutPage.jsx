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
                    <h2>{data.brandStatement}</h2>
                </div>
            </div>
        </main>
    )
}