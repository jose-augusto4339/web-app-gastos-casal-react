
import buttonCadastraGasto from './assets/images/button-cadastra-gasto.svg'
import CardGasto from './components/CardGasto'
import Header from './components/Header.jsx'
import NovoGastoModal from './components/NovoGastoModal.jsx'

import { useRef } from "react";

function App() {
  const modal = useRef();

  function handleOpenModal(){
    console.log("Estive aqui 1")
    modal.current.open()
  }

  return (
    <>
      <NovoGastoModal ref={modal} />
      <Header></Header>
      <aside></aside>
      <main>
        <CardGasto></CardGasto>
      </main>
      <button  onClick={handleOpenModal} className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <img src={buttonCadastraGasto}/>
      </button>
    </>
  )
}

export default App
