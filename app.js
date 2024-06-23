let pagina = 1;
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");
btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000){
	pagina += 1
	cargarPeliculas();
	}		
})
btnAnterior.addEventListener('click', () => {
	if (pagina > 1){
		pagina -= 1
		cargarPeliculas();
		}	
})


const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3//movie/popular?api_key=2a94992c3a816def7674d96f6728ff08&page=${pagina}`);
		console.log(respuesta);
    	if(respuesta.status === 200){
			const datos = await respuesta.json();
			let peliculas =  ``		
			datos.results.forEach(pelicula => {
				peliculas += `
				<div class="pelicula">
					<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
					<h3 class="titulo">${pelicula.title}</h3>
				</div>
				`
				console.log(pelicula.title)
			});
			document.querySelector("#contenedor").innerHTML = peliculas;

		} else if(respuesta.status === 404) {
			console.log("La pelicula que buscas no existe.")
		} else {
			console.log("Error al cargar la pelicula.")
		}
	} catch(error) {
		console.log('Error al cargar las películas '+error);
	}
}

cargarPeliculas()