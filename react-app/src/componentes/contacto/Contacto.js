function Contacto(props) {
    return (
        <section id="contacto">
      <div class="contacto">
        <h2>Formulario de contacto</h2>
        <p>Escríbenos y en breve nos pondremos en contacto contigo</p>
        <form id="form-contacto" class="form" aling="center">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" required/><br/>
          <label for="email">Email:</label>
          <input type="email" id="email" required/><br/>
          <label for="telefono">Teléfono:</label>
          <input type="text" id="telefono" required/><br/>
          <label for="asunto">Asunto:</label>
          <input type="text" id="asunto" required/><br/>
          <label for="mensaje">Mensaje:</label>
          <input type="text" id="mensaje" required/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
    );
}

export default Contacto;