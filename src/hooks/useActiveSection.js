import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] || 'hero')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return

    // Band tipis di tengah-atas viewport: hanya section yang melewati
    // garis ini yang jadi aktif. Ini memperbaiki bug "nyangkut di Experience"
    // karena threshold 0.35 pada section setinggi Projects (4 kartu besar)
    // butuh 35% tingginya terlihat dulu sebelum aktif, sementara
    // Experience masih intersecting -> highlight tidak pindah-pindah.
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => obs.observe(s))

    // Fallback: mentok bawah halaman -> paksa Contact aktif,
    // karena garis band bisa lewat di bawah semua section.
    const onScrollEnd = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      if (nearBottom && ids.includes('contact')) setActive('contact')
    }
    window.addEventListener('scroll', onScrollEnd, { passive: true })

    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScrollEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
