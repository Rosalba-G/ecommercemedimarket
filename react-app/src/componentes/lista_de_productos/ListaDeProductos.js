import React from "react";
import ProductoDetalle from "../productoDetalle/ProductoDetalle";
function ListaDeProductos() {
    return (  
        <section id="carrusel-productos">
      <h2>Resultados de productos</h2>
        <div class="carrusel">
            <div id="lista-productos" class="productos-carrusel">
                <ProductoDetalle nombre={"Paracetamol"} etiquetaPrecio={"$10,000"} imagen={"img/Paracetamol.jpg"} disponible></ProductoDetalle>
                <ProductoDetalle nombre={"Acetaminofen"} etiquetaPrecio={"$2,500"} imagen={"img/Acetaminofen.jpg"} disponible={false}></ProductoDetalle>

                <div class="producto" data-categoria="Vitaminas y suplementos">
                    <img src="assets/img/vitaminaC.jpg" alt="Vitamina C"/>
                    <h3>Vitamina C</h3>
                    <p><strong>Precio:</strong>$20,000</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Vitamina C', 20000, 'assets/img/vitaminaC.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Medicamentos">
                    <img src="assets/img/Mylanta.jpg" alt="Mylanta"/>
                    <h3>Mylanta-Antiacido</h3>
                    <p><strong>Precio:</strong>$1,900</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Mylanta', 1900, 'assets/img/Mylanta.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Cuidado personal">
                    <img src="assets/img/balsamo-labial.jpg" alt="Bálsamo labial"/>
                    <h3>Bálsamo labial</h3>
                    <p><strong>Precio:</strong>$5,000</p>
                    <p>No disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Bálsamo labial', 5000, 'assets/img/balsamo-labial.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Vitaminas y suplementos">
                    <img src="assets/img/Ensure.jpg" alt="Ensure"/>
                    <h3>Ensure</h3>
                    <p><strong>Precio:</strong>$99,200</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Ensure', 99200, 'assets/img/Ensure.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Equipo médico">
                    <img src="assets/img/termometro.jpg" alt="Termómetro"/>
                    <h3>Termómetro</h3>
                    <p><strong>Precio:</strong>$15,000</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Termómetro', 15000, 'assets/img/termometro.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Medicamentos">
                    <img src="assets/img/Azitromicina-MK-suspension-200mg-x15ml.jpg" alt="Azitromicina"/>
                    <h3>Azitromicina 500mg</h3>
                    <p><strong>Precio:</strong>$1,900</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Azitromicina', 1900, 'assets/img/Azitromicina-MK-suspension-200mg-x15ml.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Cuidado personal">
                    <img src="assets/img/Cepillo oral B.jpg" alt="Cepillo dental"/>
                    <h3>Cepillo dental</h3>
                    <p><strong>Precio:</strong>$5,000</p>
                    <p>No disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('Cepillo dental', 5000, 'assets/img/Cepillo oral B.jpg')">Añadir al carrito</button>
                </div>
                <div class="producto" data-categoria="Equipo médico">
                    <img src="assets/img/tensiometro_digital.jpg" alt="tensiometro digital"/>
                    <h3>Tensiometro digital</h3>
                    <p><strong>Precio:</strong>$40,700</p>
                    <p>Disponible</p>
                    <button class="btn-agregar-carrito" onclick="carrito.agregar('tensiometro digital', 40700, 'assets/img/tensiometro_digital.jpg')">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </section>
    
    );
}

export default ListaDeProductos;
