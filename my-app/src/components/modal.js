import React, { useState } from 'react'

const Modal = props => {

  const [ isActive, setIsActive ] = useState(false)

  const changeModalState = modalState => setIsActive(modalState)

  return (
    <div>
      <button
        onClick={() => changeModalState(true)}
        type="button"
        className="button is-medium is-info is-outlined"
        data-toggle="modal"
        data-target="#exampleModal">
        Take Part?
      </button>
      <div className={`modal ${isActive ? 'is-active': ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Competition</p>
            <button onClick={() => changeModalState(false)} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <h1>We will Appriciate your interest in this Competition Our team will contact you Shortly</h1>
          </section>
          <footer className="modal-card-foot">
            <button onClick={() => changeModalState(false)} className="button button is-success">Thank you.!</button>
          </footer>
        </div>
      </div>
    </div>
  )
}


export default Modal