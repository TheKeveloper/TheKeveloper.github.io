import React from 'react'

const social_links = [
    {
        text: "GitHub",
        url: "https://github.com/"
    },
    {
        text: "Email",
        url: "mailto:kevinbi@college.harvard.edu"
    },
    {
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/kevin-bi-006426148/"
    },
    {
        text: "StackOverflow",
        url: "https://stackoverflow.com/users/8371811/keveloper"
    }
]
export class SocialBar extends React.PureComponent {

    render() {
        return(<div style = {{textAlign: "center", marginBottom: 10}}>
            {social_links.map(link => <a href = {link.url}
                style = {{ 
                    marginLeft: 20,
                    marginRight: 20,
                    fontSize: "14pt",
                }}
            target = "_blank"><strong>{link.text}</strong></a>)}
        </div>)
    }
}