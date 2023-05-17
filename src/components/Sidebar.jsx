import SocialNetworks from "./socialNetworks";

import Avatar from "../img/eudnv.jpg";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Paulo Chacara" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        < InformationContainer/>
        <a href="https://www.canva.com/design/DAFgWsjyZBA/9SfxWMMlQvA4yR2ey4zLeA/edit?utm_content=DAFgWsjyZBA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn">
        Currículo
        </a>
    </aside>
};

export default Sidebar;