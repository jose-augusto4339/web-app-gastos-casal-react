import sanduicheImg from '../assets/images/button-sanduiche.svg'
import settingsImg from '../assets/images/button-settings.svg'

export default function Header(){
    return (
        <nav className="w-full h-">
          <ul className="flex justify-around items-center list-none p-0 m-0 mb-[80px] h-10">
            <li>
              <button value="menu">
                <img src={sanduicheImg} />
              </button>
            </li>
            <li>
              <span><strong>Hoje</strong></span>
            </li>
            <li>
              <button value="options">
                <img src={settingsImg}/>
              </button>
            </li>
          </ul>
        </nav>
    );
}