import tipoGastos from '../assets/tipos-gasto.json'

export default function TipoGastoListSelection(){
    return (
        <ul className="flex flex-wrap gap-4 w-[82%] mx-auto">
            {tipoGastos.map((gasto) => (
                <li key={gasto.nome}>
                    <img src={gasto.imagem}/>
                </li>
            ))}
        </ul>
    );
}