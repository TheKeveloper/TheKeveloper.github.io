import React from 'react'
import { Section } from '../components/TextComponents'
import { NavLink } from 'react-router-dom'

export class HomePage extends React.PureComponent {
    render() {
        return (
            <div className = "HomePage">
                <Section title = "Hi">
                    <p>
                        I'm Kevin. I'm from Minnesota and I'm a member of the Harvard College Class of 2021. I'm studying Applied Mathematics with a focus in Economics. I was the President of the <a href = "http://hodp.org" target = "_blank">Harvard College Open Data Project</a> from 2019-2020. My academic interests include: microeconomic theory, game theory, real analysis, and probability. See the <NavLink exact to="/projects">Projects</NavLink> page for things that I've worked on or am currently working on. 
                    </p>
                </Section>
            </div>
        )
    }
}