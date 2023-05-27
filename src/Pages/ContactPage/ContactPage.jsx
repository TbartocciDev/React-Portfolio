import "./ContactPage.css"

export default function ContactPage() {
    const navBar = document.querySelector('.NavBar-main')
    const navBarHeight = navBar.offsetHeight

    const contentViews = document.querySelectorAll('.content')
    contentViews.forEach(function(view) {
        view.style.marginTop = navBarHeight+"px"
    })
    
    return (
        <main className="ContactPage-main" id="Contact">
            <div className="content">
                <div className="section-header">Contact</div>
                <div className="section-subheader">Let's get in touch!</div>
            </div>
        </main>
    )
}