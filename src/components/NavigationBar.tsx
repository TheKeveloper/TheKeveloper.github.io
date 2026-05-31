import { NavLink } from 'react-router-dom'
import pages from '../config/pages'

export function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {pages.map((page) => (
            <li key={page.route} className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? ' nav-active' : ''}`}
                to={page.route}
                end
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
