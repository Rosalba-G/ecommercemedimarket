import React from "react";
import ProductoDetalle from "../productoDetalle/ProductoDetalle";
function ListaDeProductos(props) {
    return (  
        <section id="carrusel-productos">
      <h2>Resultados de productos</h2>
        <div class="carrusel">
            <div id="lista-productos" class="productos-carrusel">
                <ProductoDetalle nombre={"Paracetamol"} precio={10000}  etiquetaPrecio={"$10,000"} imagen={"img/Paracetamol.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Acetaminofen"} precio={2500} etiquetaPrecio={"$2,500"} imagen={"img/Acetaminofen.jpg"} disponible={false} agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Vitaminas y suplementos"} precio={20000} etiquetaPrecio={"$20,000"} imagen={"img/vitaminaC.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Medicamentos"} precio={1900} etiquetaPrecio={"$1,900"} imagen={"img/Mylanta.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"cuidado personal"} precio={5900} etiquetaPrecio={"$5,900"} imagen={"img/balsamo-labial.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Vitaminas y suplementos"} precio={99200} etiquetaPrecio={"$99,200"} imagen={"img/Ensure.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Equipo médico"}  precio={15000} etiquetaPrecio={"$15,000"} imagen={"img/termometro.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Medicamento"} precio={1900} etiquetaPrecio={"$1,900"} imagen={"img/Azitromicina-MK-suspension-200mg-x15ml.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Cuidado personal"} precio={5000} etiquetaPrecio={"$5,000"} imagen={"img/Cepillo oral B.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
                <ProductoDetalle nombre={"Equipo médico"} precio={40700} etiquetaPrecio={"$40,700"} imagen={"img/tensiometro_digital.jpg"} disponible agregarProducto={props.agregarProducto}></ProductoDetalle>
            </div>
        </div>
    </section>
    
    );
}

export default ListaDeProductos;
