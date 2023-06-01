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

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const cartEmpty = document.querySelector('.cart-empty');
const total = document.querySelector('.cart-total');
const total_pagar = document.querySelector('.total-pagar')
const contador_productos = document.querySelector('#contador-productos')
try {
    //Cargar productos en pantalla principal
    const lista_productos = document.getElementById("lista_productos")
    let carrito = []
    

    productos.forEach((producto)=>{
        
        const funko = document.createElement("div");
        funko.className = "col";
        funko.innerHTML = `         <div class="card">
                                        <img src="./img/${producto.id}.png" class="card-img-top" alt="funko">
                                        <div class="card-body">
                                            <h5 id="idProducto" hidden>${producto.id}</h5>
                                            <h5 id="descripcion" class="card-title">${producto.descripcion}</h5>
                                            <h6>${producto.categoria}</h6>
                                            <p id="precio" class="card-text">Precio: U$S ${producto.precio}</p>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button id = "btnAgregarCarrito" class="btn btn-dark" type="button">Agregar al carrito</button>
                                            </div>
                                        </div>
                                    </div>`;
        lista_productos.append(funko);

        //Boton agregar a carrito
        let botonAgregar = funko.querySelector("#btnAgregarCarrito");

        //Evento agregar a carrito
        botonAgregar.addEventListener("click",() => {
           
        rowProduct.classList.remove('hidden')
        cartEmpty.classList.add('hidden')
        total.classList.remove('hidden')
            const info = {
                cantidad: 1,
                id: producto.id,
                descripcion: producto.descripcion,
                precio: producto.precio,
            }

            //actualizo el contador de cada producto en el carrito si existe
            if(carrito.some(c => c.id === info.id)){
                const itemsCarrito = carrito.map(item => {
                    if(item.id === info.id){
                        item.cantidad++
                        return item
                    }else{
                        return item
                    }
                })
                carrito = [...itemsCarrito]
            }else{
                carrito.push(info)
            }
            
            
            console.log(carrito)
            listaCarrito()
            //let descripcion = document.getElementById("idProdcuto");
            //console.log(`id porducto ${producto.id}`)
        })
            
    });

    //Funcion mostrar carrito
    const listaCarrito = ()=> {
        //Limpiar HTML
        rowProduct.innerHTML = ''

        let importeTotal = 0
        let totalItems = 0
        if(carrito.length !== 0){
            carrito.forEach(item => {
                const containerProducts = document.createElement('div')
                containerProducts.classList.add('cart-product')
    
                containerProducts.innerHTML = `
                    <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">${item.cantidad}</span>
                        <p class="titulo-producto-carrito">${item.descripcion}</p>
                        <span class="precio-producto-carrito">$ ${item.precio}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon-close"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                `
                rowProduct.append(containerProducts)
                //Boton eliminar
                let botonEliminar = containerProducts.querySelector(".icon-close");
                //Evento eliminar del carrito
                botonEliminar.addEventListener("click",() => {
                        eliminarItem(item)                
                    })
                importeTotal = importeTotal + parseInt(item.precio * item.cantidad) 
                totalItems = totalItems + item.cantidad
            })
            total_pagar.innerText = `$${importeTotal}`
            
        }else{
            rowProduct.classList.add('hidden')
            cartEmpty.classList.remove('hidden')
            total.classList.add('hidden')
        }
        
        contador_productos.innerText = `${totalItems}`
    }

    //Funcion eliminar carrito
    const eliminarItem = (item) => {
    carrito = carrito.filter(f => f.id !== item.id)
    listaCarrito()
}
} catch (error) {
    console.error("No es posible mostrar los item debido a " + error)
}



