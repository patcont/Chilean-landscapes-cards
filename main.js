const cards = [...document.querySelectorAll('.card')]

function open(card) {
  cards.forEach((c) => {
    const active = c === card
    c.classList.toggle('is-active', active)
    c.setAttribute('aria-expanded', String(active))
  })
}

cards.forEach((card, i) => {
  card.addEventListener('click', () => open(card))
  // Arrow keys move between cards
  card.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = cards[(i + step + cards.length) % cards.length]
    next.focus()
    open(next)
  })
})
