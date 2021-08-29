const data = [
    {
        src: 'assets/images/1. Черный кот с рыбкой.jpg',
        alt: 'Slide',
        header: 'Odio earum dolor',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum deleniti quae accusamus quasi quas nobis, ratione fugiat. Eaque atque odit eum voluptate consequatur sit quas explicabo ratione ullam fuga.'
    },
    {
        src: 'assets/images/2. Хаски.jpg',
        alt: 'Slide',
        header: 'Lorem ipsum dolor sit',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum deleniti quae'
    },
    {
        src: 'assets/images/3. Леопард.jpg" alt="Slide',
        alt: 'Slide',
        header: 'Eaque atque odit eum voluptate',
        text: 'Odio earum deleniti quae accusamus quasi quas nobis, ratione fugiat. Eaque atque odit eum voluptate consequatur sit quas explicabo ratione ullam fuga.'
    },
    {
        src: 'assets/images/4. Кот с наушниками.jpg" alt="Slide"" alt="Slide',
        alt: 'Slide',
        header: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum deleniti quae'
    }
]
const slider = document.querySelector('.slider')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const createSlide = () => {
    data.forEach((slide) => {
        slider.insertAdjacentHTML('afterbegin', `
        <div class="slide">
        <img src="${slide.src}" alt="${slide.alt}">
        <div class="info">
            <h2>${slide.header}</h2>
            <p>${slide.text}</p>
        </div>
    </div>
        `)
    })
    document.querySelector('.slide').classList.add('active')
}

const createNavigationDots = () => {
    const nav = document.querySelector('.navigation-visibility')
    data.forEach(() => {
        nav.insertAdjacentHTML('afterbegin', '<div class="slide-icon"></div>')
    })
    document.querySelector('.slide-icon').classList.add('active')

}

createSlide()
createNavigationDots()

const slides = document.querySelectorAll('.slide')
const slideIcons = document.querySelectorAll('.slide-icon')
const numberOfSlides = slides.length
let slideNumber = 0

const showNextSLide = () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slideIcons.forEach(slideIcons => slideIcons.classList.remove('active'))

    slideNumber++

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0
    }

    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')
}
nextBtn.addEventListener('click', () => {
    showNextSLide()
})

prevBtn.addEventListener('click', () => {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slideIcons.forEach(slideIcons => {
        slideIcons.classList.remove('active')
    })

    slideNumber--

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1
    }

    slides[slideNumber].classList.add('active')
    slideIcons[slideNumber].classList.add('active')
})

let playSlider

const repeater = () => {
    playSlider = setInterval(function () {
        showNextSLide()
    }, 2000)
}
repeater()

slider.addEventListener('mouseover', () => {
    clearInterval(playSlider)
})

slider.addEventListener('mouseleave', () => {
    repeater()
})

