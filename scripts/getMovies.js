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

const trendingCarousel = document.querySelector(".carousel-trending");
const actionCarousel = document.querySelector(".carousel-action");
const adventureCarousel = document.querySelector(".carousel-adventure");
const itemModal = document.querySelector(".movies-modal");
const itemModalContent = document.querySelector(".movies-modal-header");

// ** FUNCTIONS

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
};

const getActionMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showActionMovies(data.results);
};

const getAdventureMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  showAdventureMovies(data.results);
};

const showMovies = (movies) => {
  trendingCarousel.innerHTML = "";

  movies.forEach((movie) => {
    const { id, title, poster_path, overview, vote_average, release_date } =
      movie;

    const modalTrailers = document.querySelector("main.trailers");

    function getTrailer(id) {
      // let id = id

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US
            `).then((res) => res.json()).then((videoData) => {

          if (videoData) {

            if (videoData.results.length > 0) {
              let embed = [];

              videoData.results.forEach((video) => {
                let { key, name, site } = video;

                if (site == "YouTube") {
                  embed.push(`
        
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    `);
                }
              });

              modalTrailers.innerHTML = embed.join("");
            } else {
              modalTrailers.innerHTML = `<h1>No content found</h1>`;
            }
          }
        });
    }

    const movieElement = document.createElement("li");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `

                <img src="${IMG_PATH + poster_path}" alt="${title}"/>

                <div class="description">

                    <div class="actions">

                        <div class="left">

                            <i class="ri-play-fill"></i>
                            <i class="ri-add-line"></i>

                        </div>

                        <i class="ri-arrow-down-s-line"></i>

                    </div>

                    <div class="status">

                        <p>${vote_average}</p>
                        <p>${release_date}</p>

                    </div>

                    <div class="synopsis">

                        <p>${overview}</p>

                    </div>

                </div>  

        `;

    movieElement.addEventListener("click", () => {

        getTrailer(id);
        itemModalContent.innerHTML = `

                    <img src="${IMG_PATH + poster_path}" alt="${title}"/>
                    <main class="modal-description">
                        <div class="top">
                            <div class="Title">
                                <h2>${title}</h2>
                                <i class="ri-close-line"></i>
                            </div>
                            <article class="synopsis">
                                <p>${overview}</p>
                            </article>
                        </div>
                        <footer class="rating">
                            <div class="status">
                                <p>${vote_average}</p>
                                <p>${release_date}</p>
                            </div>
                            <div class="modal-actions">
                                <a href="#" class="play">
                                    <i class="ri-play-fill"></i>
                                </a>
                                <a href="#" class="my-list">
                                    <i class="ri-add-line"></i>
                                </a>
                            </div>
                        </footer>
                    </main>

            `;

      itemModal.classList.remove("hidden");
      itemModal.classList.add(id);
    });

    trendingCarousel.appendChild(movieElement);
    // for(i = 0; i < trendingCarousel.length - 1; i++) {

    //     trendingCarousel[i].appendChild(movieElement)

    // }

    // trendingCarousel.forEach(carousel => {

    //     carousel.appendChild(movieElement);

    // })

    });
};

const showActionMovies = (movies) => {
  trendingCarousel.innerHTML = "";

  movies.forEach((movie) => {
    const { id, title, poster_path, overview, vote_average, release_date } =
      movie;

    const modalTrailers = document.querySelector("main.trailers");

    function getTrailer(id) {
      // let id = id

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US
            `).then((res) => res.json()).then((videoData) => {

          if (videoData) {

            if (videoData.results.length > 0) {
              let embed = [];

              videoData.results.forEach((video) => {
                let { key, name, site } = video;

                if (site == "YouTube") {
                  embed.push(`
        
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    `);
                }
              });

              modalTrailers.innerHTML = embed.join("");
            } else {
              modalTrailers.innerHTML = `<h1>No content found</h1>`;
            }
          }
        });
    }

    const movieElement = document.createElement("li");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `

                <img src="${IMG_PATH + poster_path}" alt="${title}"/>

                <div class="description">

                    <div class="actions">

                        <div class="left">

                            <i class="ri-play-fill"></i>
                            <i class="ri-add-line"></i>

                        </div>

                        <i class="ri-arrow-down-s-line"></i>

                    </div>

                    <div class="status">

                        <p>${vote_average}</p>
                        <p>${release_date}</p>

                    </div>

                    <div class="synopsis">

                        <p>${overview}</p>

                    </div>

                </div>  

        `;

    movieElement.addEventListener("click", () => {

        getTrailer(id);
        itemModalContent.innerHTML = `

                    <img src="${IMG_PATH + poster_path}" alt="${title}"/>
                    <main class="modal-description">
                        <div class="top">
                            <div class="Title">
                                <h2>${title}</h2>
                                <i class="ri-close-line"></i>
                            </div>
                            <article class="synopsis">
                                <p>${overview}</p>
                            </article>
                        </div>
                        <footer class="rating">
                            <div class="status">
                                <p>${vote_average}</p>
                                <p>${release_date}</p>
                            </div>
                            <div class="modal-actions">
                                <a href="#" class="play">
                                    <i class="ri-play-fill"></i>
                                </a>
                                <a href="#" class="my-list">
                                    <i class="ri-add-line"></i>
                                </a>
                            </div>
                        </footer>
                    </main>

            `;

      itemModal.classList.remove("hidden");
      itemModal.classList.add(id);
    });

    actionCarousel.appendChild(movieElement);
    // for(i = 0; i < trendingCarousel.length - 1; i++) {

    //     trendingCarousel[i].appendChild(movieElement)

    // }

    // trendingCarousel.forEach(carousel => {

    //     carousel.appendChild(movieElement);

    // })

    });
};

const showAdventureMovies = (movies) => {
  trendingCarousel.innerHTML = "";

  movies.forEach((movie) => {
    const { id, title, poster_path, overview, vote_average, release_date } =
      movie;

    const modalTrailers = document.querySelector("main.trailers");

    function getTrailer(id) {
      // let id = id

      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US
            `).then((res) => res.json()).then((videoData) => {

          if (videoData) {

            if (videoData.results.length > 0) {
              let embed = [];

              videoData.results.forEach((video) => {
                let { key, name, site } = video;

                if (site == "YouTube") {
                  embed.push(`
        
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    `);
                }
              });

              modalTrailers.innerHTML = embed.join("");
            } else {
              modalTrailers.innerHTML = `<h1>No content found</h1>`;
            }
          }
        });
    }

    const movieElement = document.createElement("li");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `

                <img src="${IMG_PATH + poster_path}" alt="${title}"/>

                <div class="description">

                    <div class="actions">

                        <div class="left">

                            <i class="ri-play-fill"></i>
                            <i class="ri-add-line"></i>

                        </div>

                        <i class="ri-arrow-down-s-line"></i>

                    </div>

                    <div class="status">

                        <p>${vote_average}</p>
                        <p>${release_date}</p>

                    </div>

                    <div class="synopsis">

                        <p>${overview}</p>

                    </div>

                </div>  

        `;

    movieElement.addEventListener("click", () => {

        getTrailer(id);
        itemModalContent.innerHTML = `

                    <img src="${IMG_PATH + poster_path}" alt="${title}"/>
                    <main class="modal-description">
                        <div class="top">
                            <div class="Title">
                                <h2>${title}</h2>
                                <i class="ri-close-line"></i>
                            </div>
                            <article class="synopsis">
                                <p>${overview}</p>
                            </article>
                        </div>
                        <footer class="rating">
                            <div class="status">
                                <p>${vote_average}</p>
                                <p>${release_date}</p>
                            </div>
                            <div class="modal-actions">
                                <a href="#" class="play">
                                    <i class="ri-play-fill"></i>
                                </a>
                                <a href="#" class="my-list">
                                    <i class="ri-add-line"></i>
                                </a>
                            </div>
                        </footer>
                    </main>

            `;

      itemModal.classList.remove("hidden");
      itemModal.classList.add(id);
    });

    adventureCarousel.appendChild(movieElement);
    // for(i = 0; i < trendingCarousel.length - 1; i++) {

    //     trendingCarousel[i].appendChild(movieElement)

    // }

    // trendingCarousel.forEach(carousel => {

    //     carousel.appendChild(movieElement);

    // })

    });
};



// const moviesLists = document.querySelectorAll('.movies-list');
// console.log(moviesLists)
// moviesLists.forEach(list => {

//     if(list.classList.contains('trending')) {

//         getMovies(TRENDING_URL);

//     }
    
//     if(list.classList.contains('action')) {

//          getMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genresOption[0].id}&api_key=${API_KEY}&page=1`)

//     }

// })

getMovies(TRENDING_URL);
getActionMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genresOption[0].id}&api_key=${API_KEY}&page=1`);
getAdventureMovies(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genresOption[1].id}&api_key=${API_KEY}&page=1`);
