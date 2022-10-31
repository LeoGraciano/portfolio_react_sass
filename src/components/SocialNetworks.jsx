import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/components/social-networks.sass'

const socialNetworks = [
  { name: 'linkedin', url: 'https://www.linkedin.com/in/', icon: <FaLinkedinIn /> },
  { name: 'github', url: 'https://github.com/', icon: <FaGithub /> },
  { name: 'twitter', url: 'https://twitter.com/', icon: <FaTwitter /> },
  { name: 'instagram', url: 'https://www.instagram.com/', icon: <FaInstagram /> },
]

export const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(network => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>{network.icon}</a>
      )
      )}
    </section>
  )
}
