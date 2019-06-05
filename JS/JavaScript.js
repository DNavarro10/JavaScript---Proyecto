'use strict'

$(document).ready(function(){
    
    $('.bxslider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        captions: true,
        responsive: true,
        controls: true,
        
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
                "title" : "Titulo 1 Descanso",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
            {
                "title" : "Titulo 1 Comidas",
                "date": today.toLocaleDateString("es-ES", options),
                "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
            },
      ];

      console.log(post);
});