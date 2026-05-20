import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/deadlines', label: 'Deadlines' },
    { to: '/coach',     label: 'Coach' },
    { to: '/prep',      label: 'Preparation' },
  ]

  return (
    <header style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(250,250,250,0.80)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
      className="sticky top-0 z-50 w-full h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-xl font-extrabold tracking-tighter">
          EQUITY<span style={{ color: '#FF3300' }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[11px] tracking-widest uppercase transition-colors"
              style={{ color: pathname === l.to ? '#141414' : '#737373' }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/coach#services"
            className="font-sans font-medium text-xs px-4 py-2 rounded-full transition-colors"
            style={{ backgroundColor: '#141414', color: '#FAFAFA' }}
          >
            Access Portal
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open
              ? <><line x1="4" y1="4" x2="18" y2="18" stroke="#141414" strokeWidth="1.5"/><line x1="18" y1="4" x2="4" y2="18" stroke="#141414" strokeWidth="1.5"/></>
              : <><line x1="3" y1="6" x2="19" y2="6" stroke="#141414" strokeWidth="1.5"/><line x1="3" y1="11" x2="19" y2="11" stroke="#141414" strokeWidth="1.5"/><line x1="3" y1="16" x2="19" y2="16" stroke="#141414" strokeWidth="1.5"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#FAFAFA' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="font-mono text-[11px] tracking-widest uppercase"
              style={{ color: '#737373' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/coach#services" onClick={() => setOpen(false)}
            className="font-sans font-medium text-xs px-4 py-2 rounded-full text-center"
            style={{ backgroundColor: '#141414', color: '#FAFAFA' }}>
            Access Portal
          </Link>
        </div>
      )}
    </header>
  )
}
