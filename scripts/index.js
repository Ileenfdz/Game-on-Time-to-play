let character = document.getElementById("character");
let block = document.getElementById("block");
let randomCharacter = Math.floor(Math.random() * 10) + 1;

if (randomCharacter <= 5) {
    character.style.backgroundColor = "rgb(221, 33, 33)";
    block.style.backgroundColor = "rgb(161, 115, 30)";
}
if (randomCharacter > 5) {
    character.style.backgroundColor = "rgb(37, 89, 201)";
    block.style.backgroundColor = "rgb(63, 139, 240)";
}

window.onclick = function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 450)
}

setInterval(function () {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let randomEnemy = Math.floor(Math.random() * 3) + 1;

    if (randomCharacter > 5) {
        if (characterTop < 130) {
            character.style.backgroundColor = "rgb(87, 163, 250)";
        } else {
            character.style.backgroundColor = "rgb(43, 49, 217)";
        }

        if(randomEnemy == 1){
            block.style.backgroundColor = "rgb(rgb(22, 172, 72))"
        }else if(randomEnemy == 2){
            block.style.backgroundColor = "rgb(rgb(161, 115, 30))"
        }else if(randomEnemy == 3){
            block.style.backgroundColor = "rgb(rgb(235, 229, 151))"
        }

    } else if (randomCharacter <= 5) {

        if (characterTop < 130) {
            character.style.backgroundColor = "rgb(247, 47, 47)";
        } else {
            character.style.backgroundColor = "rgb(156, 11, 11)";
        }

        if(randomEnemy == 1){
            block.style.backgroundColor = "rgb(rgb(76, 228, 127))"
        }else if(randomEnemy == 2){
            block.style.backgroundColor = "rgb(rgb(63, 139, 240))"
        }else if(randomEnemy == 3){
            block.style.backgroundColor = "rgb(rgb(233, 54, 54))"
        }

    }

    // if(blockLeft > )

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        showAlert("Sorry, you lost");
    }

}, 10);


function showAlert(message) {
    alert(message);
    window.location.reload();
}

//Ideas
//-Dependiendo del tiempo, en el alert le saldrá una puntuación (por cada sec + xnum)

//-En el modo "claro", Mario con, Goomba(marrón), Koopa(verde) y Boo (blanco/claro)
//-En el modo "oscuro", Ash con, piplup(azul), turtwig(verde) y chimchar(rojo)

//-Hacer diferentes enemigos (primero saldrán solo diferentes colores)
//-Cuando esto esté, que aparezcan de forma randomCharacter

//  rgb(37, 89, 201) Ash
//  rgb(25, 66, 153) Ash

//  rgb(221, 33, 33) Mario
//  rgb(141, 23, 23) Mario


//  rgb(22, 172, 72) Koopa
//  rgb(161, 115, 30) Goomba
//  rgb(235, 229, 151) Boo

//  rgb(76, 228, 127) Turtwig
//  rgb(63, 139, 240) Piplup
//  rgb(233, 54, 54) Chimchar