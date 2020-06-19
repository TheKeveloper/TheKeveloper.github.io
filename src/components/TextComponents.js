import React from 'react'

export class Section extends React.PureComponent {
    render() {
        return (
            <div>
                { this.props.title ? <div className = "row"><h3>{this.props.title}</h3></div> : null}
                <div className = "row">
                    { this.props.children }
                </div>
            </div>
        )
    }
}