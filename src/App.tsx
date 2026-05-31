import 'bootstrap/dist/css/bootstrap.css'
import './css/bootswatch/bootstrap.min.css'
import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import pages from './config/pages'
import { NavigationBar } from './components/NavigationBar'
import './css/App.css'
import { SocialBar } from './components/SocialBar'
import ReactGA from 'react-ga'

const TRACKING_ID = "UA-44600100-3"

try {
  ReactGA.initialize(TRACKING_ID)
} catch {
  // GA initialization may fail in test environments
}

function App() {
  return (
    <Router basename="/">
      <div className="App container">
        <Header />
        <SocialBar />
        <NavigationBar />
        <div className="container content-container" style={{ marginTop: 10 }}>
          <Routes>
            {pages.map((page) => (
              <Route key={page.route} path={page.route} element={<page.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
