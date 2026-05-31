import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import { Container } from '@mantine/core'
import { Header } from './components/Header'
import pages from './config/pages'
import { NavigationBar } from './components/NavigationBar'
import { SocialBar } from './components/SocialBar'
import './css/App.css'

function App() {
  return (
    <Router basename="/">
      <Container size="md" py="sm">
        <Header />
        <SocialBar />
        <NavigationBar />
        <Container size="md" mt="sm">
          <Routes>
            {pages.map((page) => (
              <Route key={page.route} path={page.route} element={<page.component />} />
            ))}
          </Routes>
        </Container>
      </Container>
    </Router>
  )
}

export default App
