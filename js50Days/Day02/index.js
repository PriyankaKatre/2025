document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const circles = document.querySelectorAll('.circle');
    const progress = document.querySelector('.progress-bar')

    let currentActiveIndex = 1;
    next.addEventListener('click', () => {
        currentActiveIndex++;
        if (currentActiveIndex > circles.length) {
            currentActiveIndex = circles.length
        }
        activeCircle(currentActiveIndex);
    })
    prev.addEventListener('click', () => {
      currentActiveIndex--;
      if (currentActiveIndex < 1) {
        currentActiveIndex = 1;
      }
      activeCircle(currentActiveIndex);
    });

    const activeCircle = (currentActiveIndex) => {
      circles.forEach((circle, idx) => {
        if (idx < currentActiveIndex) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });

        const actives = document.querySelectorAll('.active')
        console.log('actives', actives.length)
        console.log('circles.length', circles.length);
        console.log(
          'actives.length/circles.length',
          ((actives.length - 1 )/ (circles.length -1 )) * 100 + '%'
        );
        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

        if (currentActiveIndex === 1) {
            prev.disabled = true;
        } else if (currentActiveIndex === circles.length) {
            next.disabled = true
        } else {
            prev.disabled = false;
            next.disabled = false;

        }
    };
})
