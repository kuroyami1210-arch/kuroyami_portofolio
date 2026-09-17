// Helper scroll agar klik navbar selalu mendarat "pas":
// - section biasa -> atas section tepat di bawah header (tinggi header
//   diukur langsung, bukan angka hardcode, agar pas di HP & laptop)
// - contact -> konten diposisikan tepat di tengah viewport

export function getHeaderHeight() {
  const header = document.querySelector('header')
  return header ? header.offsetHeight : 70
}

export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  if (id === 'contact') {
    // Section kontak tingginya minimal 1 layar dan isinya flex-centered,
    // jadi tengah section = tengah konten. Sejajarkan dengan tengah layar.
    const rect = target.getBoundingClientRect()
    const targetTop = rect.top + window.scrollY
    const y = targetTop + rect.height / 2 - window.innerHeight / 2
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: Math.min(Math.max(y, 0), Math.max(max, 0)), behavior: 'smooth' })
    return
  }

  const y = target.offsetTop - getHeaderHeight()
  window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
}
