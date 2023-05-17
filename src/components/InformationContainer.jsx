import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"; 

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return <section id="information"> 
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <h3>Telefone</h3>
            <p>11 941698732</p>
        </div>

        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <h3>E-mail</h3>
            <p>prfchacara8@gmail.com</p>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <h3>Localização</h3>
            <p>Pirapora do bom jesus / SP</p>
        </div>
        </section>
}

export default InformationContainer