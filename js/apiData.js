//Details from api server;
api = 'https://api.themoviedb.org/3/search/movie?'
api_key = '98325a9d3ed3ec225e41ccc4d360c817'
lang = '&language=en-US&query='

//load last user input from localStorage;
function loadLastInput() {

    var nameData = document.getElementById('searchText').value = localStorage.movieReturned;
    getMovies(nameData);
}

//Get user input by onclick;
$(document).ready( function() {
    $("#searchForm").click(function(e) {

        e.preventDefault();
        let searchText = $("#searchText").val();
        getMovies(searchText);
        localStorage.setItem('movieReturned', searchText);
    });
});

//Acess Api and save the results;
function getMovies(searchText, nameData) {

    input = searchText
    

      $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie?',
         dataType: 'json',
         type: 'GET',
         data: {
         api_key: api_key,
         lang: lang,
         query: input,
       },

         // FUNCTION success: USED TO PRINT IN A HTML PAGE ALL THE DATA FROM API;
        success: function data(data) {
            displayMovie(data);
        },

        error: function(data) {
          let movies = data.results;
            console.log(movies.total_results);
        }
    });
};

//display list of movies by api using the text request;
function displayMovie(data) {

    let movies = data.results;
    let output = ''

        $.each(movies, function(index, movie) {

          output += `

      <div class="col-md-4">
          <div class="well text-center">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onError="this.onerror=null;this.src='img/nopic.png';">
              <h5>${movie.title}</h5>
              <div onclick="movieSelected('${movie.id}')" class="btn btn-primary" id="buttonIndex" href="#">Movie Details</div>
          </div>
      </div>
                  `;
             });

    $('#movies').html(output);

    if (movies == 0) {
        window.alert('ERROR: PLEASE INSERT A CORRECT MOVIE NAME');
    }
};

//Save the movie ID from displayMovie results and storage in a session to use later in a getmovie action;
function movieSelected(id) {

    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';

    return false;
}

//Load all the movie information using a Id key;
function getMovie() {

    let movieId = sessionStorage.getItem('movieId');
    api_key = '98325a9d3ed3ec225e41ccc4d360c817';

    $.ajax({

        url: `https://api.themoviedb.org/3/movie/${movieId}`,
         dataType: 'json',
         type: 'GET',
         data: {
            api_key: api_key,
         },

        //get acess to movie information;
        success: function(data) {

            var movie = data;
            let output = `
            <div class="row">
                <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
                    <div id="visitS">
                      <a id="visitSite" target="_blank" href="${movie.homepage}"> Visit Movie Site</a>
                    </div>
                </div>
            <div class="col-md-8">
              <h2>${movie.title}</h2>
            <ul class="list-group" id="list-group">

                <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
                <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min.</li>
                <li class="list-group-item"><strong>Production Companies:</strong> ${movie.production_companies[0].name} min.</li>
            </ul>
            <div>
                <div id="overview">
                    <h3>Overview</h3> ${movie.overview}
                </div>
                  <div id="imdbb">
                    <a id="imdb" href="http://imdb.com/title/${movie.imdb_id}" target="_blank" <i class="fab fa-imdb fa-3x"></i></a>
                  </div>
                <div>
                    <a class="navbar-brand" id="go2" href="index.html">Go Back</a>
                </div>
            </div>
             `;
             //print movie selected information
            $('#movie').html(output);
        }
    })
}
