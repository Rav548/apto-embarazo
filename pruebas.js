// Pruebas automáticas de las reglas. Se ejecutan con:  node pruebas.js
global.window=global;
require("./reglas.js");require("./casos.js");
var fallos=0;
CASOS.forEach(function(c){
  var r=evaluar(c.t,c.o),nombres=r.h.map(function(x){return x.n}),err=[];
  if(c.e.v&&r.v!==c.e.v)err.push("resultado "+r.v+" (esperado "+c.e.v+")");
  (c.e.incluye||[]).forEach(function(n){if(nombres.indexOf(n)<0)err.push("falta «"+n+"»")});
  (c.e.excluye||[]).forEach(function(n){if(nombres.indexOf(n)>=0)err.push("sobra «"+n+"»")});
  r.h.forEach(function(x){if(!x.f||!x.m)err.push("«"+x.n+"» sin fuente o sin motivo")});
  if(err.length){fallos++;console.log("✗ "+c.n+": "+err.join("; "))}
});
console.log((CASOS.length-fallos)+" de "+CASOS.length+" pruebas correctas (reglas: "+REGLAS_INFO.n+", revisión "+REGLAS_INFO.rev+")");
process.exit(fallos?1:0);
