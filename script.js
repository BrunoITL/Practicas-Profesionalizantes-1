const productosBlanqueria = [
    {
        nombre: "Sábanas",
        descripcion: "Fabricadas con hilo, de TODAS las medidas.",
        imagen: "imagenes/sabanas blancas.webp",
        linkWhatsApp: "https://wa.me/5493415764160?text=Hola!%20Me%20interesan%20las%20sabanas",
        tieneStock: true
    },
    {
        nombre: "Toallas",
        descripcion: "Suaves, ideales para cualquier uso.",
        imagen: "imagenes/toallas multicolor.webp",
        linkWhatsApp: "https://wa.me/5493415764160?text=Hola!%20Me%20interesan%20las%20toallas",
        tieneStock: true
    },
    {
        nombre: "Toallones",
        descripcion: "Grandes y pequeños, con estampa o lisos.",
        imagen: "imagenes/toallones multicolor.jpg",
        linkWhatsApp: "https://wa.me/5493415764160?text=Hola!%20Me%20interesan%20los%20toallones",
        tieneStock: false //sin stock para probar
    }
];

const contenedor = document.getElementById("contenedor-productos");

productosBlanqueria.forEach(producto => {
    const tarjetaProducto = `
        <article class="producto">
            <a href="${producto.linkWhatsApp}" target="_blank">
                <h2>${producto.nombre}</h2>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <span class="estado-stock ${producto.tieneStock ? 'en-stock' : 'sin-stock'}">
                    ${producto.tieneStock ? 'Disponible' : 'Consultar Stock'}
                </span>
            </a>
        </article>
    `;
    contenedor.innerHTML += tarjetaProducto;
});