import "./NavBar.css"

export default function NavBar() {
    const sections = ["About","Apps","Skills","Contact"]

    function showMenu(evt) {
        const navBar = evt.target.parentNode
        navBar.style.height = "100vh"
    }

    function scrollToSection(evt) {
        const section = document.getElementById(evt.target.innerHTML);
        section.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToTop(evt) {
        const section = document.getElementById("Home");
        section.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <main className="NavBar-main">
            <button
                onClick={scrollToTop}
            ><h1>Tommy Bartocci</h1>
            </button>
            <div className="links-div">
                {sections.map((s, key) => (
                    <button 
                        onClick={scrollToSection}
                        className="section-link"
                        key={key}
                    ><h2>{s}</h2></button>
                ))}
            </div>
            <div className="NavBar-hamburger-view" 
                onClick={showMenu}>
                    
            </div>
        </main>
    )
}