alert(self.navigator.appVersion);
function start() {
    var puslapis = document.documentElement;

    if (puslapis.requestFullscreen) {
        puslapis.requestFullscreen();
    } else if (puslapis.webkitRequestFullscreen) { /* Safari */
        puslapis.webkitRequestFullscreen();
    } else if (puslapis.msRequestFullscreen) { /* IE11 */
        puslapis.msRequestFullscreen();
    }

    document.getElementById("myvideo").play();

    document.getElementById("pradeti").innerHTML = '<b>valdymo skydas</b><br><i>"filmo-paleidimas":</i><br>pradedamas atgalinis skaičiavimas (15 min)...<br>įjungiamas pilnaekranis režimas... <br> slepiamas žymeklis...<br><b>Created by Matas</b>';
    document.documentElement.style.cursor = "none";

    setTimeout(() => {
        document.getElementById("myvideo").pause();
    }, 1);
    setTimeout(() => {
        document.getElementById("pradeti").style.display = "none";
    }, 3000);
    setTimeout(() => {
        document.getElementById("h11").style.marginTop = "-100%";
        document.getElementById("load").style.top = "-100%";
        document.getElementById("loadingTrailer").style.top = "0";
    }, 902000);
    setTimeout(() => {
        document.getElementById("h11").style.display = "none";
        document.getElementById("h12").style.display = "none";
        document.getElementById("h13").style.display = "none";
        document.getElementById("load").style.display = "none";
    }, 903000);
    setTimeout(() => {
        document.getElementById("loadingTrailer").style.top = "-100%";
        document.getElementById("trailerBg").style.top = "0";
        document.getElementById("myvideo").play();
    }, 908000);

    const startingMinutes = 15;
    let time = startingMinutes * 60; //minutes * 60 seconds
    let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

    function updateCountdown() {
        const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds; 
        const countdownElement = document.getElementById("countdown"); 
        countdownElement.innerHTML = `${minutes}:${seconds}`;

        time--;

        if (time < 0) { //stop the setInterval when time = 0 for avoid negative time
            clearInterval(refreshIntervalId);
        }
    }
}