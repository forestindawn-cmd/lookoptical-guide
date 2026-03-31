function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  event.target.classList.add('active');
  document.getElementById('contentArea').scrollTop = 0;
}

function filterSearch() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  if (!q) return;
  const cards = document.querySelectorAll('.product-card');
  let found = null;
  cards.forEach(c => {
    const text = c.innerText.toLowerCase();
    if (text.includes(q)) {
      found = c;
      const section = c.closest('.section');
      if (section) {
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        section.classList.add('active');
        setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      }
    }
  });
}

function toggleFilter(btn, brand, type) {
  btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll(`[data-brand="${brand}"]`).forEach(card => {
    if (type === 'all') card.style.display = '';
    else if (type === 'available') {
      const isSoldout = card.classList.contains('soldout');
      card.style.display = isSoldout ? 'none' : '';
    }
  });
}
