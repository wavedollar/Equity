import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="font-display text-xl font-extrabold tracking-tighter">
          EQUITY<span style={{ color: '#FF3300' }}>.</span>
        </span>
        <nav className="flex gap-8">
          {['Deadlines', 'Coach', 'Preparation'].map(l => (
            <Link key={l} to={`/${l.toLowerCase()}`}
              className="font-mono text-[10px] tracking-widest uppercase transition-colors"
              style={{ color: '#737373' }}>
              {l}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#737373' }}>
          © {new Date().getFullYear()} Equity
        </p>
      </div>
    </footer>
  )
}
