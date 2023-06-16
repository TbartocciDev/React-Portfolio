import "./NavBar.css"
import { useEffect } from "react"

export default function NavBar() {
    const sections = ["About","Apps","Skills","Contact"]
    let dropDownMenu = null
    let hamburgerMenu = null
    let menuState = null
    let blurScreen = null 

    useEffect(() => {
        dropDownMenu = document.querySelector('.drop-down-menu')
        hamburgerMenu = document.querySelector('.NavBar-hamburger-view')
        blurScreen = document.querySelector('.blur-screen')
    },[])

    function showMenu(evt) {
        menuState = dropDownMenu.getAttribute('id')
        if (menuState === "hidden") {
            hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/close-circle-outline.svg?size=128&color=ffffff')"
            blurScreen.style.height = "100vh"
            dropDownMenu.removeAttribute('id')
            dropDownMenu.setAttribute('id','visible')
        } else {
            hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/menu.svg?size=128&color=ffffff')"
            blurScreen.style.height = "0vh"
            dropDownMenu.removeAttribute('id')
            dropDownMenu.setAttribute('id','hidden')
        }
    }

    function scrollToSection(evt) {
        const section = document.getElementById(evt.target.innerHTML);
        section.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToTop(evt) {
        const section = document.getElementById("Home");
        section.scrollIntoView({behavior: 'smooth'});
        hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/menu.svg?size=128&color=ffffff')"
        blurScreen.style.height = "0vh"
        dropDownMenu.removeAttribute('id')
        dropDownMenu.setAttribute('id','hidden')
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