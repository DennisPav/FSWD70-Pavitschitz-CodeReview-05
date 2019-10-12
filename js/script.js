var data = JSON.parse(movie);

$("document").ready(function(){
	for (let i = 0; i < data.length; i++) {
		$("#movieRow").append(`<div class="col-sm-5 py-2"><div class="row movie-container"><div class="col-sm-5"><img src=${data[i].image}>           </div><div class="col-sm-6"><p class="text-light">${data[i].name}</p><p class="text-light">${data[i].description}</p><p class="text-light text-right text-success">like <img class="thump" src=${data[i].likeThump}><input type="button" class="btn  btn-success circle-button" value="0" name="${i}"></p></div></div></div>`);
	}
    
     $('.btn').click(function(){    
        var $this = $(this),
        c = $this.data('like');    
        if (!c) c = 0;
        c++;
        $this.data('like',c);
         console.log(c);
         
        $(this).val(c);
    });
    
     $('#sort').click(function(){ 
        
            
             
        
    });  
/*    var $divs = $("div.movie-container");
    $('#sort').on('click', function () {
    var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find(".btn").text() > $(b).find("value").text();
    });
    $(".container").html(numericallyOrderedDivs);
});*/
    
});

