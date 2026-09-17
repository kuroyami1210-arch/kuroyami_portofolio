export default function Contact({ t }) {
  return (
    <section id="contact" className="reveal-section flex min-h-[100svh] items-center justify-center border-t border-white/5 bg-[#151515] px-6 py-[120px] text-center lg:px-[60px] max-lg:py-20">
      <div className="reveal-zoom mx-auto w-full max-w-[700px]" data-delay="100">
        <span className="mb-2 block text-[0.8rem] font-extrabold tracking-[2px] text-accent">
          {t.eyebrow}
        </span>
        <h3 className="mx-auto mb-4 max-w-full break-words font-display text-balance text-[clamp(2.2rem,4.5vw,3.5rem)] font-black max-lg:text-[clamp(1.35rem,6vw,1.9rem)]">
          {t.title}
        </h3>
        <p className="mb-9 text-[0.95rem] leading-[1.7] text-[#999]">
          {t.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${t.email}`}
            className="rounded bg-accent px-7 py-3 text-[0.85rem] font-bold tracking-[0.8px] text-white transition-colors hover:bg-[#e05300] max-lg:w-full"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
