document.getElementById("mainTitle").innerText = "Point and Click adventure game"


//gameWindow reference
const gameWindow = document.getElementById("gameWindow");

//Main Character reference
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

//foreground items
const door1 = document.getElementById("door1")
const door2 = document.getElementById("door2")

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


    switch (e.target.id) {
        case "door1":
            mainCharacter.style.backgroundColor = "#FFFF00"
            door1.style.opacity = 0.2;
            break;

        case "door2":
            mainCharacter.style.backgroundColor = "#FFFF00"
            door2.style.opacity = 0.2;
            break;

        default:
            mainCharacter.style.backgroundColor = "rgb(53, 188, 195)";
            door1.style.opacity = 0.5;
            door2.style.opacity = 0.5;
            //explode
            break;
    }
}