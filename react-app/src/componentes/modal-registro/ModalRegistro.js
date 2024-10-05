function ModalRegistro(props) {
    return (
        <div id="modal-registro" class="modal">
        <div class="modal-contenido">
          <span class="cerrar">&times;</span>
          <h2>Registro de cuentas</h2>
          <form id="form-registro">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required/><br/>
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" required/><br/>
            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" required/><br/>
            <label for="email">Email:</label>
            <input type="email" id="email" required/><br/>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required/><br/>
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    );
}
export default ModalRegistro;