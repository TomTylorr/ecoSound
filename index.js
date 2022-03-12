const btn = document.querySelector('.play'),
      arrAudio = document.querySelectorAll('audio'),
      audio = new Audio(),
      navItems = document.querySelector('.nav-items'),
      mainImg = document.querySelector('.main'),
      navLinks = document.querySelectorAll('.nav__link')

let   isPlay = false; //  такая переменная называется Флагом, у него 2 состояния - true,false и начинается с is


function changeSound(e) {
    if (e.target.classList.contains('nav__link')) {
        changeClassActive("active", e);
        let datasetSound = e.target.dataset.sound;
        audio.src = `assets/audio/${datasetSound}.mp3`;
        mainImg.style.backgroundImage = `url(./assets/img/${datasetSound}.jpg)`;
    }
}

navItems.addEventListener('click', (e) => {
    changeSound(e)
})


function playAudio() {
    if (!isPlay) {
        if (!audio.src) {
            audio.src = `assets/audio/solovey.mp3`;
        }
        audio.play();
        isPlay = true;
        btn.classList.add("pause");
    } else {
        isPlay = false;
        audio.pause();
        btn.classList.remove("pause");
    }
    audio.currentTime = 0;
    
}


btn.addEventListener('click', playAudio);


function changeClassActive(className, e) {
    navLinks.forEach(link => {
        link.classList.remove(className)
    })
    e.target.classList.add(className)
}

const showConsole = ['Вёрстка +10', '\n' , 
                    'При кликах по интерактивным элементам меняется изображение +10', '\n', 
                    'При кликах по интерактивным элементам меняется звук +10', '\n',
                    'Активный в данный момент интерактивный элемент выделяется стилем +10', '\n',
                    'Кнопка Play/Pause +20', '\n',
                    'Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10', '\n',
                    ].join("");
console.log(showConsole)
  

