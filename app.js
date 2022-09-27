let volume = document.getElementById("volume")
let btns = document.querySelectorAll("button")

let audios = [new Audio("./audio/sounds_sound-1.mp3"),
             new Audio("./audio/sounds_sound-2.mp3"),
             new Audio("./audio/sounds_sound-3.mp3"),
             new Audio("./audio/sounds_sound-4.mp3"),
             new Audio("./audio/sounds_sound-5.mp3"),
             new Audio("./audio/sounds_sound-6.mp3"),
             new Audio("./audio/sounds_sound-7.mp3")]

volume.addEventListener("change", (e) => {
    audios.forEach((item) => {
        item.volume = volume.value/100
    })
})

document.querySelectorAll("button").forEach((item, index) => {
    item.addEventListener("click", () => {
        if(audios[index].HAVE_ENOUGH_DATA){
            audios[index].play()
        } else{
            alert("PLease Wait For the audios to Load !!")
        }
    })
})

document.addEventListener("keydown", (event) => {
    let keyPressed = event.key
    console.log(keyPressed)
    switch (keyPressed){
        case "a":
        case "A":
            audios[0].play()
        case "s":
        case "S":
            audios[1].play()
        case "d":
        case "D":
            audios[2].play()
        case "f":
        case "F":
            audios[3].play()
        case "j":
        case "J":
            audios[4].play()
        case "k":
        case "K":
            audios[5].play()
        case "l":
        case "L":
            audios[6].play()
    }
})