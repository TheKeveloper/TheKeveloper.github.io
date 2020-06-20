import React from 'react'

export class ProjectItem extends React.PureComponent {
    render() {
        const project = this.props.project
        return <div className = "project-item card h-100" style = {{
            borderRadius : 10,
            borderColor: "grey",
            borderWidth: 3,
            padding: 10, 
            fontSize: "12pt", 
        }}>
            <strong>{project.url ? <a href = {project.url} target = "_blank">{project.title}</a> : project.title}</strong>
            <span>
            {project.repo ? <a href = {project.repo} target = "_blank">GitHub</a> : null}
            </span>
            <span>
                {project.description}
            </span>
            
            <div className = "tags" style = {{
                display: "flex",
                marginTop: 10
            }}>
                {project.tags.sort().map(tag => <div className = "card h-100"
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