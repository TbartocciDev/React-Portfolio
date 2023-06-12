import "./HomePage.css"

export default function HomePage({ data }) {
    return (
        <main className="HomePage-main" id="Home">
            <div className="content">
                <div className="intro-bio">
                    <h2>{data.intro}</h2>
                    <h2>{data.possibleIntros[0]}</h2>
                </div>
                {/* <button className="learn-about-me-btn">Learn more about me!</button> */}
            </div>
        </main>
    )
}