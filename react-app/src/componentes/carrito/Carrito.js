import './Carrito.css';

function Carrito(props) {
    const style = {display:(props.visible? "flex" : "none") };
    return (
    <div id="modal-carrito-de-compras" class="modal modal-grande" style={style}>
        <div class="modal-contenido">
          <span id="cerrar-carrito" class="cerrar" onClick={props.cerrarCarrito}>&times;</span>
          <h2>Carrito de compras</h2>
          <div id="contenido-carrito-de-compras"></div>
        </div>
      </div>
    );
}

export default Carrito;