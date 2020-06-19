import { HomePage } from '../pages/HomePage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { ExperiencePage } from '../pages/ExperiencePage'
import React from 'react'

const pages = [
    {
        title : "Home",
        route : "/", 
        component : () => <HomePage/>
    },
    {
        title : "Projects",
        route : "/projects",
        component : () => <ProjectsPage/>
    },
    {
        title : "Experience",
        route : "/experience",
        component : () => <ExperiencePage/>
    }
]
export default pages;