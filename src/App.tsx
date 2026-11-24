import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, HelpCircle, Menu, MoveUpRight, ShieldCheck, Sparkles, X } from "lucide-react";
import { CountUp } from "./components/CountUp";
import { LightBeamButton } from "./components/LightBeamButton";
import "./app.css";

const metrics = [
  { value: 2.8, prefix: "$", suffix: "B", decimals: 1, label: "Assets tracked", detail: "Across a connected portfolio", trend: "+12.8%" },
  { value: 18.6, suffix: "%", decimals: 1, label: "Annualized growth", detail: "Measured across the platform", trend: "+3.2 pts" },
  { value: 97.4, suffix: "%", decimals: 1, label: "Client retention", detail: "Long-term partner relationships", trend: "+1.6%" },
  { value: 42, suffix: "", decimals: 0, label: "Markets covered", detail: "Signals in one clear view", trend: "+8 this year" },
];

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>;
}

function MiniChart() {
  return (
    <div className="chart-wrap" aria-label="Illustrative upward trend chart">
      <div className="chart-y-labels"><span>100</span><span>75</span><span>50</span><span>25</span></div>
      <div className="chart-main">
        <div className="chart-grid"><i /><i /><i /><i /></div>
        <svg className="chart-line" viewBox="0 0 620 210" preserveAspectRatio="none" role="img" aria-label="Portfolio signal trending upward">
          <defs>
            <linearGradient id="lineGlow" x1="0" x2="1">
              <stop offset="0%" stopColor="#9a87f5" />
              <stop offset="100%" stopColor="#67d7e8" />
            </linearGradient>
            <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8c7cf0" stopOpacity=".23" />
              <stop offset="100%" stopColor="#8c7cf0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,173 C36,164 48,154 82,159 S130,144 158,151 S205,128 235,139 S282,118 310,127 S352,104 382,115 S431,92 454,99 S492,76 519,84 S560,58 586,68 S606,48 620,38 L620,210 L0,210 Z" fill="url(#areaGlow)" />
          <path d="M0,173 C36,164 48,154 82,159 S130,144 158,151 S205,128 235,139 S282,118 310,127 S352,104 382,115 S431,92 454,99 S492,76 519,84 S560,58 586,68 S606,48 620,38" fill="none" stroke="url(#lineGlow)" strokeWidth="2.6" vectorEffect="non-scaling-stroke" />
          <circle cx="520" cy="84" r="5" fill="#9e94f7" stroke="#d8d2ff" strokeWidth="2" />
          <circle cx="520" cy="84" r="12" fill="#9e94f7" opacity=".13" />
        </svg>
        <div className="chart-x-labels"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Northstar home"><BrandMark /><span>NORTHSTAR</span></a>
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Main navigation">
          <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Insights</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="#contact">Sign in</a>
          <LightBeamButton className="header-cta" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get a briefing <ArrowUpRight size={15} />
          </LightBeamButton>
        </div>
        <button className="mobile-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={19} /> : <Menu size={20} />}</button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />ANALYTICS FOR WHAT’S NEXT</div>
          <h1>Make the next move <em>feel obvious.</em></h1>
          <p className="hero-lede">See the signal beneath the noise. Northstar brings your performance, momentum, and opportunities into one clear view.</p>
          <div className="hero-actions">
            <LightBeamButton onClick={() => document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" })}>
              Explore the numbers <ArrowRight size={16} />
            </LightBeamButton>
            <a className="text-link" href="#platform">How it works <MoveUpRight size={15} /></a>
          </div>
          <div className="hero-footnote"><span className="tiny-status" /> Trusted by teams making long-view decisions</div>
        </div>

        <div className="hero-visual" id="platform">
          <div className="orbit orbit--outer" /><div className="orbit orbit--inner" />
          <div className="signal-card">
            <div className="signal-card-top">
              <div><span className="card-kicker">PORTFOLIO SIGNAL</span><h2>Performance overview</h2></div>
              <button className="icon-button" aria-label="About this chart"><HelpCircle size={16} /></button>
            </div>
            <div className="signal-value-row"><div><span className="signal-value">84.6</span><span className="signal-unit"> pts</span></div><span className="positive-pill"><ArrowUpRight size={13} /> 12.4%</span></div>
            <div className="signal-caption">Momentum index <span>vs. previous period</span></div>
            <MiniChart />
            <div className="signal-card-bottom"><span><i className="legend-dot" /> Portfolio index</span><span>Updated 4 min ago</span></div>
          </div>
          <div className="floating-note"><span className="floating-icon"><Sparkles size={15} /></span><div><strong>Signal is strengthening</strong><small>Across 8 key indicators</small></div><ArrowUpRight size={15} className="float-arrow" /></div>
          <div className="hero-index"><span>01</span><i /><span>04</span></div>
        </div>
        <a className="scroll-cue" href="#results"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
      </section>

      <section className="metrics-section" id="results">
        <div className="shell">
          <div className="section-intro">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />A CLEARER PICTURE</div>
              <h2>Performance is more than <em>a headline.</em></h2>
            </div>
            <p>Bring every meaningful signal into focus. Then make decisions with the confidence to move forward.</p>
          </div>
          <div className="metric-grid">
            {metrics.map((metric, index) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-card-top"><span className="metric-index">0{index + 1}</span><span className="metric-trend"><ArrowUpRight size={13} /> {metric.trend}</span></div>
                <CountUp to={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} label={metric.label} className="metric-number" />
                <div className="metric-label">{metric.label}</div>
                <p>{metric.detail}</p>
                <div className={`sparkline sparkline--${index + 1}`} aria-hidden="true"><i /></div>
              </article>
            ))}
          </div>
          <div className="metrics-note"><span className="note-mark"><BarChart3 size={15} /></span><span>Illustrative platform figures shown for this design concept.</span><span className="note-rule" /></div>
        </div>
      </section>

      <section className="approach-section shell" id="approach">
        <div className="approach-topline"><div className="eyebrow"><span className="eyebrow-line" />BUILT FOR THE LONG VIEW</div><span className="section-count">02 / 03</span></div>
        <div className="approach-grid">
          <h2>Less dashboard.<br /><em>More direction.</em></h2>
          <div className="approach-copy"><p>Complexity is inevitable. Confusion is optional. Northstar connects the details to the decisions that matter, so your team can spend less time searching and more time moving.</p><a className="text-link" href="#contact">See our approach <ArrowRight size={15} /></a></div>
        </div>
        <div className="value-grid">
          <article className="value-card"><span className="value-icon"><BarChart3 size={18} /></span><span className="value-number">01</span><h3>See the whole picture</h3><p>One connected view for performance, risk, and momentum.</p></article>
          <article className="value-card"><span className="value-icon"><Sparkles size={18} /></span><span className="value-number">02</span><h3>Find the meaningful signal</h3><p>Bring changes that matter to the surface, at the right time.</p></article>
          <article className="value-card"><span className="value-icon"><ShieldCheck size={18} /></span><span className="value-number">03</span><h3>Move with confidence</h3><p>Make the next decision with context you can stand behind.</p></article>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div className="contact-panel">
          <div className="contact-orb" />
          <div className="eyebrow"><span className="eyebrow-line" />YOUR NEXT CHAPTER, IN FOCUS</div>
          <h2>Start with a clearer<br /><em>point of view.</em></h2>
          <p>See what your data can tell you when every signal has a place.</p>
          <LightBeamButton gradientColors={["#b3a0ff", "#69deec", "#b3a0ff"]} onClick={() => window.location.href = "mailto:hello@northstar.example?subject=Northstar%20briefing"}>
            Request a private briefing <ArrowRight size={16} />
          </LightBeamButton>
          <span className="contact-note">A thoughtful conversation. No obligation.</span>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="brand" href="#top"><BrandMark /><span>NORTHSTAR</span></a>
        <span className="footer-copy">Clarity for what’s next.</span>
        <span className="footer-legal">© 2026 Northstar Intelligence</span>
      </footer>
    </main>
  );
}

export default App;
