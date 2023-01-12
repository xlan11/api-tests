const apiKey = "f9a8200a794828e016db6bb8fca5a95a"

//
// FETCH 
//
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    const popular = data.results;
    console.log(data)

    for (let i = 0; i < 4; i++) {
        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const imageSize = 'w185';
        const imagePath = popular[i].poster_path;
        const imageUrl = baseImageUrl + imageSize + imagePath;
        const popMovies = document.getElementById("movie_details");
        const popMovieItem = document.createElement("div");
        popMovieItem.className="movie_details_box";
        

        let popIcon=""
        if (popular[i].popularity > 10000) {
                popIcon = "🔥🔥🔥"}
            else if (popular[i].popularity > 3000){
                popIcon = "🔥🔥"
            }
            else {(popIcon = "🔥")

        }
        popMovieItem.innerHTML= 
        `
        <img src="${imageUrl}" />
        <p>Rating: ${popIcon}</p>
        `
        popMovies.appendChild(popMovieItem);  
    }
  })
  .catch(error => console.error(error))

//
// FETCH TOP MOVIES
//
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    console.log(data)

    for (let i = 0; i < 5; i++) {
      const baseImageUrl = 'https://image.tmdb.org/t/p/';
      const imageSize = 'w185';
      const backdropSize = 'original';
      const posterPath = movies[i].poster_path;
      const backdroppath = movies[0].backdrop_path;
      const imageUrl = baseImageUrl + imageSize + posterPath;
      const backdropImageUrl = baseImageUrl + backdropSize + backdroppath;
      const topMovieSplash = document.getElementById("movie_splash")
      const topMovies = document.getElementById("movie_top");
      const topMoviesTitle = document.getElementById("movie_title")
      const topMoviesDirector = document.getElementById("movie_director")
      const topMovieItem = document.createElement("div")
      
      topMovieItem.className="related_movie";

      topMovieSplash.style.backgroundImage = `
      linear-gradient(to bottom, rgba(5, 22, 30, 0.01), rgba(5, 22, 30, 1)), url(${backdropImageUrl})`;
      console.log(movies[0].backdrop_path)
      topMoviesTitle.innerHTML=`<h1>${movies[0].title}</h1>`
      topMoviesDirector.innerHTML=`<span></span>`

      topMovies.appendChild(topMovieItem);
      topMovieItem.innerHTML= 
      `
        <img src="${imageUrl}" />
        <p>${movies[i].title}</p>
        <p>Rating: ${movies[i].vote_average}</p>
      `  
    }
  })
  .catch(error => console.error(error))

