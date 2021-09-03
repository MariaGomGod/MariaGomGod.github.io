import React, { useState } from 'react'
import { Modal } from 'react-modal-overlay'
 
export default function ShippingCostCalculator() {

  const [isOpen, setIsOpen] = useState(false);

  const [numberOfPackages, setNumberOfPackages] = useState(0);
  const [packageWeight, setPackageWeight] = useState(0);
  const [shippingCostComputed, setShippingCostComputed] = useState(false);

  const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      setShippingCostComputed(true);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Calcula el importe de tu envío</button>
      <Modal className="overlay" show={isOpen} closeModal={() => {
          setIsOpen(false);
          setShippingCostComputed(false); // ocultamos el mensaje de éxito
          setPackageWeight(0); // vaciamos el peso de los paquetes
          setNumberOfPackages(0); // vaciamos el número de paquetes
    }}>
        <form onSubmit={handleSubmit}>
            <h4>Calcula el importe de tu envío</h4>
            <div>
                <input type="number" className="form-control" id="numberOfPackages" placeholder="Introduce el número de paquetes" min="1" required
                onInput={e => {
                  setNumberOfPackages(e.target.value);
                  setShippingCostComputed(false);
                }}></input>
            </div>
            <div>
                <input type="number" className="form-control" id="packageWeight" placeholder="Introduce el peso máximo de tus paquetes" min="0.5" step="0.05" required
                onInput={e => {
                  setPackageWeight(e.target.value);
                  setShippingCostComputed(false);
                }}></input>
            </div>
            
            <button type="submit" className="button">Calcula tu importe</button>
        </form>

        {
            shippingCostComputed ? 
            <p>{(numberOfPackages * packageWeight * 6).toFixed(2)}€</p> :
            <></>
        }

      </Modal>
    </div>
  )
}