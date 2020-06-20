import React from 'react'


export class ListItem extends React.PureComponent {
    render() {
        const item = this.props.item
        return <div className = "card h-100" style = {{
            borderRadius : 10,
            borderColor: "grey",
            borderWidth: 3,
            padding: 10, 
            fontSize: "12pt", 
        }}>
            <span>
            <strong style = {{fontSize:"14pt"}}>{item.url ? <a href = {item.url} target = "_blank">{item.title}</a> : item.title}</strong> <span>
            {item.repo ? <a href = {item.repo} target = "_blank">(GitHub)</a> : null}
            </span>
            
             <span style = {{float: "right", marginRight: 30}}>{item.date}</span>
            </span>
            {item.subtitle ? <span><i>{item.subtitle}</i></span> : null}
            <span dangerouslySetInnerHTML = {{__html: item.description}}>
            </span>
            
            <div className = "tags" style = {{
                display: "flex",
                marginTop: 10
            }}>
                {item.tags.sort().map(tag => <div className = "card h-100"
                    style = {{
                        fontSize: "10pt",
                        color: "grey",
                        marginRight: 5, 
                        padding: 2
                    }}
                >{tag}</div>)}
            </div>
        </div>
    }
}