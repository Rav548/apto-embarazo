// Casos de prueba de las reglas. Cada uno dice qué resultado debe dar la app.
// Para añadir uno: C(nombre, texto, {v:"evitar|precaucion|ok", incluye:[nombres de regla], excluye:[...]}, {cocinado:true, inmune:true}).
(function(){
var L=[];
function C(n,t,e,o){L.push({n:n,t:t,e:e,o:o||{}})}
// ---- Casos reales que ya dieron problemas ----
C("Chorizo (el ingrediente no dice «chorizo»)","Chorizo picante extra . Magro, paleta de cerdo, panceta de cerdo, pimentón picante, ajo y sal.",{v:"evitar",incluye:["Embutido curado (crudo)"],excluye:["Producto cárnico"]});
C("Chorizo cocinado a más de 71 ºC","Chorizo picante extra . Magro, paleta de cerdo, pimentón, ajo y sal.",{v:"ok",incluye:["Embutido curado (crudo)"]},{cocinado:true});
C("Chorizo con inmunidad a la toxoplasmosis","Chorizo picante extra . Magro, paleta de cerdo, pimentón, ajo y sal.",{v:"precaucion",incluye:["Embutido curado (crudo)"]},{inmune:true});
C("Boquerones al vinagre","Boquerones al vinagre en aceite de girasol . boquerones, aceite de girasol, vinagre, sal",{v:"evitar",incluye:["Pescado crudo o marinado"]});
C("Dochi Cheesecake (queso azul «pasteurizado»)","Dochi Cheesecake . Leche desnatada reconstituida, azúcar, harina de trigo, queso blanco pasteurizado con queso azul fundido (2,8%), nata",{v:"precaucion",incluye:["Queso azul"],excluye:["Queso blando (consta pasteurizado)"]});
C("Atún en lata no es un problema","Atún claro en aceite de oliva . atún, aceite de oliva, sal",{v:"ok",incluye:["Atún en conserva"]});
// ---- Pescado y marisco ----
C("Atún rojo","Lomos de atún rojo . atún rojo, sal",{v:"evitar",incluye:["Pescado con mucho mercurio"]});
C("Cazón en adobo (es tiburón)","Cazón en adobo . cazón, vinagre, pimentón",{v:"evitar",incluye:["Pescado con mucho mercurio"]});
C("Salmón ahumado","Salmón ahumado . salmón, sal, humo",{v:"evitar",incluye:["Pescado ahumado refrigerado"]});
C("Salmón ahumado cocinado en una pasta","Salmón ahumado . salmón, sal, humo",{v:"ok"},{cocinado:true});
C("Sushi","Bandeja de sushi . arroz, salmón crudo, alga nori",{v:"evitar",incluye:["Pescado crudo o marinado"]});
C("Ostras","Ostras frescas . ostras",{v:"evitar",incluye:["Moluscos crudos"]});
C("Salsa de ostras no es molusco crudo","Salsa de ostras . agua, extracto de ostras, sal",{excluye:["Moluscos crudos"]});
C("Anchoas","Anchoas en aceite . anchoas, aceite de girasol, sal",{v:"precaucion",incluye:["Anchoas (semiconserva)"]});
// ---- Carnes ----
C("Jamón cocido en lonchas","Jamón cocido extra lonchas . jamón cocido, sal",{v:"evitar",incluye:["Fiambre / embutido loncheado"],excluye:["Embutido curado (crudo)"]});
C("Jamón curado","Jamón serrano reserva . jamón, sal",{v:"evitar",incluye:["Embutido curado (crudo)"]});
C("Salchichas cocidas","Salchichas Frankfurt . carne de cerdo, agua, sal",{v:"precaucion",incluye:["Salchichas y embutidos cocidos"]});
C("Paté","Paté de cerdo . hígado de cerdo, grasa, sal",{v:"evitar",incluye:["Paté / hígado"]});
C("Carpaccio","Carpaccio de ternera . carne cruda de ternera",{v:"evitar",incluye:["Carne cruda o poco hecha"]});
C("Carne picada (debe cocinarse bien)","Carne picada de vacuno . carne de vacuno",{v:"precaucion",incluye:["Producto cárnico"]});
C("«Sabor a jamón» no es jamón","Patatas fritas sabor jamón . patatas, aceite, sal, aroma de jamón",{v:"ok",excluye:["Embutido curado (crudo)"]});
// ---- Huevo y salsas ----
C("Mayonesa casera","Mayonesa casera . huevo, aceite, limón",{v:"evitar",incluye:["Huevo crudo"]});
C("Mayonesa industrial","Mayonesa . aceite de girasol, huevo pasteurizado, vinagre",{v:"ok",incluye:["Salsas industriales con huevo"]});
// ---- Lácteos ----
C("Mozzarella pasteurizada","Mozzarella . leche pasteurizada, sal, cuajo",{v:"ok",incluye:["Queso blando (consta pasteurizado)"]});
C("Mozzarella sin indicar pasteurización","Mozzarella . leche, sal, cuajo",{v:"precaucion",incluye:["Queso fresco o de pasta blanda"]});
C("Mozzarella en una pizza bien cocinada","Pizza mozzarella . harina, tomate, queso mozzarella",{v:"ok"},{cocinado:true});
C("Roquefort","Roquefort . leche de oveja pasteurizada, sal",{v:"precaucion",incluye:["Queso azul"]});
C("Leche cruda","Queso de leche cruda . leche cruda de oveja, sal",{v:"evitar",incluye:["Leche cruda"]});
C("Queso rallado industrial","Queso rallado . queso, almidón",{v:"evitar",incluye:["Queso rallado o en lonchas industrial"]});
// ---- Vegetales y preparados ----
C("Brotes de soja","Brotes de soja frescos . brotes de soja",{v:"evitar",incluye:["Brotes crudos"]});
C("Brotes de soja cocinados","Brotes de soja frescos . brotes de soja",{v:"ok"},{cocinado:true});
C("Ensalada embolsada","Ensalada lista para comer . ensalada embolsada, lechuga, canónigos",{v:"precaucion",incluye:["Ensalada embolsada"]});
C("Sándwich envasado","Sándwich mixto . pan, jamón cocido, queso",{v:"evitar",incluye:["Sándwich o plato preparado refrigerado"]});
// ---- Bebidas ----
C("Coca-Cola Zero (ciclamato y cafeína)","Coca-Cola Zero . agua carbonatada, colorante caramelo, edulcorantes (ciclamato, aspartamo, acesulfamo K), aroma natural, cafeína",{v:"evitar",incluye:["Sacarina / ciclamato","Cafeína"]});
C("Descafeinado no es cafeína","Café descafeinado . café descafeinado",{excluye:["Cafeína"]});
C("Cerveza","Cerveza . agua, malta de cebada",{v:"evitar",incluye:["Alcohol"]});
C("Cerveza 0,0 (no es alcohol, pero se consulta)","Cerveza 0,0 . agua, malta de cebada, lúpulo",{v:"precaucion",incluye:["Bebida «sin alcohol»"],excluye:["Alcohol"]});
C("Bebida energética","Bebida energética . agua, taurina, cafeína, guaraná",{v:"evitar",incluye:["Bebida energética"]});
C("Zumo prensado en frío sin pasteurizar","Zumo de naranja prensado en frío . naranja",{v:"precaucion",incluye:["Zumo no pasteurizado"]});
C("Zumo pasteurizado","Zumo de naranja pasteurizado . naranja",{v:"ok"});
C("Chocolate","Chocolate con leche . azúcar, manteca de cacao, leche",{v:"ok",incluye:["Cacao / chocolate"]});
// ---- Plantas ----
C("Poleo menta","Infusión poleo menta . poleo, menta",{v:"evitar",incluye:["Planta desaconsejada en el embarazo"]});
C("Regaliz","Regaliz rojo . azúcar, harina, regaliz",{v:"evitar",incluye:["Regaliz"]});
C("Manzanilla","Infusión de manzanilla . manzanilla",{v:"precaucion",incluye:["Infusión a moderar"]});
C("Jengibre","Infusión de jengibre . jengibre",{v:"ok",incluye:["Jengibre / rooibos / azahar"]});
// ---- Edulcorantes y vitaminas ----
C("Sacarina","Sacarina en pastillas . sacarina sódica",{v:"evitar",incluye:["Sacarina / ciclamato"]});
C("Aspartamo con moderación","Refresco sin azúcar . agua, aspartamo, acesulfamo K",{v:"ok",incluye:["Edulcorante autorizado"]});
C("Chicle con polioles","Chicle sin azúcar . sorbitol, xilitol",{v:"ok",incluye:["Polioles"]});
C("Retinol","Multivitamínico . vitamina A (retinol), vitamina C",{v:"precaucion",incluye:["Vitamina A (retinol)"]});
C("Aceite de hígado de bacalao","Aceite de hígado de bacalao . aceite de hígado de bacalao",{v:"evitar",incluye:["Aceite de hígado (vitamina A)"]});
// ---- Sin problema ----
C("Galletas normales","Galletas María . harina de trigo, azúcar, aceite de girasol, sal",{v:"ok",excluye:["Alcohol","Cafeína","Producto cárnico"]});
C("Pan, aceite y sal","Pan . harina de trigo, agua, sal, levadura",{v:"ok"});
window.CASOS=L;
})();
