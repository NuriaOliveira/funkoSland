const productos = [
    {id:1, categoria:"STAR WARS", descripcion: "MEGA DATH VADER", precio: 100, stock: 50},
    {id:2, categoria:"STAR WARS", descripcion: "LUKE SKYWALKER", precio: 12, stock: 50},
    {id:3, categoria:"STAR WARS", descripcion: "WICKET", precio: 12, stock: 50},
    {id:4, categoria:"STAR WARS", descripcion: "C-3PO", precio: 12, stock: 50},
    {id:5, categoria:"STAR WARS", descripcion: "CHEWBACCA", precio: 15, stock: 50},
    {id:6, categoria:"STAR WARS", descripcion: "PRINCESS LEIA", precio: 12, stock: 50},
    {id:7, categoria:"STAR WARS", descripcion: "R2-D2", precio: 15, stock: 50},
    {id:8, categoria: "HARRY POTTER", descripcion: "HEDWING", precio: 12, stock: 50},
    {id:9, categoria: "HARRY POTTER", descripcion: "HERMAIONE", precio: 12, stock: 50},
    {id:10, categoria: "HARRY POTTER", descripcion: "DOBBY", precio: 12, stock: 50},
    {id:11, categoria: "HARRY POTTER", descripcion: "HARRY POTTER", precio:12, stock: 50},
    {id:12, categoria: "HARRY POTTER", descripcion: "SEVERYS SNAPE", precio:12, stock: 50},
    {id:13, categoria: "HARRY POTTER", descripcion: "ALBUS DUMBLEDORE", precio:12, stock: 50},
    {id:14, categoria: "HARRY POTTER", descripcion: "RON WASLEY", precio: 12, stock: 50},
    {id:15, categoria: "PIXAR", descripcion: "JUMBO WALL-E", precio: 40, stock: 50},
    {id:16, categoria: "PIXAR", descripcion: "SOX", precio: 12, stock: 50},
    {id:17, categoria: "PIXAR", descripcion: "BOO", precio: 12, stock: 50},
    {id:18, categoria: "PIXAR", descripcion: "BUZZ LIGHTYEAR", precio: 15, stock: 50},
];

try {
    //Cargar productos en pantalla principal
    let lista_productos = document.getElementById("lista_productos")

    productos.forEach((producto)=>{
        
        const funko = document.createElement("div");
        funko.className = "col";
        funko.innerHTML = `         <div class="card">
                                        <img src="./img/${producto.id}.png" class="card-img-top" alt="funko">
                                        <div class="card-body">
                                            <h5 id="idProducto" hidden>${producto.id}</h5>
                                            <h5 class="card-title">${producto.descripcion}</h5>
                                            <h6>${producto.categoria}</h6>
                                            <p class="card-text">Precio: U$S ${producto.precio}</p>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button id = "btnAgregarCarrito" class="btn btn-dark" type="button">Agregar al carrito</button>
                                            </div>
                                        </div>
                                    </div>`;
        lista_productos.append(funko);

        //Boton agregar a carrito
        let boton = funko.querySelector("#btnAgregarCarrito");

        boton.addEventListener("click",() => {
            
            let descripcion = document.getElementById("idProdcuto");
            console.log(`id porducto ${producto.id}`)})
            
    });

} catch (error) {
    console.error(error)
}

