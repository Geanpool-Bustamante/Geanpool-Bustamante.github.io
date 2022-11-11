const playSound = function() {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
  <audio autoplay loop>
    <source src="audio.mp3">
  </audio>
`;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);

/**************/
window.addEventListener("load", function() {
    document.getElementById("play").addEventListener("click", playSound);
    document.getElementById("stop").addEventListener("click", pausar);
});



function pausar() {
    let audio = document.getElementsByTagName("audio");

    if (audio.length > 0) {
        audio[0].parentNode.removeChild(audio[0]);
        document.getElementById("play").addEventListener("click", playSound);
    } else {
        document.getElementById("play").removeEventListener("click", playSound);
    }

}