import React from 'react'
import ReactDOM from 'react-dom'

export class ScrollableListView extends React.PureComponent {
    render() {
        return (<div class="container" style = {{
            overflow: "hidden",
            flexGrow: 1,
            position: "relative",
        }}>
            <div style = {{
                marginTop: 10,
                marginBottom: 10,
                paddingTop: 10,
                paddingBottom: 10,
                display: "block",
                height: undefined,
                flex : 1, 
                overflowY: "auto"}}>
                
                {this.props.items.map(item => 
                    <div className = "list-item"
                     style = {{
                         marginTop: 10,
                         marginBottom: 10,
                     }}> 
                        {item}
                    </div>)
                }
            </div> 
        </div>
        )
    }
}