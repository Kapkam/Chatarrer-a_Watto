$(document).ready(function(){
  //cambia el atributo css de la clase overlay a visible
  $('#comprar').click(function(){
    $('.overlay').css('visibility', 'visible');
    //imprimimos en la ventana emerjente lo que contiene el formulario VAINAS
    $('#VNombreVaina').val($('#nombreVaina').val());
    $('#VMotorVaina').val($('#motorVaina').val());
    $('#VVelocidadVaina').val($('#velocidadVaina').val());
    $('#VDimensionVaina').val($('#dimensionVaina').val());
    $('#VCantidadVaina').val($('#cantidadVaina').val());
    $('#VPrecioVaina').val($('#precioVaina').val());
    //imprimimos en la ventana emerjente lo que contiene el formulario Dorides
    $('#VModeloDroide').val($('#droideTipo option:selected').text());
    $('#VEquipamientoDroide').val($('#equipamiento').val());
    $('#VColorDroide').val($('#color').val());
    $('#VCantidadDroide').val($('#cantidadDroide').val());
    $('#VPrecioDroide').val($('#precioDroide').val());
    //Calcular precio final
    calTotalCreditos($('#VPrecioVaina').val(),$('#VPrecioDroide').val());
  });
  //cambia el atributo css de la clase overlay a hidden
  $('#cerrar').click(function(){
    $('.overlay').css('visibility', 'hidden');
  });
  function calTotalCreditos(Cvaina,Cdroide){
    var vaina = parseInt(Cvaina);
    var droide = parseInt(Cdroide);
    if (Cvaina.length == 0) {
      var vaina = 0;
    }
    if (Cdroide.length == 0) {
      var droide = 0;
    }
    var total = vaina + droide;
    $('#VPrecioTotal').val(total);
  }
});
