import "./ContactPage.css"
import ContactLink from "./ContactLink"

export default function ContactPage({ data }) {
    return (
        <main className="ContactPage-main" id="Contact">
            <div className="content">
                <h1>{data.header}</h1>
                <h2>{data.subheader}</h2>
                <div className="underline"></div>
                <h3>{data.salutations}</h3>
                <div className="contact-links-div">
                    {data.contactLinks.map((link) => (
                        <ContactLink link={link}/>
                    ))}
                </div>
            </div>
        </main>
    )
}