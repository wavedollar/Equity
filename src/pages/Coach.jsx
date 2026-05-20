export default function Coach() {
  const services = [
    {
      name: 'CV Review',
      price: '£35',
      tag: 'Most popular',
      desc: 'A line-by-line review of your CV with written feedback. Tailored to front-office spring week applications — what to cut, what to add, and how to frame your experience.',
      includes: ['Written feedback doc', 'Returned within 48 hours', 'One round of revisions'],
      href: 'mailto:hello@equitysprings.com?subject=CV Review',
      accent: false,
    },
    {
      name: 'Application Review',
      price: '£60',
      tag: null,
      desc: 'Full review of a specific application — CV, cover letter, and motivational questions. With specific suggestions for the firm you\'re applying to.',
      includes: ['CV + cover letter feedback', 'Firm-specific insight', 'Returned within 48 hours'],
      href: 'mailto:hello@equitysprings.com?subject=Application Review',
      accent: false,
    },
    {
      name: 'Mock Interview',
      price: '£80',
      tag: null,
      desc: 'A 45-minute mock interview over video call, followed by written feedback. Covers competency questions, markets knowledge, and why finance.',
      includes: ['45-min video call', 'Written debrief', 'Question bank sent beforehand'],
      href: 'mailto:hello@equitysprings.com?subject=Mock Interview',
      accent: false,
    },
    {
      name: 'Full Package',
      price: '£175',
      tag: 'Best value',
      desc: 'Everything. CV review, application review, and mock interview. The full end-to-end prep for candidates serious about landing a spring week.',
      includes: ['CV review', 'Application review', 'Mock interview + debrief', 'Priority turnaround'],
      href: 'mailto:hello@equitysprings.com?subject=Full Package',
      accent: true,
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="mb-24 grid md:grid-cols-2 gap-12 items-end" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '96px' }}>
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: '#FF3300' }}>Coaching</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter" style={{ lineHeight: 0.95 }}>
            From someone<br />who just did it.
          </h1>
        </div>
        <div>
          <p className="font-sans text-xl leading-relaxed mb-4" style={{ color: '#737373' }}>
            First-year Economics student at the University of Bath. Secured a spring week at Dare International — a proprietary energy trading firm with roughly 0.5% acceptance — and Deloitte Advisory, back to back.
          </p>
          <p className="font-sans text-xl leading-relaxed" style={{ color: '#737373' }}>
            I'm not a career coach. I'm a student who figured out what works, and I'll tell you exactly what I did.
          </p>
        </div>
      </div>

      {/* Credentials */}
      <div className="grid md:grid-cols-3 gap-4 mb-24">
        {[
          { label: 'Dare International',  sub: 'Proprietary energy trading · London · ~0.5% acceptance' },
          { label: 'Deloitte Advisory',   sub: 'Spring into Advisory · London · Financial Risk' },
          { label: 'University of Bath',  sub: 'BSc Economics · First year · Graduating 2028' },
        ].map(c => (
          <div key={c.label} className="p-8 rounded-2xl transition-colors"
            style={{ border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(20,20,20,0.20)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
            <p className="font-display font-bold text-lg tracking-tight mb-1">{c.label}</p>
            <p className="font-mono text-[11px] tracking-wide uppercase" style={{ color: '#737373' }}>{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <p id="services" className="font-mono text-[11px] tracking-widest uppercase mb-10" style={{ color: '#737373' }}>Services & pricing</p>
      <div className="grid md:grid-cols-2 gap-6 mb-24">
        {services.map(s => (
          <div key={s.name} className="p-8 rounded-2xl flex flex-col justify-between transition-colors"
            style={{ border: `1px solid ${s.accent ? '#141414' : 'rgba(0,0,0,0.08)'}`, backgroundColor: '#FFFFFF' }}
            onMouseEnter={e => { if (!s.accent) e.currentTarget.style.borderColor = 'rgba(20,20,20,0.20)' }}
            onMouseLeave={e => { if (!s.accent) e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)' }}>
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl tracking-tight">{s.name}</h3>
                  {s.tag && (
                    <span className="font-mono text-[11px] tracking-widest uppercase mt-1 inline-block"
                      style={{ color: s.accent ? '#FF3300' : '#737373' }}>
                      {s.tag}
                    </span>
                  )}
                </div>
                <span className="font-display font-bold text-3xl tracking-tighter">{s.price}</span>
              </div>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: '#737373' }}>{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.includes.map(item => (
                  <li key={item} className="flex items-center gap-2 font-sans text-sm" style={{ color: '#737373' }}>
                    <span style={{ color: '#FF3300', fontSize: 16, lineHeight: 1 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={s.href}
              className="text-center font-sans font-medium text-sm px-6 py-3 rounded-full transition-colors"
              style={s.accent
                ? { backgroundColor: '#141414', color: '#FAFAFA' }
                : { border: '1px solid rgba(0,0,0,0.08)', color: '#141414' }}>
              Book now →
            </a>
          </div>
        ))}
      </div>

      {/* How it works — dark panel */}
      <div className="p-12 md:p-16 rounded-3xl" style={{ backgroundColor: '#141414' }}>
        <h3 className="font-display font-bold text-xl tracking-tight mb-6" style={{ color: '#FAFAFA' }}>How it works</h3>
        <ol className="space-y-4">
          {[
            'Click "Book now" and send a quick email with your details and what you\'re applying for.',
            'You\'ll get a response within 24 hours with next steps and a payment link.',
            'Once confirmed, turnaround is 48 hours for reviews or we\'ll book your mock interview slot.',
          ].map((step, i) => (
            <li key={i} className="flex gap-4 font-sans text-sm leading-relaxed" style={{ color: 'rgba(250,250,250,0.70)' }}>
              <span className="font-mono text-[11px] tracking-widest" style={{ color: 'rgba(250,250,250,0.40)', flexShrink: 0, marginTop: 2 }}>0{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="font-mono text-[11px] tracking-widest uppercase mt-8" style={{ color: 'rgba(250,250,250,0.40)' }}>
          Questions?{' '}
          <a href="mailto:hello@equitysprings.com" className="underline transition-colors hover:text-white" style={{ color: 'rgba(250,250,250,0.40)' }}>
            hello@equitysprings.com
          </a>
        </p>
      </div>
    </main>
  )
}
