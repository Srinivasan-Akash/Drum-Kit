let volume = document.getElementById("volume")

let audios = []

for(let i = 0; i<7; i++){
    audios.push(new Audio(`./audio/sounds_sound-${i+1}.mp3`))
}

volume.addEventListener("change", (e) => {(adjustVolume())})
document.querySelectorAll("button").forEach((item, index) => {checkClickEvent(item, index)})
document.addEventListener("keydown", (event) => {checkKey(event)})
