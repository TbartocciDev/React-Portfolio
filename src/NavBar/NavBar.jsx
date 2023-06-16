import "./NavBar.css"

export default function NavBar() {
    const sections = ["About","Apps","Skills","Contact"]
    const dropDownMenu = document.querySelector('.drop-down-menu')
    const hamburgerMenu = document.querySelector('.NavBar-hamburger-view')

    function showMenu(evt) {
        if (dropDownMenu){
            let menuState = dropDownMenu.getAttribute('id')
            if (menuState === "hidden") {
                if (dropDownMenu) {
                    hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/close-circle-outline.svg?size=128&color=ffffff')"
                    dropDownMenu.removeAttribute('id')
                    dropDownMenu.setAttribute('id','visible')
                } else {
                    // alert('not found')
                }
            } else {
                if (dropDownMenu) {
                    hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/menu.svg?size=128&color=ffffff')"
                    dropDownMenu.removeAttribute('id')
                    dropDownMenu.setAttribute('id','hidden')
                } else {
                    // alert('not found')
                }
            }
        } else {
            // alert('no drop down menu')
        }
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
        <main className="NavBar-main" id="NavBar-colored" >
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