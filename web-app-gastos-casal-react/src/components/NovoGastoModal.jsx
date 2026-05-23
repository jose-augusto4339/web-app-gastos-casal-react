import NovoGastoModalInput from "./NovoGastoInput";
import TipoGastoListSelection from "./TipoGastoListSelection";
import ButtonSalvarGasto from "./ButtonSalvarGasto";
import {useImperativeHandle, useRef, useState} from "react";

export default function NovoGastoModal({ref}){
    const dialog = useRef();
    const [novoGastoValues, setNovoGastoValues] = useState({
        nome: '',
        data: '',
        valor: '',
        tipo: ''
    })

    useImperativeHandle(ref, () => {
        return{
            open(){
                console.log("Estive aqui")
                dialog.current.showModal();
            }
        }
    });

    function handleValueChange(inputName, inputValue){
        setNovoGastoValues((prevValues) => {
            const novoGastoValues = {
                ...prevValues,
                [inputName]: inputValue
            }

            return novoGastoValues
        })
    }    

    function handleGastoSelection(){

    }
    
    console.log(novoGastoValues);

    return (
        <dialog ref={dialog} className="fixed bottom-0 left-0 w-full mx-auto h-[75%] bg-white rounded-b-2xl shadow-lg z-50" >
            <form method="dialog">
                <button>Close</button>
                <section className="mx-auto w-1/3 border order-red text-center">
                    <NovoGastoModalInput
                        label={"Nome do gasto"}
                        name={"nome"}
                        type={"text"}
                        onValueChange={handleValueChange}
                    />
                    <NovoGastoModalInput
                        label={"Data"}
                        name={"data"}
                        type={"date"}
                        onValueChange={handleValueChange}
                    />
                    <NovoGastoModalInput
                        label={"valor"}
                        name={"valor"}
                        type={"text"}
                        onValueChange={handleValueChange}
                    />
                    <TipoGastoListSelection onGastoSelect={handleGastoSelection}/>
                    <ButtonSalvarGasto/>
                </section>
            </form>
        </dialog>
    );
}