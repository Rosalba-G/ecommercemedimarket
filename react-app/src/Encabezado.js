function Encabezado(props) {
    return (
        <header>
        <h1>Bienvenido a Medimarket</h1>
        <p>Tu farmacia en línea de confianza</p>
        <br/>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contactanos</a></li>
            <li><a href="#carrito">Carrito</a></li>
          </ul>
          <div class="btn-container">
            <button id="btn-abrir-login" class="btn-registro">Iniciar sesión</button>
            <button id="btn-abrir-registro" class="btn-registro">Registrarse</button>
            <button id="btn-abrir-carrito" class="btn-carrito" onClick={props.mostrarCarrito}><img src="img/carrito-de-compras.png" alt="logo"/></button>
            <button id="btn-abrir-gestion-datos" class="btn-gestion-datos">
              <img src="img/person-circle.svg" alt="Icono de cuenta" class="icono-cuenta"/>
            </button>
          </div>
        </nav>
      </header>
    );
}

export default Encabezado;