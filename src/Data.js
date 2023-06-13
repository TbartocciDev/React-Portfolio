const iconColor = "ffffff"
const iconSize = 128
const contactLinkColor = "ffffff"
const contactLinkSize = 128
const Data = {
    home: {
        title: "Tommy Bartocci",
        intro: "Is a NJ/NY based devloper who",
        possibleIntros: [
            "is an animal lover",
            "is a big star wars fan",
            "loves the great outdoors"
        ]
    },
    about: {
        header: "About Me",
        brandStatement: `Software Developer with school and self-taught education. Skilled in both iOS and web development. 
        Possess exceptional problem-solving skills and industry standard programming knowledge. Capable of building from the 
        ground up, or enhancing already built projects.`
    },
    apps: {
        header: "Applications"
    },
    skills: {
        header: "Skills & Tools",
        subheader: "Some skills, tools and technologies I use to make ideas become reality:",
        list:[
            {name: "Swift", iconURL:"https://icongr.am/devicon/swift-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "React", iconURL:"https://icongr.am/material/react.svg?size="+iconSize+"&color="+iconColor},
            {name: "Python", iconURL:"https://icongr.am/devicon/python-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "JavaScript", iconURL:"https://icongr.am/devicon/javascript-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "HTML", iconURL:"https://icongr.am/devicon/html5-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "CSS", iconURL:"https://icongr.am/devicon/css3-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Django", iconURL:"https://icongr.am/devicon/django-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Express", iconURL:"https://icongr.am/devicon/express-original.svg?size="+iconSize+"&color="+iconColor},
            {name: "Git", iconURL:"https://icongr.am/devicon/git-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Heroku", iconURL:"https://icongr.am/devicon/heroku-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "MongoDB", iconURL:"https://icongr.am/devicon/mongodb-plain.svg?size="+iconSize+"&color="+iconColor},
            {name: "Trello", iconURL:"https://icongr.am/devicon/trello-plain.svg?size="+iconSize+"&color="+iconColor},
        ]
    },
    contact: {
        header: "Contact",
        subheader: "Let's get in touch!",
        salutations: `Thank you for checking out my site. I hope to get the opportunity to build something amazing together!
        Or are you feeling social? Feel free to reach out through the links below and let's chat.`,
        contactLinks: [
            {
                title: "LinkedIn",
                photoURL: "https://icongr.am/material/linkedin.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://www.linkedin.com/in/thomas-bartocci-884957162"
            },
            {
                title: "Github",
                photoURL: "https://icongr.am/material/github.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://github.com/TbartocciDev"
            },
            {
                title: "View Resume",
                photoURL: "https://icongr.am/material/pdf-box.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: "https://drive.google.com/file/d/1GX8n5eQKGboTRypYrEGAp5It0A7L9CEE/view?usp=sharing"
            },
            {
                title: "Email Me!",
                photoURL: "https://icongr.am/material/email-outline.svg?size="+contactLinkSize+"&color="+contactLinkColor,
                link: ""
            }
        ]
    },
}

module.exports = { Data }