# Paisajes de Chile — expanding cards

Interactive cards with landscapes from my country, Chile: click (or use the arrow keys) and the card expands.
One of my first HTML/CSS/JS exercises (2022), refreshed in 2026.

**Live demo:** https://patcont.github.io/Chilean-landscapes-cards

## Features

- Smooth flex-grow animation, pure CSS + ~20 lines of vanilla JS
- Accessible: real `<button>`s, `aria-expanded`, keyboard navigation with arrow keys, visible focus
- Responsive: horizontal on desktop, vertical stack on phones
- Respects *prefers-reduced-motion*
- Freely licensed photos from Wikimedia Commons, credited on the page

## Run it

No build step: open `index.html` in a browser, or serve the folder (`npx serve .`).

## 2026 refresh

The original version hot-linked photos from news and travel sites (some already broken or copyrighted)
and hid two cards on mobile. It now uses Creative Commons photos with credits, works on every screen size
and with the keyboard. The original code is in the git history.
