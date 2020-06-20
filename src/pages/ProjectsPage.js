import React from 'react'
import { ScrollableListView } from '../components/ScrollableListView'
import {tags, projects } from '../config/projects'
import { ProjectItem } from '../components/ProjectItem'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export class ProjectsPage extends React.PureComponent {
    state = {
        selectedTags : []
    }
    handleChange = (selectedTags) => {
        console.log(selectedTags);
        if(selectedTags) {
            this.setState({ selectedTags : selectedTags.map(selected => selected.value) })
        }
        else {
            this.setState({selectedTags : []})
        }
    }
    render() {
        const animatedComponents = makeAnimated()
        let displayedProjects = projects.filter(project => {
            return this.state.selectedTags.reduce((prev, cur) => prev && project.tags.indexOf(cur) != -1, true);
        });
        return (
            <div className="ProjectsPage">
                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="tags"
                    options={Object.values(tags).map(tag => {return {value: tag, label : tag}})}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    components = {animatedComponents}
                    onChange = {this.handleChange.bind(this)}
                />
                <ScrollableListView items = {displayedProjects.map(project => <ProjectItem project = {project}/>)}/>
            </div>
        )
    }
}