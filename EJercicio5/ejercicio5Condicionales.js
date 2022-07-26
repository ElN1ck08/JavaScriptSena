

/// //Ejercicio 5: En un juego de preguntas a las que se responde “Si” o “No” gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de
// ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son: 
// 1. Colon descubrió América?
// 2. La independencia de Colombia fue en el año 1810?
// 3. The Doors fue un grupo de rock Americano?


var user_in = prompt("Este es un juego de preguntas donde responderas solo si o no. Escribe 1 para si y 2 para no, escribe 1 para iniciar y 2 para cancelar.")

if (isNaN(user_in) || user_in >= 2 || user_in <= 0) {
    alert("Cancelado, entiendo")

} else if (user_in = 1) {
    let pr1 = prompt("La primera pregunta es: Colon descubrió América?")
    if (isNaN(pr1) || pr1 <= 0 || pr1 >= 2) {
        alert("Incorrecto, recargue la pagina e intentelo de nuevo")
    } else if (pr1 = 1) {
        let pr2 = prompt("La segunda pregunta es: La independencia de Colombia fue en el año 1810?")
        if (isNaN(pr2) || pr2 <= 0 || pr2 >= 2) {
            alert("Incorrecto, recargue la pagina e intentelo de nuevo")
        } else if (pr2 = 1) {
            let pr3 = prompt("La tercera pregunta es: The Doors fue un grupo de rock Americano?")
            if (isNaN(pr3) || pr3 <= 0 || pr3 >= 2) {
                alert("Incorrecto, recargue la pagina e intentelo de nuevo")
            } else if (pr3 = 1) {
                alert(`FELICIDADES!! Ha completado el juego. Todas las respuestas fueron correctas`)
            }
        }

    }
}
