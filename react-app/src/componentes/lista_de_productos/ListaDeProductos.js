import React from "react";
import ProductoDetalle from "../productoDetalle/ProductoDetalle";
function ListaDeProductos(props) {
    return (  
        <section id="carrusel-productos">
        <h2>Resultados de productos</h2>
          <div class="carrusel">
              <div id="lista-productos" class="productos-carrusel">
              {props.productosFiltrados.length > 0 ? (
          props.productosFiltrados.map((producto) => (
  
              <ProductoDetalle nombre={producto.nombre} 
              precio={producto.precio}
              etiquetaPrecio={producto.etiquetaPrecio}
              imagen={producto.imagen}
              busqueda={props.busqueda} 
              disponible={producto.disponible}
              agregarProducto={props.agregarProducto}
              ></ProductoDetalle>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
              </div>
          </div>
      </section>
    
    );
}

export default ListaDeProductos;
