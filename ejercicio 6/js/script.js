function comprobar(){
  let numero;
  numero = parseInt(prompt("numero"), 10);
  if (numero % 2 < 0 ){
      alert("Es numero par");
  }
  else { (numero % 2 > 0 )
        alert("Es numero impar");
  }
}