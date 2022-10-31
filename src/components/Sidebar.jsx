import Avatar from '../img/eu.jpg'
import "../styles/components/sidebar.sass"
import { InformationContainer } from './InformationContainer'
import { SocialNetworks } from './SocialNetworks'


export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Leonardo Ferreira Graciano" />
      <p className="title">Desenvolvedor FullStack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}
