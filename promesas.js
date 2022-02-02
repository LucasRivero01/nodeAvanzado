const contratarJugador = (contratado) => new Promise((resolve, reject) => {
   
   if(contratado) {
       resolve('El jugador se incorpora al equipo')
   } else {
       reject('El jugador y el equipo no llegaron a un acuerdo')
   }
})

const bandera = false;
contratarJugador(bandera)
       .then( mensaje => console.log(mensaje))
       .catch( error => console.log(error))