function addElement(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

let calculate = () => {
    let res = "E";

    let operation = document.getElementById("screen").value;
    
    console.log("Antes");
    try {
        res = eval(operation);
        if (!isNaN(res)) { // Si la operación se realiza correctamente
            playSound(); // Reproducir el sonido solo si no hay errores
        }
    } catch (e){
        console.log(e);
        res = "Error";
    }
    console.log("Despues");

    document.getElementById("screen").value = res;
}

function playSound() {
    const audio = document.getElementById('sound');
    audio.play();
}
