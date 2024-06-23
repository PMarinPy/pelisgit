const cargarPeliculas = () => {
	const respuesta = fetch('https://api.themoviedb.org/3/movie/157336?api_key=2a94992c3a816def7674d96f6728ff08')
	console.log(respuesta)
}

cargarPeliculas()