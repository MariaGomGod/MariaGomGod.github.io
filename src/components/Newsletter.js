import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
 
export default function Newsletter() {

  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [userSubscribed, setUserSubscribed] = useState(false);

  const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      setUserSubscribed(true);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Suscríbete a nuestra Newsletter</button>
      <Modal className="overlay" show={isOpen} closeModal={() => {
          setIsOpen(false);
          setUserSubscribed(false); // ocultamos el mensaje de éxito
          setEmail(""); // vaciamos el email
    }}>
        <form onSubmit={handleSubmit}>
            <h4>Ponte al día de las últimas novedades</h4>
            <div>
                <input type="text" className="form-control" id="email" placeholder="Introduce tu e-mail aquí" maxLenght="200" required
                onInput={e => setEmail(e.target.value)}></input>
            </div>
            <div>
                <input type="checkbox" id="privacy-policy-checkbox" required></input>
                <label htmlFor="privacy-policy-checkbox">
                    He podido leer y entiendo la política de privacidad y cookies y acepto 
                    recibir comunicaciones comerciales de Planet Express a través de e-mail
                </label>
            </div>
            <button type="submit" className="button">Suscribir</button>
        </form>

        {
            userSubscribed ? 
            <p>E-mail: {email} registrado exitosamente.</p> :
            <></>
        }

      </Modal>
    </div>
  )
}