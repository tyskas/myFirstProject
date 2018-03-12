renderMovie(movieData);

function renderMovie(movie){
    document.getElementById("movietitle").innerText = movie.title;
    document.getElementById("descriptiontext").innerText = movie.description;
    document.getElementById("image").setAttribute("src",movie.imageURL);
    let list = document.getElementById("actorlist");
    for (i = 0; i < movie.actors.length; i++) { 
        var actor = document.createElement("li");
        actor.innerText=movie.actors[i];
        list.appendChild(actor);
    }
}

