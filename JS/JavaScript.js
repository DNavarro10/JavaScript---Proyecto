'use strict'

$(document).ready(function () {

  navSelect();
  selectTheme();
  theme();
  sliderBox();
  parallax();
  contenido();
  login();
  irArriba();

});

function navSelect() {
  //Nav  active 
  let lista = $('nav li');
  lista.click(function () {
    // remove classes from all
    lista.removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
  });
};

function selectTheme() {
  //selector
  let selector = $('.selector div');
  selector.click(function () {
    // remove classes from all
    selector.removeClass("activa");
    // add class to the one we clicked
    $(this).addClass("activa");
  });
};
//temas
function theme() {
  let theme = $('#theme');

  $('#theme-1').click(function () {
    theme.attr("href", "CSS/theme/color1.css");
  });
  $('#theme-2').click(function () {
    theme.attr("href", "CSS/theme/color2.css");
  });
  $('#theme-3').click(function () {
    theme.attr("href", "CSS/theme/color3.css");
  });

};
function sliderBox() {
  //slider
  let slider = $('.bxslider');
  slider.bxSlider({
    auto: true,
    stopAutoOnClick: true,
    captions: true,
    responsive: true,
    controls: true,

  });
};

function parallax() {
  //parallax
  $(window).scroll(function () {
    let barra = $(window).scrollTop();
    let posicion = barra * 0.35;

    $('body').css({
      'background-position': '0 -' + posicion + 'px'
    });
  });

};

function contenido() {
  //formato para fechas
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let today = new Date();

  //POST
  let post = [
    {
      "title": "Titulo 1 Aventura",
      "date": today.toLocaleDateString("es-ES", options),
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
    },
    {
      "title": "Titulo 2 Viaje",
      "date": today.toLocaleDateString("es-ES", options),
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
    },
    {
      "title": "Titulo 3 Descanso",
      "date": today.toLocaleDateString("es-ES", options),
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
    },
    {
      "title": "Titulo 4 Comidas",
      "date": today.toLocaleDateString("es-ES", options),
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus incidunt earum provident eius beatae accusantium consequatur! Quas, quibusdam animi ducimus, rem perspiciatis harum quod accusamus consectetur deleniti, veritatis cum rerum."
    },
  ];

  //usar el objeto/joson
  post.forEach((item, index) => {
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
};

//recoger datos de imputs
function login(){
  //formulario
 var about = $('#about');

 $('#login #form').submit(function(){
    var form_name = $('#form_name').val();
    localStorage.setItem("form_name", form_name);
    
  });
 
//logout
};
  var form_name = localStorage.getItem("form_name");

  if(form_name != null && form_name != "undefined"){
    var session =$('#session'); 
    session.html("<strong>Bienvenido, <span> " + form_name + " !</span></strong>");
    session.append("<br><br><a href='#' id='logout' class='cerrar'>Cerrar</a>");
    $('#login').hide();
   
    $('#logout').click(function(){
      localStorage.clear();
     
      location.reload();
     
    });
    
};
//boton de subir
function irArriba() {
  let arriba =  $('.ir-arriba');
  let cuerpo = $('body,html');

  arriba.click(function () { 
    cuerpo.animate({ scrollTop: '0px' }, 1000); });
  
    $(window).scroll(function () {
    if ($(this).scrollTop() > 200) { arriba.fadeIn().slideDown(600); } else { arriba.fadeOut().slideUp(600); }
  });
 
};
