import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/SocialNetworks.sass";

const socialNetworks = [

    { name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/paulo-c-8b4368259" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/PauloChacara"},
    { name: "instagram", icon: <FaInstagram/>, link: "https://instagram.com/_paulin006?igshid=MTIyMzRjYmRlZg=="},

];

const SocialNetworkContainer = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.link} className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
  
        ))}
      </section>
    );
  };
  
  export default SocialNetworkContainer;
  