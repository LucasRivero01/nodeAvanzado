const lenguajes = ['Node', 'React', 'Java', 'Python', 'Ruby on Rails']

function mostrarLenguajes() {

   setTimeout(() => {

       lenguajes.forEach(lenguaje => console.log(lenguaje))

   }, 1000);

}

function nuevoLenguaje(lenguaje, callback) {

   setTimeout(() => {

       lenguajes.push(lenguaje);

       callback();

   }, 2000);

} 

nuevoLenguaje('Angular', mostrarLenguajes)
