function ModalGestionDatos(props) {
    return (
        <div id="modal-gestion-datos" class="modal">
      <div class="modal-contenido">
        <span class="cerrar">&times;</span>
        <h2>Gestión de datos personales</h2>
        <form id="form-gestion-datos" onsubmit="actualizarDatosPersonales(event)">
          <label for="nombre-gestion">Nombre:</label>
          <input type="text" id="nombre-gestion" required/><br/>
          <label for="direccion-gestion">Dirección de envío:</label>
          <input type="text" id="direccion-gestion" required/><br/>
          <label for="telefono-gestion">Teléfono:</label>
          <input type="text" id="telefono-gestion" required/><br/>
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
    );
}

export default ModalGestionDatos;   
