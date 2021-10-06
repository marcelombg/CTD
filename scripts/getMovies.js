// ** API

const API_KEY = `11c201ae897c1fca06f62138b17d008e`;
const IMG_PATH = `https://image.tmdb.org/t/p/w500/`;

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=""`;
const TRENDING_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const genresOption = [

    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },

];

// ** DOM

const itemsCarousel = document.querySelector('.items-carousel');

// ** FUNCTIONS

const getMovies = async url => {

    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);

}

const showMovies = movies => {

    itemsCarousel.innerHTML = '';

    movies.forEach(movie => {

        const {id, title, poster_path, overview} = movie;

        const movieElement = document.createElement('li');

        movieElement.innerHTML = `
        
            <li class="col-1 movie">

                <img src="${IMG_PATH + poster_path}" alt="${title}"/>
            
            </li>
        
        `;

        itemsCarousel.appendChild(movieElement);

    });

};

getMovies(TRENDING_URL);