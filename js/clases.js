import { Droide } from './droide.js';

$(document).ready(function(){
//Clase R2D2
  class R2D2 extends Droide {
    constructor() {
      super(107,45);
    };
    Equipamiento(){
      return "IA de reparaciones mecánicas";
    };
    Color(){
      return "Azul y Blanco";
    };
    Precio(){
      return "7000";
    };
  };
  //Clase C3P0
  class C3P0 extends Droide {
    constructor() {
      super(171,75);
    };
    Equipamiento(){
      return "Módulo de comunicaciones";
    }
    Color(){
      return "Amarillo";
    };
    Precio(){
      return "5000";
    };
  }
  //cuando seleccionen un tipo cargará la info de dicho droide
  $('#droideTipo').change(function(){
      var value = $(this).val();
      console.log(value);
      switch (parseInt(value)) {
        case 3:
        console.log("Hola1");
        var droide = new R2D2();
        imprimir(droide);
        calCantidad(droide);
          break;
        case 4:
        console.log("Hola2");
        var droide = new C3P0();
        imprimir(droide);
        calCantidad(droide);
          break;
        default:
        $('#equipamiento').val('')
        $('#color').val('');
        $('#precioDroide').val('');
        $('#cantidadDroide').val('1');
      }
  });
  //funcion para calcular el precio teniendo en cuenta la cantidad introducida por el usuario
  function calCantidad(obj){
    $('#cantidadDroide').val('1')
    $('#cantidadDroide').change(function(){
      var cantidad = $('#cantidadDroide').val();
      var precio =  obj.Precio();
      var total = precio * cantidad;
      $('#precioDroide').val(total);
    });
  }
  //funcion para imprimir el formulario
  function imprimir(droide){
    $('#equipamiento').val(droide.Equipamiento());
    $('#color').val(droide.Color());
    $('#precioDroide').val(droide.Precio());
  }
});
