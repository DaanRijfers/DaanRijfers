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

    document.getElementById('clock').innerHTML = hrs + ':' + min + ":" + sec;
}



const text = document.querySelector(".item1");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Periode 1";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Web Development";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Project Web Development & Design";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Periode 2";
    }, 16000); // Verhoogd naar 18000ms voor een soepelere overgang
    setTimeout(() => {
        text.textContent = "Database Engineering";
    }, 20000); // Verhoogd naar 22000ms voor een soepelere overgang
    setTimeout(() => {
        text.textContent = "Project Database Application Management";
    }, 24000); // Verhoogd naar 26000ms voor een soepelere overgang
    setTimeout(() => {
        text.textContent = "Periode 3";
    }, 28000); // Verhoogd naar 32000ms voor een soepelere overgang
    setTimeout(() => {
        text.textContent = "Object Georienteerd Programmeren 1";
    }, 32000); // Verhoogd naar 36000ms voor een soepelere overgang
    setTimeout(() => {
        text.textContent = "Project Battle Bot";
    }, 36000); // Verhoogd naar 40000ms voor een soepelere overgang
}

textLoad();