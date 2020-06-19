import React from 'react'
import { NavLink } from 'react-router-dom'

export class NavigationBar extends React.PureComponent {
    render() {
        const pages = [
            {
                title : "Home",
                route : "/"
            },
            {
                title : "Projects",
                route : "/projects"
            }
        ]
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        {
                            pages.map(page => 
                                <li className = "nav-item">
                                    <NavLink exact className="nav-link" activeClassName="nav-active" to= {page.route}>
                                        { page.title } 
                                    </NavLink> 
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}