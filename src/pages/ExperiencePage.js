import React from 'react'
import {tags, experiences} from '../config/experience'
import { ItemsDisplay } from '../components/ItemsDisplay'
import Utils from '../Utils'

export class ExperiencePage extends React.PureComponent {
    render() {
        Utils.logPageview("/experience")
        return (
            <div className = "ExperiencePage">
                <h3 style={{textAlign: "center", marginTop: 20, marginBottom: 20}}>Experience</h3>
                <ItemsDisplay tags = {tags} items = {experiences} />
            </div>
        )
    }
}