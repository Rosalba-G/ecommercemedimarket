function ProductoDetalle(props) {
return (      
      <div class="producto" data-categoria = "Medicamentos">
            <img src = {props.imagen} alt = {props.nombre}/>
            <h3>{props.nombre}</h3>
            <p> <strong>Precio: </strong> {props.etiquetaPrecio} </p>
            <p>{props.disponible ? "Disponible" : "No disponible"}</p>
            {(props.disponible ? <button class="btn-agregar-carrito" onclick="carrito.agregar('Paracetamol', 10000, 'assets/img/Paracetamol.jpg')">Añadir al carrito</button> : null)}
      </div>  
);    
}

export default ProductoDetalle;
//<ProductoDetalle nombre={"Paracetamol"} etiquetaPrecio={"$10,000"} imagen={"assets/img/Paracetamol.jpg"} disponible></ProductoDetalle>