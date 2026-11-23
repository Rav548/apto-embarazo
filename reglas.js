// Reglas de alimentación segura en el embarazo (España). Se aplican sobre texto en minúsculas y sin tildes.
// Fuentes principales: Ministerio de Derechos Sociales, Consumo y Agenda 2030 / AESAN («Alimentación segura durante
// el embarazo»), AESAN (mercurio en pescado), EFSA (cafeína) y revisiones sobre edulcorantes e infusiones.
// Orientación general: no sustituye a tu matrona o médico.
(function(){
var s=String.raw,A=[];
// R(nivel, patrón, nombre, motivo, opciones): x = si coincide, no aplica; r = además debe coincidir;
// c = deja de ser problema si se cocina a más de 71 ºC; t = se relaja con inmunidad a la toxoplasmosis.
function R(l,p,n,m,o){var x=o||{};x.l=l;x.p=p;x.n=n;x.m=m;A.push(x)}

// ---- Pescado y marisco ----
R("evitar",s`pez espada|emperador|tiburon|cazon|marrajo|mielga|pintarroja|tintorera|atun rojo|\blucio\b`,"Pescado con mucho mercurio","La AESAN recomienda evitarlo en el embarazo: acumula metilmercurio, que puede dañar el sistema nervioso del bebé. Mejor pescado pequeño (sardina, boquerón, merluza, salmón), 3-4 raciones por semana. El cazón es un tiburón.");
R("evitar",s`boquerones? (al |en |a la )?vinagr|boquerones?\b.{0,80}\bvinagre|boquerones? marinad|pescado (crudo|marinado)|salmon (crudo|marinado)|ceviche|\bsushi|sashimi|\bpoke\b|carpaccio de (pescado|salmon|atun)|tartar de (atun|salmon|pescado)|gravlax|arenque marinado|anchoas? en vinagre`,"Pescado crudo o marinado","Sushi, sashimi, ceviche, carpaccio o boquerones en vinagre: se recomienda evitarlos por listeria y anisakis; el vinagre no garantiza eliminarlos. Seguro: pescado bien cocinado.");
R("evitar",s`salmon ahumado|pescado ahumado|trucha ahumada|bacalao ahumado|arenque ahumado|ahumado de (salmon|pescado)`,"Pescado ahumado refrigerado","Los ahumados refrigerados pueden tener listeria. Cocinado a más de 71 ºC (en una pasta, un revuelto…) sí se puede.",{c:1});
R("evitar",s`\bostras?\b|almejas? crudas?|mejillones? crudos?|bivalvos? crudos?`,"Moluscos crudos","Ostras, almejas o mejillones crudos: evitar (virus y bacterias). Bien cocinados, sí.",{x:s`salsa de ostras?`,c:1});
R("ok",s`\batun\b`,"Atún en conserva","Las latas usan atunes pequeños y la AESAN solo restringe expresamente el atún rojo. Varía el pescado: 3-4 raciones por semana, sobre todo azul.",{x:s`atun rojo`});
R("precaucion",s`anchoa`,"Anchoas (semiconserva)","Suelen tomarse sin cocinar. Mejor evitarlas o consultarlo; cocinadas (pizza, horno) no hay problema.",{c:1});

// ---- Carnes y embutidos ----
R("evitar",s`chorizo|salchichon|salami|\bfuet|longaniza|sobrasada|lomo embuchado|cecina|bresaola|pancetta|\bspeck|jamon(?! cocido| york| de york)|paleta (iberica|serrana|curada)|lomo (curado|iberico)|cana de lomo|morcon|\bcular\b`,"Embutido curado (crudo)","Si no estás inmunizada frente a la toxoplasmosis (tu analítica lo dice), el Ministerio recomienda evitar los crudos curados (chorizo, salchichón, salami, jamón curado…). Cocinados a más de 71 ºC (guisados, pizza, rehogados) sí se pueden tomar. Congelar ayuda frente a la toxoplasmosis, pero no frente a la listeria.",{c:1,t:1});
R("evitar",s`jamon cocido|jamon york|jamon de york|fiambre|mortadela|chopped|pechuga de (pavo|pollo)|pavo cocido|lacon|embutido loncheado|loncheado`,"Fiambre / embutido loncheado","El Ministerio recomienda evitar los productos cárnicos loncheados envasados (listeria). Sí se pueden tomar cocinados a más de 71 ºC: en croquetas, rehogados, pizzas…",{c:1});
R("precaucion",s`salchicha|frankfurt|morcilla|butifarra|embutido|beicon|bacon`,"Salchichas y embutidos cocidos","Listos para consumir y refrigerados: mejor recalentarlos a más de 71 ºC antes de tomarlos.",{c:1});
R("evitar",s`\bpate\b|\bfoie|mousse de higado|\bhigado\b`,"Paté / hígado","Los patés refrigerados deben evitarse (listeria) y el hígado tiene muchísima vitamina A, que en exceso daña al feto.");
R("evitar",s`carpaccio|steak tartar|tartar de (carne|ternera|buey|vaca)|carne cruda|hamburguesa poco hecha`,"Carne cruda o poco hecha","Evitar (toxoplasma, listeria, salmonela). La carne debe llegar a 71 ºC en el centro.");
R("precaucion",s`\bcerdo|\bcarne|paleta|panceta|magro|vacuno|\bternera|\bpavo|\bpollo|tocino`,"Producto cárnico","Debe estar bien cocinado (71 ºC en el centro). Si es crudo o curado (se come sin cocinar), mira las advertencias de embutidos.",{c:1});

// ---- Huevo ----
R("evitar",s`huevo crudo|yema cruda|clara cruda|ponche de huevo|(mayonesa|alioli|all i oli|merengue|mousse|tiramisu|helado|natillas|salsa holandesa)s? casera?s?`,"Huevo crudo","Evitar huevo crudo y preparaciones caseras con él (mayonesa, alioli, mousse, merengue, tiramisú, helado): salmonela.");
R("ok",s`mayonesa|alioli|all i oli|salsa tartara|salsa rosa`,"Salsas industriales con huevo","Las industriales llevan huevo pasteurizado (suele indicarse); lo que hay que evitar es la casera. Una vez abiertas, en el frigorífico.",{x:s`casera?`});

// ---- Lácteos ----
var Q=s`brie|camembert|\bfeta\b|burgos|mozzarella|burrata|ricotta|requeson|cuajada|mascarpone|queso de untar|queso crema|philadelphia|queso cremoso|queso fresco|queso de cabra|queso latino|panela|cottage|queso blando|queso de pasta blanda|torta del casar`,B=s`roquefort|gorgonzola|cabrales|queso azul`;
R("evitar",s`leche cruda|queso de leche cruda|leche sin pasteurizar|queso sin pasteurizar|leche no pasteurizada`,"Leche cruda","Evitar leche y quesos de leche cruda: listeria. Elige leche pasteurizada o UHT.");
R("precaucion",B,"Queso azul","Comprueba que el queso azul en concreto esté hecho con leche pasteurizada (el «pasteurizado» de la etiqueta puede referirse a otro ingrediente). Quita la corteza. Cocinado a más de 71 ºC no hay problema.",{c:1});
R("precaucion",Q,"Queso fresco o de pasta blanda","El Ministerio recomienda evitarlos si la etiqueta no dice que están hechos con leche pasteurizada. Quita siempre la corteza. Cocinados (gratinados, a más de 71 ºC) no hay problema.",{x:"pasteuriz|"+B,c:1});
R("ok",Q,"Queso blando (consta pasteurizado)","En el texto consta «pasteurizado»: riesgo bajo. Quita siempre la corteza.",{r:"pasteuriz",x:B});
R("evitar",s`queso rallado|rallado de queso|queso en lonchas|queso loncheado|lonchas de queso|queso lonchas`,"Queso rallado o en lonchas industrial","El Ministerio recomienda evitar los quesos rallados o loncheados industriales (listeria). Gratinados a más de 71 ºC sí.",{c:1});

// ---- Vegetales y preparados ----
R("evitar",s`brotes? de (soja|alfalfa)|germinados?|\balfalfa\b|brotes crudos`,"Brotes crudos","Los brotes crudos (soja, alfalfa…) se recomienda evitarlos; cocinados no hay problema.",{c:1});
R("precaucion",s`ensalada embolsada|ensalada lista|ensalada preparada|cuarta gama|lechuga troceada`,"Ensalada embolsada","Lávala y desinféctala en casa antes de tomarla (4 gotas de lejía apta para agua de bebida por litro, 10 minutos, y aclara bien).",{c:1});
R("evitar",s`sandwich|bocadillo|\bwrap\b|bocata|ensaladilla|ensalada de (pasta|arroz|pollo|atun|cuscus)|plato preparado|comida preparada`,"Sándwich o plato preparado refrigerado","El Ministerio recomienda evitar los sándwiches y platos preparados envasados con vegetales, huevo, carne, fiambre o pescado (listeria). Recalentados a más de 75 ºC sí.",{c:1});

// ---- Bebidas ----
var AL=s`\b(alcohol|etanol|vino|cerveza|licor|ron|whisky|vodka|ginebra|brandy|cava|sidra|vermut|champan|sangria|aguardiente|orujo|pacharan|tequila)\b`,SA=s`sin alcohol|0,0|0\.0|desalcoholizad|alcohol 0|cero alcohol|alcohol cero`;
R("evitar",AL,"Alcohol","No se recomienda ningún consumo de alcohol en el embarazo. En alimentos cocinados la cantidad es pequeña, pero mejor evitar productos con licor o alcohol añadido.",{x:SA});
R("precaucion",AL,"Bebida «sin alcohol»","Las «sin alcohol» pueden contener hasta un 0,5 % de alcohol; las 0,0 % suelen aceptarse. Consúltalo con tu matrona.",{r:SA});
R("evitar",s`bebida energetica|energy drink|taurina|guarana`,"Bebida energética","Llevan mucha cafeína y otros estimulantes: mejor evitarlas. El límite en el embarazo es 200 mg de cafeína al día sumando todas las fuentes.");
R("precaucion",s`cafeina|\bcafe\b|extracto de cafe|\bte (verde|negro|blanco|rojo|matcha)|\bmatcha\b|extracto de te|\bteina\b|yerba mate|hierba mate|nuez de cola|extracto de cola|coca cola|pepsi|refresco de cola|bebida de cola`,"Cafeína","Límite en el embarazo: 200 mg de cafeína al día en total (EFSA), sumando café, té, cola, chocolate y energéticas. Si la etiqueta indica los mg, cuéntalos.",{x:s`descafeinad|sin cafeina`});
R("ok",s`cacao|chocolate`,"Cacao / chocolate","Contiene algo de cafeína (cuéntala dentro de los 200 mg al día); por lo demás, sin problema.");
R("precaucion",s`(zumo|jugo|smoothie|batido).{0,40}(sin pasteurizar|prensado en frio|cold press|recien exprimido)|prensado en frio|cold press`,"Zumo no pasteurizado","Toma solo zumos recién exprimidos en casa o envasados pasteurizados.",{x:"pasteurizad"});
R("precaucion",s`kombucha`,"Kombucha","Suele ser sin pasteurizar y la fermentación deja trazas de alcohol: mejor evitarla.");

// ---- Plantas e infusiones ----
R("evitar",s`regaliz|glicirric|glycyrrhiz`,"Regaliz","Se desaconseja en el embarazo (puede subir la tensión y se ha relacionado con parto prematuro).");
R("evitar",s`poleo|salvia|boldo|\bruda\b|ruibarbo|agracejo|eucalipto|artemisa|ginseng|ginkgo|hierba de san juan|hiperico|cohosh|dong quai|\baloe\b|tanaceto|sabina|cimicifuga|\bsen\b|hoja de (estevia|stevia)`,"Planta desaconsejada en el embarazo","Estas plantas se desaconsejan en el embarazo (pueden provocar contracciones, subir la tensión o tener efectos tóxicos). Mejor evitarlas.");
R("precaucion",s`valeriana|equinacea|hierba luisa|melisa|pasiflora|lavanda|espino albar|fucus|cola de caballo|rosa mosqueta|hibisco|diente de leon|calendula`,"Planta con seguridad no demostrada","No hay datos suficientes de seguridad en el embarazo y algunas fuentes la desaconsejan: consulta antes de tomarla de forma regular.");
R("precaucion",s`manzanilla|\btila\b|hinojo|anis estrellado`,"Infusión a moderar","Solo de forma esporádica y en poca cantidad (como mucho 1-2 tazas al día); consúltalo con tu matrona.");
R("ok",s`jengibre|rooibos|azahar`,"Jengibre / rooibos / azahar","Se consideran compatibles en cantidades normales.");
R("precaucion",s`\binfusion|tisana|\bplantas?\b|hierbas`,"Infusión o planta sin especificar","Si no se concreta la planta, consulta antes de tomarla.");

// ---- Edulcorantes ----
R("evitar",s`sacarina|ciclamato|\be ?95[24]\b`,"Sacarina / ciclamato","Por precaución se recomienda evitarlos en el embarazo (la sacarina atraviesa la placenta y se elimina lentamente del feto; no hay daño demostrado).");
R("ok",s`aspartamo|acesulfamo|sucralosa|estevia|stevia|glucosidos de esteviol|neotamo|taumatina|neohesperidina|\be ?(950|951|955|957|959|960|961|962)\b`,"Edulcorante autorizado","Admitidos con moderación dentro de la ingesta diaria admisible. Aspartamo: no si hay fenilcetonuria (la etiqueta pone «contiene una fuente de fenilalanina»).");
R("ok",s`sorbitol|xilitol|maltitol|manitol|eritritol|\be ?(420|421|965|967|968)\b|poliol`,"Polioles","Sin problema específico; en exceso son laxantes.");

// ---- Vitamina A y complementos ----
R("evitar",s`aceite de higado`,"Aceite de hígado (vitamina A)","Muy rico en vitamina A: en exceso daña al feto. Evitar.");
R("precaucion",s`retinol|palmitato de retinilo|acetato de retinilo`,"Vitamina A (retinol)","El exceso de vitamina A es perjudicial en el embarazo. Toma complementos solo si te los prescribe tu médico.");
R("precaucion",s`complemento alimenticio|suplemento`,"Complemento alimenticio","El Ministerio recomienda tomar solo los complementos de vitaminas y minerales que te prescriba tu médico.");

function norm(t){return String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
var CARN=["Embutido curado (crudo)","Fiambre / embutido loncheado","Salchichas y embutidos cocidos","Carne cruda o poco hecha","Paté / hígado"];
// o = {cocinado: lo cocinará a más de 71 ºC, inmune: inmunizada frente a la toxoplasmosis}
window.evaluar=function(raw,o){
  o=o||{};
  var t=norm(raw).replace(/\b(sabor|aroma|con sabor)( natural)?( a| de)? [a-z]+/g," "),seen={},hits=[];
  A.forEach(function(r){
    if(seen[r.n])return;
    var m=t.match(new RegExp(r.p));if(!m)return;
    if(r.x&&new RegExp(r.x).test(t))return;
    if(r.r&&!new RegExp(r.r).test(t))return;
    if(r.n==="Producto cárnico"&&CARN.some(function(n){return seen[n]}))return;
    var l=r.l,msg=r.m;
    if(l!=="ok"&&o.cocinado&&r.c){l="ok";msg="Bien cocinado (más de 71 ºC en el centro) deja de ser un problema."}
    else if(l==="evitar"&&o.inmune&&r.t){l="precaucion";msg="Con inmunidad a la toxoplasmosis confirmada por tu médico, el Ministerio lo permite. El loncheado envasado conviene cocinarlo igualmente."}
    seen[r.n]=1;hits.push({l:l,n:r.n,m:msg,w:m[0].trim()});
  });
  var rk={evitar:0,precaucion:1,ok:2};hits.sort(function(a,b){return rk[a.l]-rk[b.l]});
  var v=hits.some(function(h){return h.l==="evitar"})?"evitar":hits.some(function(h){return h.l==="precaucion"})?"precaucion":"ok";
  return{v:v,h:hits};
};
})();
