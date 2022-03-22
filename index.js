let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 400)
}

let checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(characterTop < 130){
        character.style.backgroundColor = "rgb(226, 43, 195)";
    }else{
        character.style.backgroundColor = "	#B0E0E6";
    }

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Sorry, you lost");
        window.location.reload();
    }

}, 10)