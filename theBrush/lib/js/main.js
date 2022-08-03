function onClick() {
    console.log("clicked");
    document.getElementById("rengar").src = "assets/rengar.png";
    alert("You've been deleted!");

}

const buttonElement = document.querySelector('div');
buttonElement.addEventListener('click', onClick);