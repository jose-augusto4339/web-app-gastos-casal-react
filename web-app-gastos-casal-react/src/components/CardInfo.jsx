export default function CardInfo({icon, value}){
    return (
        <span className="flex gap-1">
            <img src={icon}/>
            <p>{value}</p>
        </span>
    )
}