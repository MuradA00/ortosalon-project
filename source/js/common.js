function scrollEvents() {
  const sections = document.querySelectorAll('.section');
  const sectionLinks = document.querySelectorAll('.steps-numbers__link'),
  menu = document.querySelector('.steps-numbers');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionLinks.forEach(link => {
          const linkOrder = link.getAttribute('href').replace('#', '');
          if (linkOrder === entry.target.id) {
            link.classList.add('--active-number')
          } else {
            link.classList.remove('--active-number')
          }
        })
      }
    })
  }, {
    threshold: 0.8
  })

  sections.forEach(section => {
    observer.observe(section)
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('.steps-numbers__link')) {
      e.preventDefault();
      const sectionId = e.target.getAttribute('href').replace('#', '')
      window.scrollTo({
        top: document.getElementById(sectionId).offsetTop,
        smooth: 'smooth'
      })
    }
  })
}

scrollEvents();
