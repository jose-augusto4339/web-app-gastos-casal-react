import buttonCadastraGasto from '../assets/images/button-cadastra-gasto.svg'

export default function ButtonCadastraGasto(){
    return(
        <button  className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
            <img src={buttonCadastraGasto}/>
        </button>
    )
}