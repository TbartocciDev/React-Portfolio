import "./NavBar.css"

export default function NavBar() {
    const sections = ["About","Apps","Skills","Contact"]
    function scrollToSection(evt) {
        const section = document.getElementById(evt.target.innerHTML);
        section.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <main className="NavBar-main">
            <div className="links-div">
                {sections.map((s, key) => (
                    <button 
                        onClick={scrollToSection}
                        className="section-link"
                        key={key}
                    ><h2>{s}</h2></button>
                ))}
            </div>
            <h1>Tommy Bartocci</h1>
            <div className="socials-div">
                <h2>Insta</h2>
                <h2>Linked</h2>
                <h2>Github</h2>
            </div>
        </main>
    )
}