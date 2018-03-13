function renderMovie(data){
    $(".infosection h1").text(data.title);
    $(".infosection p").text(data.review);
    $(".poster").attr("src", data.imgUrl);
  
    let actorList = "";
    for(let i=0; i<data.actors.length; i++){
      actorList += "<li>" + data.actors[i] + "</li>";
    }
    $(".infosection ul").html(actorList);
  }
  
  function changeStarRating(rating){
    for(let i=1; i<=5; i++){
      let star = $("#star" + i);
      if (i <= rating){
        star.addClass("filled");
      } else {
        star.removeClass("filled");
      }
    }
  }
  
  for(let i=1; i<=5; i++){
    let star = $("#star" + i);
    star.on("click", function() { changeStarRating(i)});
  }
  
  renderMovie(movieData);