export default function ContactLink({ link }) {
    return (
        <a href={link.link} target="_blank" className="contact-link">
            <div>
                <img src={link.photoURL} alt="" />
                <h2>{link.title}</h2>
            </div>
        </a>
    )
}