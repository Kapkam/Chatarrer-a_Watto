$(document).ready(function(){
  //Objeto
  var vaina01 = {
    "nombre": '',
    "motores": '',
    "velocidad": '',
    "dimension": '',
    "precio": '',
    set name (n){
      this.nombre = n;
    },
    set motor (m){
      this.motores = m;
    },
    set speed (s){
      this.velocidad = s;
    },
    set width (w){
      this.dimension = w;
    },
    set price (p){
      this.precio = p;
    }
  }
  //Json Decode
  var vainasDecode = JSON.parse('{ "Vainas":[{"nombre":"Pod Racer-Anakin", "velocidad":"947km/h", "motores":"Motores de carreras Radon-Ulzer 620C","dimension":"7","precio":"25000"},{"nombre":"Pod Racer-Sebulba", "velocidad":"829km/h", "motores":"Motores de carreras Colosal Bujía F de Collor Pondrant","dimension":"7,47","precio":"30000"}]}');
  //Asignación por destructuring
  var [a,b] = vainasDecode['Vainas'];
  $('#vainaTipo').change(function(){
      var value = $(this).val();
      switch (parseInt(value)) {
        case 1:
        rellenar(a);
        imprimir();
        calCantidad(a)
          break;
        case 2:
        rellenar(b);
        imprimir();
        calCantidad(b)
          break;
        default:
        $('#cantidadVaina').val('1')
        $('#nombreVaina').val('');
        $('#velocidadVaina').val('');
        $('#dimensionVaina').val('');
        $('#motorVaina').val('');
        $('#precioVaina').val('');
      }
  });
  //funcion para calcular el precio teniendo en cuenta la cantidad introducida por el usuario
  function calCantidad(array){
    $('#cantidadVaina').val('1')
    $('#cantidadVaina').change(function(){
      var cantidad = $('#cantidadVaina').val();
      var precio =  array['precio'];
      var total = precio * cantidad;
      $('#precioVaina').val(total);
    });
  }
  //funcion para rellenar el objeto
  function rellenar(array){
    vaina01.name = array['nombre'];
    vaina01.motor = array['motores'];
    vaina01.speed = array['velocidad'];
    vaina01.width = array['dimension'];
    vaina01.price = array['precio'];
  }
  //funcion para imprimir la información del objeto en el formulario
  function imprimir(){
    var nombre = vaina01.nombre;
    var velocidad = vaina01.velocidad;
    var dimension = vaina01.dimension;
    var motor = vaina01.motores;
    var precio = vaina01.precio;
    $('#nombreVaina').val(nombre);
    $('#velocidadVaina').val(velocidad);
    $('#dimensionVaina').val(dimension);
    $('#motorVaina').val(motor);
    $('#precioVaina').val(precio);
  }
});
