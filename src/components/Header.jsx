import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ onToggleTheme, theme }) => {
  const loc = useLocation()
  return (
    <header className="navbar-index"> {/* reuse your navbar CSS class */}
      <div className="logo-index">My Portfolio</div>
      <ul>
        <li><Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link></li>
        <li><Link className={loc.pathname === '/about' ? 'active' : ''} to="/about">About</Link></li>
        <li><Link className={loc.pathname === '/experience' ? 'active' : ''} to="/experience">Experience</Link></li>
        <li><Link className={loc.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link></li>
        <li><Link className={loc.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link></li>
      </ul>

      {/* simple theme toggle UI */}
      <button onClick={onToggleTheme} style={{marginLeft: '12px'}}>{theme === 'light' ? '🌙' : '☀️'}</button>
    </header>
  )
}

export default Header
