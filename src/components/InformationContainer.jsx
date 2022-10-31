import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/information-container.sass'


const contacts = [
  { 'id': Math.random(), name: 'Telefone', contact: "(62) 9 99196-9319", icon: <AiFillPhone id="phone-icon" /> },
  { 'id': Math.random(), name: 'E-mail', contact: "leonardoferreiragraciano@gmail.com", icon: <AiOutlineMail id="email-icon" /> },
  { 'id': Math.random(), name: 'Localização', contact: "Goiânia / GO", icon: <AiFillEnvironment id="pin-icon" /> },
]

export const InformationContainer = () => {
  return (
    <section id="information-container">
      {contacts.map(({ id, name, contact, icon }) => (
        <div className="info-card" key={id}>
          {icon}
          <div className="">
            <h3>{name}</h3>
            <p>{contact}</p>

          </div>
        </div>
      )
      )}
    </section>
  )
}
