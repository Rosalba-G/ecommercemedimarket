function ModalLogin(props) {
    return (
        <div id="modal-login" class="modal">
        <div class="modal-contenido">
          <span class="cerrar">&times;</span>
          <h2>Iniciar sesión</h2>
          <form id="form-login">
            <label for="email-login">Email:</label>
            <input type="email" id="email-login" required/><br/>
            <label for="password-login">Contraseña:</label>
            <input type="password" id="password-login" required/><br/>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    );
} 
export default ModalLogin;  