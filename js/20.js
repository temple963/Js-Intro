//Metodos de propiedad
const reproductor ={
    reproducir :function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function(){
        console.log("pausando...")

    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist${nombre}`)
    },
    
    reproduciendoPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist${nombre}`)
    },
}

reproductor.borrarCancion=function(id){
    console.log(`Eliminando la cancion ${id}`)
}
console.log(reproductor);

//se esta declarando el numero de Id en este caso 3840
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20)
reproductor.crearPlaylist('Heavy metal')
reproductor.reproduciendoPlaylist('Heavy metal')