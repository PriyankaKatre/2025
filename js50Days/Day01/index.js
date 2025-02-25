const panels = document.getElementsByClassName('panel');

Array.from(panels).forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClass(panel)
    panel.classList.add('active')
  })
})

const removeActiveClass = () => {
  Array.from(panels).forEach(panel => {
    panel.classList.remove('active');
  })
}
