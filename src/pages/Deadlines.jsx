import { useState } from 'react'
import deadlines from '../data/deadlines'
import { StatusPill } from './Home'

export default function Deadlines() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = deadlines.filter(d => {
    const matchStatus = filter === 'all' || d.status === filter
    const matchSearch = d.bank.toLowerCase().includes(search.toLowerCase()) ||
                        d.division.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-16" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '96px' }}>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: '#FF3300' }}>
          The Ledger · Spring 2027
        </p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter mb-6" style={{ lineHeight: 0.95 }}>
          Spring Week Deadlines
        </h1>
        <p className="font-sans text-xl leading-relaxed max-w-lg" style={{ color: '#737373' }}>
          Every front-office spring week in London. Updated each season. Free, always.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search bank or division..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="font-sans text-sm rounded-full px-4 py-2 outline-none w-64"
          style={{ border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#FAFAFA' }}
        />
        <div className="flex gap-2">
          {['all', 'open', 'closing', 'closed'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="font-mono text-[11px] tracking-widest uppercase px-4 py-2 rounded-full transition-colors"
              style={{
                backgroundColor: filter === f ? '#141414' : 'transparent',
                color: filter === f ? '#FAFAFA' : '#737373',
                border: '1px solid rgba(0,0,0,0.08)'
              }}>
              {f}
            </button>
          ))}
        </div>
        <span className="font-mono text-[11px] tracking-widest uppercase ml-auto" style={{ color: '#737373' }}>
          {filtered.length} programmes
        </span>
      </div>

      {/* Table header */}
      <div className="grid gap-4 px-2 pb-4" style={{ gridTemplateColumns: '3fr 3fr 2fr 2fr 2fr', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        {['Bank', 'Division', 'Location', 'Status', 'Deadline'].map(h => (
          <span key={h} className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#737373' }}>{h}</span>
        ))}
      </div>

      {/* Rows */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center font-mono text-[11px] tracking-widest uppercase" style={{ color: '#737373' }}>
          No programmes match your search.
        </div>
      ) : filtered.map((d, i) => (
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

      {/* Email alert */}
      <div className="mt-24 p-8 rounded-3xl" style={{ backgroundColor: '#141414' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl tracking-tight mb-1" style={{ color: '#FAFAFA' }}>Get deadline alerts</h3>
            <p className="font-sans text-sm" style={{ color: 'rgba(250,250,250,0.60)' }}>We'll email you when a new portal opens. No spam.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input type="email" placeholder="your@email.com"
              className="font-sans text-sm rounded-full px-4 py-3 outline-none flex-1 md:w-64"
              style={{ backgroundColor: 'rgba(250,250,250,0.10)', border: '1px solid rgba(250,250,250,0.20)', color: '#FAFAFA' }}
            />
            <button className="font-sans font-medium text-sm px-5 py-3 rounded-full whitespace-nowrap transition-colors"
              style={{ backgroundColor: '#FF3300', color: '#FAFAFA' }}>
              Notify me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
