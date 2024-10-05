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

import {useState, useEffect} from 'react';

function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const productosDisponibles = [
    {
      nombre: "Paracetamol",
      etiquetaPrecio: "$10,000",
      imagen: "img/Paracetamol.jpg",
      disponible: true,
      categoria: "Medicamentos"
    },
    {
      nombre: "Acetaminofen",
      etiquetaPrecio: "$2,500",
      imagen: "img/Acetaminofen.jpg",
      disponible: false,
      categoria: "Medicamentos"
    },
    {
      nombre: "Vitamina C",
      etiquetaPrecio: "$20,000",
      imagen: "img/vitaminaC.jpg",
      disponible: true,
      categoria: "Vitaminas y suplementos"
    },
    {
      nombre: "Mylanta-Antiacido",
      etiquetaPrecio: "$1,900",
      imagen: "img/Mylanta.jpg",
      disponible: true,
      categoria: "Medicamentos"
    },
    {
      nombre: "Bálsamo labial",
      etiquetaPrecio: "$5,900",
      imagen: "img/balsamo-labial.jpg",
      disponible: true,
      categoria: "Cuidado personal"
    },
    {
      nombre: "Ensure",
      etiquetaPrecio: "$99,200",
      imagen: "img/Ensure.jpg",
      disponible: true,
      categoria: "Vitaminas y suplementos"
    },
    {
      nombre: "Termómetro",
      etiquetaPrecio: "$15,000",
      imagen: "img/termometro.jpg",
      disponible: true,
      categoria: "Equipo médico"
    },
    {
      nombre: "Azitromicina 500mg",
      etiquetaPrecio: "$1,900",
      imagen: "img/Azitromicina-MK-suspension-200mg-x15ml.jpg",
      disponible: true,
      categoria: "Medicamentos"
    },
    {
      nombre: "Cepillo dental",
      etiquetaPrecio: "$5,000",
      imagen: "img/Cepillo oral B.jpg",
      disponible: true,
      categoria: "Cuidado personal"
    },
    {
      nombre: "Tensiometro digital",
      etiquetaPrecio: "$40,700",
      imagen: "img/tensiometro_digital.jpg",
      disponible: true,
      categoria: "Equipo médico"
    }
  ];
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

    <ListaDeProductos agregarProducto={agregarProducto}></ListaDeProductos> 
  
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
