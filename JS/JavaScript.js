'use strict'

$(document).ready(function(){
    
    //nav 

    $('#menu a').click(function () {
        
        $('#menu').find('li.active').removeClass('active');
        
        $(this).parents("li").addClass('active');

    });

    
    let slider = $('.bxslider');

    slider.bxSlider({
        auto: true,
        stopAutoOnClick: true,
        captions: true,
        responsive: true,
        controls: true,
        
      });
    
    	//parallax
	$(window).scroll(function(){
		let barra = $(window).scrollTop();
		let posicion = barra * 0.35;

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
    });
    
    	//menu
	let altura = $('.menu').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura) {
			$('.menu').addClass('.menu-fixed');
		}else{
			$('.menu').removeClass('menu-fixed');
		}
	});

      //formato para fechas
    let options = { weekday: 'Long', year: 'Numeric', month: 'Long', day: 'Numeric' };
    let today  = new Date();

       //POST
      let post = [
        	{
                "title" : "Titulo 1 Aventura",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
            {
                "title" : "Titulo 2 Viaje",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
            {
                "title" : "Titulo 3 Descanso",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
            {
                "title" : "Titulo 4 Comidas",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
      ];

      //usar el objeto/joson
      post.forEach((item, index) =>{
        let contenido = $('#posts'); 
        let articulo = 
        `<div class="post" id="posts">
        <article id="articulo">
            <h2>${item.title}</h2>
            <span id="date">Publicado: ${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="btn-leer">Leer mas!</a>
            <hr>
        </article>
        </div>`;
      
      //jquery para añadir divs
      
      contenido.append(articulo);
      });

});

/*
 <div class="post" id="posts">
                <article id="articulo">
                    <h2>Titulo del articulo</h2>
                    <span id="date">fecha del articulo</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem asperiores blanditiis vero
                        amet odit ab tenetur id nam, totam voluptatibus explicabo sunt perferendis nihil ex. Porro vitae
                        eligendi illum!
                    </p>
                    <a href="#" class="btn-leer">Leer mas!</a>
                    <hr>
                </article>
               
            </div>
*/