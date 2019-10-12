var data = JSON.parse(movie);

$("document").ready(function(){
	for (let i = 0; i < data.length; i++) {
		$("#movieRow").append(`<div class="col-sm-5 py-2"><div class="row movie-container"><div class="col-sm-5"><img src=${data[i].image}>           </div><div class="col-sm-6"><p class="text-light">${data[i].name}</p><p class="text-light">${data[i].description}</p><p class="text-light text-right text-success">like <img class="thump" src=${data[i].likeThump}><button type="button" class="btn  btn-success circle-button">0</button></p></div></div></div>`);
	}
    	function addToCart(){
		var i = this.name;
			data[i].like++;
			update();
	}
    
});


              