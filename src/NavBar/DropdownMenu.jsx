export default function DropdownMenu() {
    const sections = ["About","Apps","Skills","Contact"]
    const dropDownMenu = document.querySelector('.drop-down-menu')

    function scrollToSection(evt) {
        const section = document.getElementById(evt.target.innerHTML);
        section.scrollIntoView({behavior: 'smooth'});
        if (dropDownMenu) {
            dropDownMenu.removeAttribute('id')
            dropDownMenu.setAttribute('id','hidden')
        } else {
            // alert('not found')
        }
    }

    return (
        <div className="drop-down-menu">
            <div className="menu-content">
                {sections.map((s, key) => (
                    <button 
                        onClick={scrollToSection}
                        className="section-link"
                        key={key}
                    ><h2>{s}</h2></button>
                ))}
            </div>
        </div>
    )
}