import "./ContactPage.css"
import ContactLink from "./ContactLink"

export default function ContactPage({ data }) {
    return (
        <main className="ContactPage-main" id="Contact">
            <div className="content">
                <h1>{data.header}</h1>
                <div className="underline"></div>
                <h2>{data.salutations}</h2>
                <div className="contact-links-div">
                    {data.contactLinks.map((link) => (
                        <ContactLink link={link}/>
                    ))}
                </div>
            </div>
        </main>
    )
}