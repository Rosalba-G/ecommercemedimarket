function ProductoDetalle(props) {
return (      
      <div alt="producto-detalle" className="producto" data-categoria = "Medicamentos">
            <img src = {props.imagen} alt = {props.nombre}/>
            <h3>{props.nombre}</h3>
            <p> <strong>Precio: </strong> {props.etiquetaPrecio} </p>
            <p>{props.disponible ? "Disponible" : "No disponible"}</p>
            {(props.disponible ? <button className="btn-agregar-carrito" onClick={() => props.agregarProducto(props.nombre, props.precio, props.etiquetaPrecio, props.imagen)}>Añadir al carrito</button> : null)}
      </div>  
);    
}

export default ProductoDetalle;