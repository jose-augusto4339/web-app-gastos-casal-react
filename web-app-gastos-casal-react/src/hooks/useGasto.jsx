import { useState } from "react"

function useGasto() {
    const [novoGastoValues, setNovoGastoValues] = useState({
        nome: '',
        data: '',
        valor: '',
        tipo: ''
    })

    const API_URL = import.meta.env.VITE_BASE_API_URL + '/gasto'

    async function salvaGasto(novoGasto){
        const user = 'user'
        const pass = '6d9477d2-4666-4a56-9023-c8722a8c7941'

        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(user + ':' + pass)
        }

        const response = await fetch(API_URL + "/salva", 
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(novoGasto)
            })
        
        if(!response.ok) {
            throw new Error("Erro ao salvar gasto!");
        }

        const data = await response.json();
        console.log("Custom hook " + data);
            
    }

    return {
        salvaGasto,
        novoGastoValues,
        setNovoGastoValues
    }
}

export default useGasto;