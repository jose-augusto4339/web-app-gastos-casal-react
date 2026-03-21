import cardIconGastoMercado from '../assets/images/card-icon-gasto-mercado.svg'
import cardIconData from '../assets/images/card-icon-data.svg'
import cardIconValor from '../assets/images/card-icon-valor.svg'
import CardInfo from './CardInfo'

export default function CardGasto(){
    return(
        <>
            <li className="font-bold text-my-pink-300 text-[14px] mb-[20px]">
                <h2 className="mb-[-30px] text-center">Nome gasto</h2>
                <main className="w-[355px] h-[90px] mx-auto flex flex-row items-center bg-my-pink-200  rounded">
                    <div className="w-[64px] h-[64px] mx-[10px] rounded-full bg-my-pink-100 flex items-center justify-center">
                        <span className="text-my-pink-200 text-[48px] font-bold">R</span>
                    </div>
                    <div className="w-[291px] mt-[20px]">
                        
                        <div className="flex flex-wrap gap-x-15">
                            <CardInfo icon={cardIconGastoMercado} value="Mercado"/>
                            <CardInfo icon={cardIconValor} value="R$ 900,00"/>
                            <CardInfo icon={cardIconData} value="01/02/2026"/>
                        </div>
                    </div>
                </main>
            </li>
        </>       
    )
}