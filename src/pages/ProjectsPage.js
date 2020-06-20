import React from 'react'
import { ScrollableListView } from '../components/ScrollableListView'
import {tags, projects } from '../config/projects'
import { ItemsDisplay } from '../components/ItemsDisplay'

export class ProjectsPage extends React.PureComponent {
    render() {
        return (
            <div className="ProjectsPage">
                <h3 style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>Projects</h3>
               <ItemsDisplay tags = {tags} items = {projects} />
            </div>
        )
    }
}