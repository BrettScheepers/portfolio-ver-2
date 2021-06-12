import React from 'react'
import { Switch, Route, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'

function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <NavLink to="/" exact={true} className="link" activeStyle={{ color: 'var(--red)' }}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className="link" activeStyle={{ color: 'var(--red)' }}>
          Portfolio
        </NavLink>
        <NavLink to="/about" className="link" activeStyle={{ color: 'var(--red)' }}>
          About
        </NavLink>
      </ul>
    </nav>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="container">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/about" exact component={About} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;