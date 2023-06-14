import "./AboutPage.css"

export default function AboutPage({ data }) {
    function handlePictureClicked(evt) {
        evt.target.setAttribute('id', 'funny')
        setTimeout(changeImage, 2500)
    }

    function changeImage() {
        const img = document.querySelector('.facial')
        img.setAttribute('id', 'normal')
    }

    return (
        <main className="AboutPage-main" id="About">
            <div className="content">
                <h1>{data.header}</h1>
                <div className="underline"></div>
                <div className="brand-div">
                    <div>
                        <img src="" alt="" onClick={handlePictureClicked} className="facial" id="normal"/>
                    </div>
                    <div className="comments-div">
                        <h2>{data.summary}</h2>
                        <h2>{data.background}</h2>
                        <h2>{data.finalWords}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}