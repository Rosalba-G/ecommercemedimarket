import './App.css';
import Encabezado from './componentes/encabezado/Encabezado';
import Carrito from './componentes/carrito/Carrito';
import { useState } from 'react';
import PieDePagina from './componentes/pie-de-pagina/PieDePagina';
import ModalLogin from './componentes/modal-login/ModalLogin';
import ModalRegistro from './componentes/modal-registro/ModalRegistro';
import ModalGestionDatos from './modal-gestion-datos/ModalGestionDatos';
import Inicio from './inicio/Inicio';
import Contacto from './componentes/contacto/Contacto';
import ListaDeProductos from './componentes/lista_de_productos/ListaDeProductos';

function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const mostrarCarrito = () => {setCarritoVisible(true)};
  const cerrarCarrito = () => {setCarritoVisible(false)};
  return (<>
  <Encabezado mostrarCarrito={mostrarCarrito}></Encabezado>

  <main>

    
  <Inicio></Inicio>

  <section id="productos">
      <h2>Catálogo de productos</h2>
      <input type="text" id="buscador" placeholder="Buscar producto..." onkeyup="buscarProducto()"/>
      <br/>
      <select id="categoria" onchange="filtrarPorCategoria()">
        <option value="">Todas las categorías</option>
        <option value="Medicamentos">Medicamentos</option>
        <option value="Vitaminas y suplementos">Vitaminas y suplementos</option>
        <option value="Cuidado personal">Cuidado personal</option>
        <option value="Equipo médico">Equipo médico</option>
      </select>
    </section>

    <ListaDeProductos></ListaDeProductos> 
  
    <Contacto></Contacto> 

    <PieDePagina></PieDePagina>

    <Carrito visible={carritoVisible} cerrarCarrito={cerrarCarrito}></Carrito>

    <ModalRegistro></ModalRegistro>

    <ModalLogin></ModalLogin>

    <ModalGestionDatos></ModalGestionDatos> 

    <script src="js/index.js"></script>
    </main>
    </>
  );
}

export default App;
