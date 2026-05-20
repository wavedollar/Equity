import { Link } from 'react-router-dom'

export default function Prep() {
  const guides = [
    {
      firm: 'Goldman Sachs',
      divisions: ['Global Markets', 'Investment Banking'],
      difficulty: 'High',
      tips: [
        'Applications open early — often August. Set a reminder.',
        'HireVue video interview is first stage. Practise structured answers (STAR format).',
        'Markets questions focus on macro awareness — know current rate environment.',
        'Demonstrate genuine interest in markets, not just the brand name.',
      ],
    },
    {
      firm: 'Morgan Stanley',
      divisions: ['Sales & Trading', 'Investment Banking'],
      difficulty: 'High',
      tips: [
        'Strong emphasis on why Morgan Stanley specifically — research the firm properly.',
        'Numerical reasoning test is an early filter — practise SHL-style tests.',
        'Spring week is a direct pipeline to summer internship — treat every interaction seriously.',
        'Show commercial awareness with real examples, not textbook definitions.',
      ],
    },
    {
      firm: 'JP Morgan',
      divisions: ['Markets', 'Investment Banking'],
      difficulty: 'High',
      tips: [
        'Online application includes motivational questions — be specific about desk preferences.',
        'Assessment centre includes a group exercise — collaboration matters as much as individual performance.',
        'JP Morgan values diversity of thought — your non-traditional background can be an asset.',
        'Know recent JP Morgan news: deals, hires, strategic direction.',
      ],
    },
    {
      firm: 'Barclays',
      divisions: ['Global Markets'],
      difficulty: 'Medium',
      tips: [
        'Often more accessible than US bulge brackets — strong applications from non-target schools convert.',
        'HireVue + numerical test early in process.',
        'Focus on why front-office specifically, not just "banking".',
        'Research Barclays\' markets business and recent strategic direction.',
      ],
    },
    {
      firm: 'Prop & Energy Trading',
      divisions: ['Dare, Vitol, Trafigura, Glencore'],
      difficulty: 'Very High',
      tips: [
        'These firms value commercial instinct over pedigree — personal trading history is directly relevant.',
        'Commodities knowledge is expected: supply/demand dynamics, shipping, geopolitics.',
        'Acceptance rates can be below 1%. Every application must be tailored.',
        'Networking events are direct pipelines — treat them as first-round interviews.',
      ],
    },
  ]

  const diffColor = { 'Very High': '#FF3300', 'High': '#E88000', 'Medium': '#737373' }

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-24" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '96px' }}>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: '#FF3300' }}>Free resource</p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter mb-6" style={{ lineHeight: 0.95 }}>
          Preparation Guides
        </h1>
        <p className="font-sans text-xl leading-relaxed max-w-lg" style={{ color: '#737373' }}>
          Firm-by-firm breakdowns of what to expect and how to stand out. Free, always.
        </p>
      </div>

      {/* Universal tips */}
      <div className="p-8 rounded-2xl mb-24" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
        <h2 className="font-display font-bold text-2xl tracking-tight mb-8">Before you apply — universal tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { n: '01', tip: 'Apply early. Most spring weeks close within weeks of opening — often before Christmas.' },
            { n: '02', tip: 'Tailor every application. Generic applications are filtered out immediately.' },
            { n: '03', tip: 'Know why the desk, not just the firm. "I want to work in markets" is not enough.' },
            { n: '04', tip: 'Have a personal trading story. Even small real-money decisions demonstrate genuine interest.' },
            { n: '05', tip: 'Practise verbal and numerical reasoning tests before applications open — you\'ll face them early.' },
            { n: '06', tip: 'LinkedIn matters more than you think. Keep it clean and up to date before applications open.' },
          ].map(t => (
            <div key={t.n} className="flex gap-4">
              <span className="font-mono text-[11px] tracking-widest" style={{ color: '#737373', flexShrink: 0, marginTop: 2 }}>{t.n}</span>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#737373' }}>{t.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Firm guides */}
      <p className="font-mono text-[11px] tracking-widest uppercase mb-8" style={{ color: '#737373' }}>Firm guides</p>
      <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, overflow: 'hidden' }}>
        {guides.map((g, i) => (
          <div key={g.firm} className="p-8"
            style={{ borderBottom: i < guides.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight">{g.firm}</h3>
                <p className="font-mono text-[11px] tracking-wide uppercase mt-1" style={{ color: '#737373' }}>
                  {g.divisions.join(' · ')}
                </p>
              </div>
              <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: diffColor[g.difficulty] }}>
                {g.difficulty} difficulty
              </span>
            </div>
            <ul className="space-y-2">
              {g.tips.map((tip, j) => (
                <li key={j} className="flex gap-3 font-sans text-sm leading-relaxed" style={{ color: '#737373' }}>
                  <span style={{ color: '#FF3300', flexShrink: 0, marginTop: 2 }}>·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <p className="font-mono text-[11px] tracking-widest uppercase mb-6" style={{ color: '#737373' }}>
          Want personalised prep for a specific firm?
        </p>
        <Link to="/coach"
          className="inline-block font-sans font-medium text-sm px-5 py-3 rounded-full transition-colors"
          style={{ backgroundColor: '#141414', color: '#FAFAFA' }}>
          See coaching packages →
        </Link>
      </div>
    </main>
  )
}
