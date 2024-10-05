let navs = document.querySelectorAll('.slider__nav-item');
const slide = document.querySelector('.first-slide'),
      parent = slide.parentElement.parentElement;

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", (e) => {
        const target = e.target,
              pos = target.dataset.pos,
              slides = document.querySelectorAll('.slide'),
              activeClass = 'slider__nav-item--active';

        slides.forEach((item) => {
            navs.forEach((nav) => {
                if (+nav.dataset.pos == pos) {
                    nav.classList.add(activeClass)
                } else {
                    nav.classList.remove(activeClass)
                }
            })
        })

        const baseWidth = parent.clientWidth;

        slides.forEach((item) => {
            item.style.opacity = 0.25;
        })
        setTimeout(() => {
            slides.forEach((item) => {
                item.style.opacity = 1;
            })
        }, 150)
        slide.style.marginLeft = `${pos === 1 ? 0 : -(baseWidth * (pos - 1))}px`;
    });
}

const checkbox = document.querySelector('.mailing__checkbox-label input'),
      label = document.querySelector('.mailing__checkbox-label'),
      fakeCheckbox = document.querySelector('.mailing__checkbox'),
      activeCheckboxClass = 'mailing__checkbox--active';

checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        fakeCheckbox.classList.add(activeCheckboxClass);
    } else fakeCheckbox.classList.remove(activeCheckboxClass);
})


let deg = 0;
function moveCircle() {
    circle.style.transform = `rotate(${deg += 90}deg)`
}

const files = document.querySelector('#files'),
      circle = document.querySelector('.become-author__input-img');
let interval;

files.addEventListener('click', () => {
    interval = setInterval(moveCircle, 1200);

    document.body.onfocus = () => {
        clearInterval(interval);
    }
})

files.addEventListener('change', (e) => {
    clearInterval(interval);
    
    let block = document.querySelector('.become-author__input-file');
    block.classList.add('become-author__input-file--active');
})