'use strict'

$(document).ready(function () {

  navSelect();
  selectTheme();
  theme();
  parallax();
  login();
  acordeon();
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

function acordeon(){
  if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
};