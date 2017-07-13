$(document).ready(function(){
	$(".iconos").append('<img src="assets/icon/pokeball_gray.png" alt="pokeball">' + ' ' +'<img src="assets//icon/valentines-heart.png" alt="heart">' + ' ' +
	 	'<img src="assets/icon/data.png" alt="data">');
  
    /*$("#btn").on("click", function(e) {
        e.preventDefault();  
        $(".modal").addClass("mostrar-modal");
    }); 

    $(".cerrar-modal").on("click", function(e) {
        e.preventDefault();  
        $(".modal").removeClass("mostrar-modal");
     });*/
        
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit': '1'},
	})
	.done(function(respuesta) {
		respuesta.results.forEach(function(el){
			$(".nombres").append('<a href="#" id="btn">' + el.name + '</a>');
			
		})
	})
	.fail(function() {
		console.log("error");
	})

});