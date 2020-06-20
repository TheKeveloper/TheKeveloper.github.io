import React from 'react'
import { ScrollableListView } from './ScrollableListView'
import {tags, projects } from '../config/projects'
import { ListItem } from './ListItem'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

export class ItemsDisplay extends React.PureComponent {
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
        let displayedItems = this.props.items.filter(item => {
            return this.state.selectedTags.reduce((prev, cur) => prev && item.tags.indexOf(cur) != -1, true);
        });
        return (
            <div className="ItemDisplay">
                <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="tags"
                    options={Object.values(this.props.tags).map(tag => {return {value: tag, label : tag}})}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    components = {animatedComponents}
                    onChange = {this.handleChange.bind(this)}
                    placeholder = "Filter tags..."
                />
                <ScrollableListView items = {displayedItems.map(item => <ListItem item = {item}/>)}/>
            </div>
        )
    }
}