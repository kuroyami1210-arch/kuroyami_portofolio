import { useRef } from 'react'
import { ABOUT_PHOTO } from '../data/portfolio'
import { scrollToSection } from '../utils/scroll'

const ABOUT_RADIUS = 145

export default function About({ t }) {
  const colorRef = useRef(null)

  // Sama seperti foto hero: grayscale + spotlight warna mengikuti pointer.
  // Foto about di-scale (scale-[150%]), sedangkan mask radial dihitung
  // di koordinat lokal img (sebelum transform). getBoundingClientRect()
  // mengembalikan box SESUDAH scale, jadi delta layar harus dibagi
  // skala agar titik tengah spotlight tepat di posisi mouse.
  const updateSpotlight = (clientX, clientY) => {
    const colorPhoto = colorRef.current
    if (!colorPhoto) return
    const rect = colorPhoto.getBoundingClientRect()
    const rawScale = rect.width / (colorPhoto.offsetWidth || rect.width)
    const scale = rawScale && Number.isFinite(rawScale) ? rawScale : 1
    colorPhoto.style.setProperty('--x', `${(clientX - rect.left) / scale}px`)
    colorPhoto.style.setProperty('--y', `${(clientY - rect.top) / scale}px`)
    colorPhoto.style.setProperty('--radius', `${ABOUT_RADIUS}px`)
  }

  const handlePointerMove = (e) => {
    updateSpotlight(e.clientX, e.clientY)
  }

  const handleTouchMove = (e) => {
    const touch = e.touches?.[0]
    if (touch) updateSpotlight(touch.clientX, touch.clientY)
  }

  const handlePointerLeave = () => {
    colorRef.current?.style.setProperty('--radius', '0px')
  }

  const scrollToSkills = (e) => {
    e.preventDefault()
    scrollToSection('skills')
  }

  return (
    <section id="about" className="reveal-section relative z-[60] overflow-visible border-b border-white/5 bg-coal px-6 pb-[110px] pt-40 lg:px-[60px] max-lg:px-5 max-lg:pb-16 max-lg:pt-28">
      <div className="grid mx-auto max-w-[1240px] items-center gap-11 lg:grid-cols-[1.15fr_1fr] lg:gap-[70px] max-lg:gap-10">
        <div className="reveal-left max-lg:text-center" data-delay="100">
          <span className="mb-2 inline-block text-[1.15rem] font-extrabold tracking-[2px] text-[#6a6a6a] max-lg:text-[1rem]">
            {t.eyebrow}
          </span>
          <h2 className="mb-6 font-display text-[clamp(2.8rem,5vw,4.4rem)] font-black leading-[1.05] tracking-tight max-lg:mb-5 max-lg:text-[clamp(2rem,9vw,3rem)]">
            {t.title}
          </h2>
          <p className="mb-9 max-w-[520px] text-[1.02rem] leading-[1.85] text-[#a0a0a0] max-lg:mx-auto max-lg:mb-8 max-lg:text-[0.95rem] max-lg:leading-[1.8]">
          {t.desc}
          </p>
          <div className="flex flex-wrap items-center gap-5 max-lg:justify-center">
            <a
              href="#projects"
              className="rounded bg-accent px-7 py-3 text-[0.85rem] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#e05300] max-lg:w-full max-lg:py-3.5 max-lg:text-center"
            >
              {t.cta}
            </a>
    
          </div>
        </div>

        {/* Foto polos seperti hero: tanpa bingkai browser, tanpa tilt 3D, tanpa glare */}
        <div className="reveal-right relative z-[70] flex items-center justify-center overflow-visible py-5 lg:-ml-12 max-lg:hidden" data-delay="220">
          <div
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onTouchMove={handleTouchMove}
            className="mask-fade-bottom relative z-[70] flex h-[530px] w-full max-w-[560px] cursor-crosshair items-end justify-center overflow-visible"
          >
            <img
              src={ABOUT_PHOTO}
              alt={t.grayAlt}
              className="pointer-events-none absolute bottom-0 h-full w-auto max-w-full origin-bottom scale-[150%] object-contain grayscale contrast-[1.12] brightness-[0.96]"
            />
            <img
              ref={colorRef}
              src={ABOUT_PHOTO}
              alt={t.colorAlt}
              className="photo-color pointer-events-none absolute bottom-0 h-full w-auto max-w-full origin-bottom scale-[150%] object-contain"
            />
          </div>

          <a
            href="#skills"
            aria-label={t.exploreAria}
            onClick={scrollToSkills}
            className="absolute -bottom-5 -left-5 z-[75] flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#242424] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform hover:scale-105"
          >
            <svg className="animate-spin-slow absolute h-full w-full" viewBox="0 0 100 100">
              <path id="explorePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="none" />
              <text className="fill-[#e0e0e0] text-[8px] font-bold tracking-[2px]">
                <textPath href="#explorePath" startOffset="0%">
                  {t.exploreText}
                </textPath>
              </text>
            </svg>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="white"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>

          <svg className="pointer-events-none absolute right-4 top-[30%] z-[90] overflow-visible" width="75" height="40" viewBox="0 0 70 35">
            <path d="M5 12 Q 22 0, 40 18 T 68 14" fill="none" stroke="#ff8c00" strokeWidth="3" strokeLinecap="round" />
            <path d="M5 25 Q 22 13, 40 31 T 68 27" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
