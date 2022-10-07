function checkClickEvent(item, index){
    item.addEventListener("click", () => {
        if(audios[index].HAVE_ENOUGH_DATA){
            audios[index].play()
        } else{
            alert("PLease Wait For the audios to Load !!")
        }
    })
}

function checkKey(event){
    let keyPressed = event.key
    switch (keyPressed){
        case "a":
        case "A":
            audios[0].HAVE_ENOUGH_DATA ? audios[0].play() : alert("PLease Wait For the audios to Load !!");
            zzzz
        case "s":
        case "S":
            audios[1].HAVE_ENOUGH_DATA ? audios[1].play() : alert("PLease Wait For the audios to Load !!");
            break;
        case "d":
        case "D":
            audios[2].HAVE_ENOUGH_DATA ? audios[2].play() : alert("PLease Wait For the audios to Load !!");
            break;
        case "f":
        case "F":
            audios[3].HAVE_ENOUGH_DATA ? audios[3].play() : alert("PLease Wait For the audios to Load !!");
            break;
        case "j":
        case "J":
            audios[4].HAVE_ENOUGH_DATA ? audios[4].play() : alert("PLease Wait For the audios to Load !!");
            break;
        case "k":
        case "K":
            audios[5].HAVE_ENOUGH_DATA ? audios[5].play() : alert("PLease Wait For the audios to Load !!");
            break;
        case "l":
        case "L":
            audios[6].HAVE_ENOUGH_DATA ? audios[6].play() : alert("PLease Wait For the audios to Load !!");
            break;
    }
}

function adjustVolume(){
    audios.forEach((item) => {
        item.volume = volume.value/100
    })
}
