//Jorge Luis Zea
//Rosalba Giraldo
import './App.css';
import Encabezado from './componentes/encabezado/Encabezado';
import Carrito from './componentes/carrito/Carrito';
import PieDePagina from './componentes/pie-de-pagina/PieDePagina';
import ModalLogin from './componentes/modal-login/ModalLogin';
import ModalRegistro from './componentes/modal-registro/ModalRegistro';
import ModalGestionDatos from './modal-gestion-datos/ModalGestionDatos';
import Inicio from './componentes/inicio/Inicio';
import Contacto from './componentes/contacto/Contacto';
import ListaDeProductos from './componentes/lista_de_productos/ListaDeProductos';
import productosDisponibles from './componentes/lista_de_productos/ListaDeProductos.json';

import {useState, useEffect} from 'react';

function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const mostrarCarrito = () => {setCarritoVisible(true)};
  const cerrarCarrito = () => {setCarritoVisible(false)};
  
  const [busqueda, setBusqueda] = useState(''); 

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(''); 
  const [productosFiltrados, setProductosFiltrados] = useState(productosDisponibles);

  const agregarProducto = (nombre, precio, etiquetaPrecio, imagen) => {
    const productos = JSON.parse(sessionStorage.getItem('productos-carrito')) || [];
    const productoAgregado = productos.find(x => x.nombre == nombre);
    if (productoAgregado){
        productoAgregado.cantidad++;
    } else {
        productos.push({
            nombre,
            precio,
            etiquetaPrecio,
            cantidad: 1,
            imagen
        });
    }
    setProductos(productos.map(x=>x));
}

const [productos, setProductos] = useState(() => {
  const productosGuardados = sessionStorage.getItem('productos-carrito');
  return productosGuardados ? JSON.parse(productosGuardados) : [];
});

useEffect(() => {
  sessionStorage.setItem('productos-carrito', JSON.stringify(productos));
}, [productos]);

const buscarProducto = (event) => {
    
  const valorBusqueda = event.target.value;
  setBusqueda(valorBusqueda);


  const filtrados = productosDisponibles.filter((producto) =>
    producto.nombre.toLowerCase().includes(valorBusqueda.toLowerCase()) &&
    (categoriaSeleccionada === '' || producto.categoria === categoriaSeleccionada)
  );

  setProductosFiltrados(filtrados);
  
};

const filtrarPorCategoria = (event) => {

const categoria = event.target.value;
setCategoriaSeleccionada(categoria);
const filtrados = productosDisponibles.filter((producto) =>
  producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
  (categoria === '' || producto.categoria === categoria)
);

setProductosFiltrados(filtrados);

};

  return (<>
  <Encabezado mostrarCarrito={mostrarCarrito}></Encabezado>

  <main>

    
  <Inicio></Inicio>

  <section id="productos">
      <h2>Catálogo de productos</h2>
      <input type="text" id="buscador" placeholder="Buscar producto..." 
      
      value={busqueda}
        onKeyUp={buscarProducto} 
        onChange={(e) => setBusqueda(e.target.value)} />
      <br/>
      <select id="categoria"   value={categoriaSeleccionada} onChange={filtrarPorCategoria}>
        <option value="">Todas las categorías</option>
        <option value="Medicamentos">Medicamentos</option>
        <option value="Vitaminas y suplementos">Vitaminas y suplementos</option>
        <option value="Cuidado personal">Cuidado personal</option>
        <option value="Equipo médico">Equipo médico</option>
      </select>
    </section>

  
    <ListaDeProductos productosFiltrados={productosFiltrados} agregarProducto={agregarProducto} ></ListaDeProductos>  
  
    <Contacto></Contacto> 

    <PieDePagina></PieDePagina>

    <Carrito visible={carritoVisible} cerrarCarrito={cerrarCarrito} productos={productos} setProductos={setProductos}></Carrito>

    <ModalRegistro></ModalRegistro>

    <ModalLogin></ModalLogin>

    <ModalGestionDatos></ModalGestionDatos> 

    <script src="js/index.js"></script>
    </main>
    </>
  );
}


export default App;
