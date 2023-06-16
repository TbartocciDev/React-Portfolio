import { useEffect } from "react";

export default function DropdownMenu() {
    const sections = ["About","Apps","Skills","Contact"]
    let dropDownMenu = null
    let hamburgerMenu = null
    useEffect(() => {
        dropDownMenu = document.querySelector('.drop-down-menu')
        hamburgerMenu = document.querySelector('.NavBar-hamburger-view')
    },[])

    
    

    function scrollToSection(evt) {
        const section = document.getElementById(evt.target.innerHTML);
        dropDownMenu.removeAttribute('id')
        dropDownMenu.setAttribute('id','hidden')
        hamburgerMenu.style.backgroundImage = "url('https://icongr.am/material/menu.svg?size=128&color=ffffff')"
        section.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="drop-down-menu" id="hidden">
            <div className="menu-content">
                {sections.map((s, key) => (
                    <button 
                        onClick={scrollToSection}
                        className="section-link"
                        key={key}
                    ><h2>{s}</h2></button>
                ))}
            </div>
            <div className="blur-screen"></div>
        </div>
    )
}