'use strict'

$(document).ready(function(){
    
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
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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

      //temas

      let tema =$('#theme');

      $('.color1').click(function(){
          theme.attr("href","css/color1.css");
      });
      $('.color2').click(function(){
      theme.attr("href","css/color2.css");
      });
      $('.color2').click(function(){
      theme.attr("href","css/color3.css");
      });
});

