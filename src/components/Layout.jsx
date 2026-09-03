import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function BrandMark() {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Tesol — The Event Solutions home">
      <span className="brand-logo-crop" aria-hidden="true">
        <img src="/brand-logo.png" alt="" />
      </span>
    </Link>
  )
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Privacy', to: '/privacy' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-wine/8 bg-cream/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `relative py-2 text-sm transition-colors ${isActive ? 'text-wine' : 'text-ink/55 hover:text-wine'}`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-berry" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/#inquire"
          className="hidden items-center gap-2 rounded-full bg-berry px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wine md:inline-flex"
        >
          Submit an Enquiry <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-full border border-wine/15 text-wine md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-wine/10 bg-cream md:hidden"
          >
            <div className="page-shell flex flex-col py-5">
              {navItems.map((item, index) => (
                <motion.div key={item.to} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.05 }}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `flex items-center justify-between border-b border-wine/10 py-4 font-display text-2xl ${isActive ? 'text-berry' : 'text-ink'}`}
                  >
                    {item.label} <ArrowUpRight size={18} />
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/#inquire" onClick={() => setMenuOpen(false)} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-berry px-5 py-4 text-sm font-semibold text-white transition hover:bg-wine">
                Submit an Enquiry <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-wine/15 bg-white text-ink">
      <div className="page-shell grid items-start gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-20">
        <div>
          <BrandMark />
          <p className="mt-6 max-w-sm text-sm leading-7 text-ink/65">
            Digital solutions that bring design and technology together for seamless, memorable event experiences.
          </p>
        </div>

        <div>
          <p className="eyebrow text-ink/45">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-xs text-ink/65">
            <Link className="transition hover:text-ink" to="/">Home</Link>
            <Link className="transition hover:text-ink" to="/services">Services</Link>
            <Link className="transition hover:text-ink" to="/privacy">Privacy policy</Link>
          </div>
        </div>

        <div>
          <p className="eyebrow text-ink/45">Say hello</p>
          <a className="mt-5 block font-display text-lg text-ink transition hover:text-berry" href="mailto:hello@tesolhq.com">
            hello@tesolhq.com
          </a>
          <p className="mt-3 text-xs leading-5 text-ink/55">Lagos, Nigeria · Available worldwide</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="https://www.instagram.com/tesolhq?igsi=dnQyOHlmNXZzbDk5&utm_source=qr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-ink/65 transition hover:text-ink">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>
              Instagram
            </a>
            <a href="https://x.com/tesolhq?s=21" target="_blank" rel="noreferrer" aria-label="TESOL on Twitter" className="inline-flex items-center gap-2 text-xs text-ink/65 transition hover:text-ink">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/15">
        <div className="page-shell flex flex-col gap-3 py-6 text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 Tesol — The Event Solutions. All rights reserved.</span>
          <span>Building digital solutions for every event.</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }), 120)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
