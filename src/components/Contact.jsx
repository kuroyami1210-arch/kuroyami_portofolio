import { SITE } from '../data/portfolio'
import { scrollToSection } from '../utils/scroll'

const socialBtn =
  'flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#c9c9c9] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent'

export default function Contact({ t, navLinks = [] }) {
  const year = new Date().getFullYear()
  const email = t.email || SITE.email
  const socials = SITE.socials || {}

  // Footer nav seperti referensi: Home, About, Projects, Contact saja
  const wanted = ['hero', 'about', 'projects', 'contact']
  let footerNav = navLinks.filter((l) => wanted.includes(l.id))
  if (footerNav.length === 0) {
    footerNav = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ]
  }

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="contact" className="reveal-section flex min-h-[100svh] flex-col items-center justify-center border-t border-white/5 bg-[#151515] px-6 pb-0 pt-[120px] text-center lg:px-[60px] max-lg:pb-0 max-lg:pt-20">
      <div className="reveal-zoom mx-auto w-full max-w-[900px]" data-delay="100">
        <span className="mb-3 block text-[0.85rem] font-extrabold tracking-[2px] text-accent">
          {t.eyebrow}
        </span>
        <h4 className="mx-auto mb-5 max-w-full break-words font-display text-balance text-[clamp(2.6rem,5.2vw,4.2rem)] font-black leading-[1.05] tracking-tight max-lg:text-[clamp(1.6rem,7vw,2.3rem)]">
          {t.title}
        </h4>
        <p className="mb-9 text-[0.95rem] leading-[1.7] text-[#999]">
          {t.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="rounded bg-accent px-7 py-3 text-[0.85rem] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#e05300] max-lg:w-full"
          >
            {t.cta}
          </a>
        </div>

        {/* Sosmed */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={socials.github || '#'}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={socialBtn}
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={socials.linkedin || '#'}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={socialBtn}
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={socials.whatsapp || '#'}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={socialBtn}
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className={socialBtn}
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Mini nav seperti referensi */}
        <nav aria-label="Footer" className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {footerNav.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-[0.95rem] font-medium tracking-[0.3px] text-[#9a9a9a] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright bar seperti referensi */}
      <div className="mx-auto mt-14 w-full max-w-[880px] border-t border-white/10 pt-6 text-[0.85rem] tracking-[0.3px] text-[#8a8a8a]">
        &copy; {year} {SITE.brand}. {t.rights || 'All rights reserved.'}
      </div>
    </section>
  )
}
