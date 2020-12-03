let movie = document.getElementById('movie');
const key = 'k_lLeNEBFq';

function oneMovie(movieID) {
    let url = 'https://imdb-api.com/en/API/Title/' + key + '/' + movieID + '/FullActor,Posters,Images,Trailer,Ratings'
    document.getElementById('url'). innerText = url;

    fetch(url)
        .then(resp => resp.json()) // Convert data to json
        .then(data => oneMovieDetails(data))
        .catch(error => console.log('error', error));
}

function getMovieDetails(movieTitle) {
    let url = 'https://imdb-api.com/en/API/Search/' + key + '/' + movieTitle;
    document.getElementById('url'). innerText = url;

    fetch(url)
        .then(resp => resp.json()) // Convert data to json
        .then(data => showDetails(data))
        .catch(error => console.log('error', error));
}

function oneMovieDetails(d) {
    document.getElementById('json').innerHTML = "";

    let list = document.getElementById('list');
    list.innerHTML = "";
    list.innerHTML += "<h1>" + d.title + "</h1>";
    list.innerHTML += "<h3>" + d.plot + "</h3>";
    list.innerHTML += "<a href='http://www.imdb.com/title/" + d.id +  "'>" +
                      "    <img src=" + d.image + " width='200px' height='320px'>" +
                      "</a>";
}

function showDetails(d) {
    document.getElementById('json').innerHTML = JSON.stringify(d.results[0]);

    let list = document.getElementById('list');
    list.innerHTML = "";
    d.results.forEach(m => {
        list.innerHTML += "<span>" + m.title +
                              "<button onclick='oneMovie(`"+ m.id.trim() + "`)'>" + m.title + " Details</button>"+
                              "<a href='http://www.imdb.com/title/" + m.id +  "'>" +
                              "    <img src=" + m.image + " width='100px' height='160px'>" +
                              "</a>" +
                          "</span>";
    });
}

window.onload = function () {
    getMovieDetails('Inception');
    //  oneMovie('tt1375666');
}
