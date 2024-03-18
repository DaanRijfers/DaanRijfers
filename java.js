setInterval(displayClock, 500);
function displayClock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hrs > 24) {
        hrs = hrs - 24;
    }

    if (hrs == 0) {
        hrs = 24;
    }

    if(hrs < 10) {
        hrs = '0' + hrs;
    }

    if(min < 10) {
        min = '0' + min;
    }

    if(sec < 10) {
        sec = '0' + sec;
    }

    document.getElementById('clock').innerHTML = hrs + ':' + min + ":" + sec;
}



const text = document.querySelector(".item1");

const textContents = [
    { content: "Web Development", delay: 4000 },
    { content: "Project Web Development & Design", delay: 4000 },
    { content: "Database Engineering", delay: 4000 },
    { content: "Project Database Application Management", delay: 4000 },
    { content: "Object Georienteerd Programmeren 1", delay: 4000 },
    { content: "Project Battle Bot", delay: 4000 }
];

const textLoad = () => {
    let currentIndex = 0;
    const updateText = () => {
        text.textContent = textContents[currentIndex].content;
        currentIndex = (currentIndex + 1) % textContents.length;
        setTimeout(updateText, textContents[currentIndex].delay);
    };
    updateText();
};

textLoad();


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
