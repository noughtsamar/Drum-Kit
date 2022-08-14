
for(var i=0;i<7;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click", function (){
        var buttonPressed = this.innerHTML;
        switch (buttonPressed) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;    
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;           
            case "j":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;   
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;   
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;   
            default:
                break;
        }
    buttonAnimation(buttonPressed);
    });
}

document.addEventListener("keypress", function(event){
    var keyPressed = event.key;
    switch (keyPressed) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;    
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;           
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;   
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;   
        default:
            break;
    }
    buttonAnimation(keyPressed);
})

function buttonAnimation(myKey){
    var activeKey = document.querySelector("."+myKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);

}