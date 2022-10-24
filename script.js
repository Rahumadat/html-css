
/*Funcion para click en carro de compras*/////////

let carrito = document.querySelector(".signInCarro img");

carrito.addEventListener("click", function () {alert("Your cart is empty!"); })

/*Funcion para cambio de imagen onmouseover*/////////

let imagen = document.querySelector("#imagen");

function imagenCambiada () {
    imagen.src = "/images/assets/succulents-2.jpg";
    
}

function restaurarImagen () {
    imagen.src = "/images/assets/succulents-1.jpg";
}

imagen.addEventListener("mouseover", function () {
    imagenCambiada();
});

imagen.addEventListener("mouseout", function () {
    restaurarImagen();
});

/*Funcion para aceptar el cookie*/////////
let cookies = document.querySelector(".botonCookie");
let contenedorCookie = document.querySelector(".cookie");

function aceptarCookie() {
    contenedorCookie.remove();
};

cookies.addEventListener('click', function () {
    aceptarCookie();
})
