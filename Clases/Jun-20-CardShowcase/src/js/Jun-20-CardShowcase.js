
//en el html    <div id="contenedor-de-tarjetas"><div>
var contenedorTarjetasDiv = document.getElementById("contenedor-de-tarjetas");


var nuevaEtiquetaHtml = document.createElement("h1"); //<h1></h1>
nuevaEtiquetaHtml.textContent = "Hola mundirijillo";//<h1>Hola mundirijillo</h1>


nuevaEtiquetaHtml.classList.add("titulo-rojo");

// `
//     <h1 class=" titulo  tilulo-princioal  titulo-centrado titulo-con-funte-comix-sans" ><h1/>
//     <h1 class="titulo  tilulo-princioal  titulo-centrado titulo-con-funte-comix-sans titulo-rojo" ><h1/>
// `

nuevaEtiquetaHtml.classList.remove('titulo-con-funte-comix-sans');


// `
//     <h1 class="titulo  tilulo-princioal  titulo-centrado  titulo-rojo" ><h1/>
// `

nuevaEtiquetaHtml.classList.toggle("animate");
//agrega la clase si no esta y si el elemento ya tiene la clase la elimina
// `
//     <h1 class="titulo  tilulo-princioal  titulo-centrado  titulo-rojo animate" ><h1/>
// `
nuevaEtiquetaHtml.classList.toggle("animate");

// `
//     <h1 class="titulo  tilulo-princioal  titulo-centrado  titulo-rojo " ><h1/>
// `



var nuevaEtiquetaB = document.createElement("b");//<b></b>
nuevaEtiquetaB.textContent = "texto en negrita";//<b>texto en negrita</b>

var nuevaEtiquetaInput = document.createElement("input");  // <input />
nuevaEtiquetaInput.setAttribute("type", "checkbox");   //< input  type="checkbox"  />

// `
//     <input type="password" />
//     <div id="" class="" style=""   >    </div>
// `


nuevaEtiquetaHtml.appendChild(nuevaEtiquetaB);

// `
// <h1>Hola mundirijillo
//     <b>texto en negrita</b>
// </h1>
// `


contenedorTarjetasDiv.appendChild(nuevaEtiquetaHtml);

// `
//       <div id="contenedor-de-tarjetas"> 
//           <h1>Hola mundirijillo
//                 <b>texto en negrita</b>
//           </h1>
//       </div>
// `
contenedorTarjetasDiv.appendChild(nuevaEtiquetaInput);

// `
//       <div id="contenedor-de-tarjetas"> 
//           <h1>Hola mundirijillo
//                 <b>texto en negrita</b>
//           </h1>
//           < input  type="checkbox"  />
//       </div>
// `

var miNuevoInput = document.createElement("input"); // <input />
miNuevoInput.setAttribute("type", "checkbox");


contenedorTarjetasDiv.appendChild(miNuevoInput);



function funcionClick() {
    alert("Clink en mi TODO");
}

function eliminar(evento) {
    console.log("delete me");
    evento.target.parentElement.remove(evento.target);
}


var todoEtiqueta = document.getElementById("EtiquetaTodo");
todoEtiqueta.addEventListener("click", funcionClick, false);





var basureroEtiqueta = document.getElementById("basurero");
basureroEtiqueta.addEventListener("click", eliminar, false);