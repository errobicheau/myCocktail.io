document.querySelector('#playAll').addEventListener('click', playAll)

document.querySelector('#pauseAll').addEventListener('click', pauseAll)

function playAll() {
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');

    if (audio1.paused) {
        audio1.play();
        audio1.volume = 0.1;
    } else {
        audio1.volume = 0.1;
    }

    if (audio2.paused) {
        audio2.play();
        audio2.volume = 0.3;
    } else {
        audio2.volume = 0.3;
    }
}

function pauseAll() {
    document.getElementById('audio1').volume = 0.0
    document.getElementById('audio2').volume = 0.0
}