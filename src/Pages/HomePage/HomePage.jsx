import "./HomePage.css"

export default function HomePage({ data }) {
    return (
        <main className="HomePage-main" id="Home">
            <div className="content">
                <div className="intro-bio">
                    <h1>{data.intro}</h1>
                    <div id="rotating-text" className="text-holder">
                        {data.possibleIntros.map((i) => (
                            <h1>{i.string} {i.emoji}</h1>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}