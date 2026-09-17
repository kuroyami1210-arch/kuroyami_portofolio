import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll'

function LangSwitcher({ lang, mobile = false }) {
  const base = mobile
    ? 'flex w-full items-center rounded-xl border border-white/10 bg-white/[0.04] p-1'
    : 'flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1'
  const btn = mobile
    ? 'flex-1 rounded-lg px-4 py-2.5 text-center text-[0.8rem] font-bold tracking-[1px] transition-colors'
    : 'rounded-full px-3 py-1 text-[0.72rem] font-bold tracking-[1px] transition-colors'
  return (
    <div className={base} role="group" aria-label="Language / Bahasa">
      <Link
        to="/"
        aria-current={lang === 'en' ? 'true' : undefined}
        className={`${btn} ${lang === 'en' ? 'bg-accent text-white' : 'text-muted hover:text-white'}`}
      >
        EN
      </Link>
      <Link
        to="/id"
        aria-current={lang === 'id' ? 'true' : undefined}
        className={`${btn} ${lang === 'id' ? 'bg-accent text-white' : 'text-muted hover:text-white'}`}
      >
        ID
      </Link>
    </div>
  )
}

export default function Header({ activeSection, navLinks, headerText, lang }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        if (y <= 80) {
          setVisible(true)
        } else if (y > lastY + 4) {
          // scroll ke bawah -> sembunyikan
          setVisible(false)
        } else if (y < lastY - 4) {
          // scroll ke atas -> tampilkan lagi
          setVisible(true)
        }
        lastY = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu mobile dibuka -> navbar tetap tampil
  const show = visible || open

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-white/[0.06] bg-ink/85 px-6 py-[18px] backdrop-blur-md transition-all duration-300 lg:px-[60px] lg:py-5 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <a
        href="#"
        onClick={(e) => handleNavClick(e, 'hero')}
        className="text-[1.35rem] font-bold text-white no-underline"
      >
        {headerText.brand}
      </a>

      <div className="hidden items-center gap-7 lg:flex">
        <nav className="hidden lg:block">
          <ul className="flex list-none gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative inline-block text-[0.82rem] font-semibold uppercase tracking-[0.8px] transition-colors after:absolute after:-bottom-[5px] after:left-0 after:h-[2px] after:bg-accent after:transition-all ${
                    activeSection === link.id
                      ? 'text-white after:w-full'
                      : 'text-muted after:w-0 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LangSwitcher lang={lang} />
      </div>

      <div className="flex items-center gap-3 lg:hidden">
        <div className="hidden sm:block">
          <LangSwitcher lang={lang} />
        </div>
        {/* Tombol garis 3 — hanya tampil di HP/tablet, laptop tidak terpengaruh */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? headerText.closeMenu : headerText.openMenu}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/10 active:scale-95 lg:hidden"
      >
        <span className="relative block h-[18px] w-6">
          <span
            className={`absolute left-0 top-0 h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'top-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-[8px] h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-[16px] h-[2px] w-full rounded bg-white transition-all duration-300 ${
              open ? 'top-[8px] -rotate-45' : ''
            }`}
          />
        </span>
        </button>
      </div>

      {/* Overlay — hanya di HP/tablet */}
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-x-0 top-full h-screen bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <nav
        className={`absolute inset-x-0 top-full border-white/[0.06] bg-ink transition-all duration-300 ease-out lg:hidden ${
          open ? 'border-t opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block rounded-xl px-4 py-3 text-[0.85rem] font-semibold uppercase tracking-[0.8px] transition-colors ${
                  activeSection === link.id
                    ? 'bg-accent/15 text-white'
                    : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-1 pb-1 pt-2 sm:hidden">
            <LangSwitcher lang={lang} mobile />
          </li>
        </ul>
      </nav>

    </header>
  )
}
