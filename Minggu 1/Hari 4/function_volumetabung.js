function volumetabung(jari,tinggi) {
 	var phi=3.14; 
  	var r=jari; 
 	var t=tinggi;
  	var luasalas = phi*r*r;
   	var volume=luasalas * t;
   	return parseFloat(volume);
   }

console.log(volumetabung(7,10)+" m3");