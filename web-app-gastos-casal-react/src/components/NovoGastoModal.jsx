import {useImperativeHandle, useRef} from "react";

export default function NovoGastoModal({ref}){
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return{
            open(){
                console.log("Estive aqui")
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="fixed bottom-0 left-0 w-full mx-auto h-[75%] bg-white rounded-b-2xl shadow-lg z-50" >
            <form method="dialog" >
                <button>Close</button>
            </form>
        </dialog>
    );
}