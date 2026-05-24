import tipoGastos from '../assets/tipos-gasto.json'

export default function TipoGastoListSelection({onGastoSelect}){

    function handleClick(gastoTipoNome){
        onGastoSelect(gastoTipoNome);
    }

    return (
        <div className="inline-block mx-auto">
            <ul className="flex flex-wrap justify-center gap-4">
                {tipoGastos.map((gasto) => (
                    <li key={gasto.nome} onClick={() => handleClick(gasto.nome)}>
                        <img src={gasto.imagem}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}