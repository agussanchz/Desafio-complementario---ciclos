alert("¡Bienvenidos a AsGame!")
alert("Consigna del juego: El primer jugador debe seleccionar un número del 1 al 10 y el segundo jugador debe adivinar cual fue el que eligio.")

let jugadorNumero1 = prompt("Nombre del primer jugador: ")
let jugadorNumero2 = prompt("Nombre del segundo jugador: ")  

let numeroElegido = parseInt(prompt(jugadorNumero1 + " ingrese un numero del 1 al 10"))

alert("Muy bien, ya sabemos que numero eligio " + jugadorNumero1 + "!" )

alert("Ahora es turno de " + jugadorNumero2)

let numeroAdivinador = parseInt(prompt("Por favor, intente adivinar que numero eligio " + jugadorNumero1))

for (let i = 1; i <=10; i++) {
	
	if (numeroElegido == numeroAdivinador) {
		alert("Adivinaste! el numero que eligio " + jugadorNumero1 + " fue, " + numeroElegido)
		break;	
	}
	else {
		alert("Ese no es el numero elegido por " + jugadorNumero1 + " , vuelve a intentarlo!")
		numeroAdivinador = parseInt(prompt("Por favor, intente adivinar que numero eligio " + jugadorNumero1))		
	}

}