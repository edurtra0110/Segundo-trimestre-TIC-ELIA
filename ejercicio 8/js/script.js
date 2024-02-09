function MensajeIf() {
  let hora;
  hora = parseInt (document.getElementById ("hora") .value);
  if ( hora>=7 && hora <=11) {
    document.getElementById("solucion").innerHTML ="Buendos dias";
  }
  else if (hora<=12 && hora<=21) {
    document.getElementById("solucion").innerHTML ="Buenas tardes";
  }
  else if (hora >=0 && hora <=6 || hora >=22 && hora <=24){
    document.getElementById("solucion").innerHTML = "Buenas noches";
  }
  else {
    document.getElementById ("solucion").innerHTML= "El valor introducido no es válido"
  }
}

function MensajeSwitch() {
    let hora= parseInt(prompt("¿Qué hora es?"),10);
    switch (hora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          alert ("Buenos días");
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          alert ("Buenas tardes");
        break;
        default:
          alert ("Buenas noches");
        break;  
    
    }
 }
  