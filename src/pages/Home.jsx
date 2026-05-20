import { Link } from 'react-router-dom'
import deadlines from '../data/deadlines'

export function StatusPill({ status }) {
  const config = {
    open:    { dot: '#141414', text: '#141414', label: 'Open',         pulse: false, strike: false },
    closing: { dot: '#FF3300', text: '#FF3300', label: 'Closing Soon', pulse: true,  strike: false },
    closed:  { dot: null,      text: '#737373', label: 'Closed',       pulse: false, strike: true  },
  }
  const c = config[status] || config.closed
  return (
    <span className="inline-flex items-center gap-2">
      {c.dot && (
        <span
          className={c.pulse ? 'animate-pulse' : ''}
          style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c.dot, display: 'inline-block', flexShrink: 0 }}
        />
      )}
      <span
        className="font-mono text-xs tracking-wider uppercase"
        style={{ color: c.text, textDecoration: c.strike ? 'line-through' : 'none' }}
      >
        {c.label}
      </span>
    </span>
  )
}

export default function Home() {
  const preview = deadlines.slice(0, 5)

  return (
    <main className="max-w-7xl mx-auto px-6">

      {/* Hero */}
      <section className="py-24" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <p className="animate-reveal font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: '#FF3300', animationDelay: '0ms' }}>
          The Ledger · Spring 2027
        </p>
        <h1
          className="animate-reveal font-display font-extrabold text-6xl md:text-8xl tracking-tighter mb-12"
          style={{ lineHeight: 0.9, animationDelay: '100ms' }}
        >
          Every open Spring Week,<br />
          in one place.
        </h1>
        <p className="animate-reveal font-sans text-xl leading-relaxed max-w-xl mb-12" style={{ color: '#737373', animationDelay: '200ms' }}>
          Updated each season. Filtered to London front-office programmes at tier-1 banks and trading firms. Plus coaching from someone who's actually done it.
        </p>
        <div className="animate-reveal flex flex-wrap gap-3" style={{ animationDelay: '300ms' }}>
          <Link to="/deadlines"
            className="font-sans font-medium text-sm px-5 py-3 rounded-full transition-colors"
            style={{ backgroundColor: '#141414', color: '#FAFAFA' }}>
            View all deadlines
          </Link>
          <Link to="/coach"
            className="font-sans font-medium text-sm px-5 py-3 rounded-full transition-colors"
            style={{ border: '1px solid rgba(0,0,0,0.08)', color: '#141414' }}>
            Get coached
          </Link>
        </div>
      </section>

      {/* Deadline preview */}
      <section className="py-24" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="flex items-baseline justify-between mb-8">
          <p className="font-mono text-[11px] tracking-widest uppercase" style={{ color: '#737373' }}>Open now</p>
          <Link to="/deadlines" className="font-mono text-[11px] tracking-widest uppercase transition-colors" style={{ color: '#737373' }}>
            View all →
          </Link>
        </div>

        {/* Table header */}
        <div className="grid gap-4 px-2 pb-4" style={{ gridTemplateColumns: '3fr 3fr 2fr 2fr 2fr', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          {['Bank', 'Division', 'Location', 'Status', 'Deadline'].map(h => (
            <span key={h} className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#737373' }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        {preview.map((d, i) => (
          <div key={i} className="grid gap-4 px-2 py-6 items-center transition-colors"
            style={{ gridTemplateColumns: '3fr 3fr 2fr 2fr 2fr', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(20,20,20,0.02)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span className="font-display font-bold text-lg tracking-tight">{d.bank}</span>
            <span className="font-sans text-sm" style={{ color: '#737373' }}>{d.division}</span>
            <span className="font-mono text-xs uppercase" style={{ color: '#737373' }}>{d.location}</span>
            <StatusPill status={d.status} />
            <span className="font-mono text-xs" style={{ color: '#737373' }}>{d.deadline}</span>
          </div>
        ))}

        <Link to="/deadlines" className="mt-8 inline-block font-mono text-[11px] tracking-widest uppercase transition-colors" style={{ color: '#737373' }}>
          See all {deadlines.length} programmes →
        </Link>
      </section>

      {/* Three pillars */}
      <section className="py-24" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <p className="font-mono text-[11px] tracking-widest uppercase mb-12" style={{ color: '#737373' }}>What we offer</p>
        <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {[
            { label: 'Free',  title: 'Deadlines Tracker',   desc: 'Every spring week deadline, updated each season. Filtered to London front-office. Never miss an opening.', cta: 'View tracker', href: '/deadlines' },
            { label: 'Free',  title: 'Preparation Guides',  desc: 'Firm-by-firm breakdowns, application tips, and what interviewers actually look for.', cta: 'Browse guides', href: '/prep' },
            { label: 'Paid',  title: 'Personal Coaching',   desc: 'CV reviews, mock interviews, and full application coaching from someone who secured Dare and Deloitte as a first-year.', cta: 'See packages', href: '/coach' },
          ].map(p => (
            <div key={p.title} className="p-8 transition-colors group cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid transparent' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(20,20,20,0.20)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}>
              <span className="font-mono text-[11px] tracking-widest uppercase mb-4 inline-block"
                style={{ color: p.label === 'Paid' ? '#FF3300' : '#737373' }}>
                {p.label}
              </span>
              <h3 className="font-display font-bold text-xl tracking-tight mb-3">{p.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: '#737373' }}>{p.desc}</p>
              <Link to={p.href} className="font-mono text-[11px] tracking-widest uppercase transition-colors group-hover:text-[#FF3300]" style={{ color: '#141414' }}>
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: '~0.5%', label: 'Acceptance rate at Dare International' },
            { num: '2/2',   label: 'Spring weeks secured as a first-year' },
            { num: '50+',   label: 'Deadlines tracked this season' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display font-bold text-5xl tracking-tighter mb-2">{s.num}</p>
              <p className="font-mono text-[11px] tracking-widest uppercase" style={{ color: '#737373' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
