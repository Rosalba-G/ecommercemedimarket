import './Carrito.css';

function Carrito(props) {
    const style = {display:(props.visible? "flex" : "none") };

  const productos = props.productos;
  const setProductos = props.setProductos;

    const modificarCantidad = (producto, modificacion) => {
      producto.cantidad += modificacion;
      setProductos(productos.map(x=>x));
    }

    const eliminar = (producto) => {
      setProductos(productos.filter(x => x != producto));
    }

      let total = 0;
      productos.forEach(producto => total += producto.precio * producto.cantidad);

    return (
    <div id="modal-carrito-de-compras" className="modal modal-grande" style={style}>
        <div className="modal-contenido">
          <span id="cerrar-carrito" className="cerrar" onClick={props.cerrarCarrito}>&times;</span>
          <h2>Carrito de compras ({productos.length} productos agregados)</h2>
          <div id="contenido-carrito-de-compras">
            {productos.length > 0 && 
            <><table>
              <tr>
                <th></th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Valor por unidad</th>
                <th>Valor total</th>
                <th></th>
              </tr>
              {
                productos.map(producto => {
                  return(
                    <tr key={producto.nombre}>
                      <td><img src={producto.imagen}/></td>
                      <td>{producto.nombre}</td>
                      <td className="celda-cantidad">
                        <button disabled={producto.cantidad <= 1 } className="btn-modificar-cantidad" onClick={() => modificarCantidad(producto, -1)}>-1</button>
                        <span>{producto.cantidad}</span>
                        <button className="btn-modificar-cantidad" onClick={() => modificarCantidad(producto, 1)}>+1</button>
                        </td>
                      <td className="celda-valor">${producto.precio}</td>
                      <td className="celda-valor">${producto.precio * producto.cantidad}</td>
                      <td className="celda-accion">
                        <a onClick={()=>eliminar(producto)}>Eliminar</a>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
            <h3>Total del carrito ${total}</h3>
            </>
            }
            {productos.length == 0 && 
              <p>No se han seleccionado productos</p>
            }
          </div>
        </div>
      </div>
    );
}

export default Carrito;