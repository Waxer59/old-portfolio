import type { ProyectInterface } from './ProyectsData'
import { FaLink, FaGithub } from 'react-icons/fa/index'

export const ProyectItem = ({
  name,
  img,
  desc,
  links
}: ProyectInterface): JSX.Element => {
  return (
    <li data-aos="zoom-in-up">
      <img
        src={`/images/proyects/${img}`}
        alt={`${name} photo`}
        loading="lazy"
      />
      <h3>{name}</h3>
      <p>{desc}</p>
      <ul className="proyectsLinks">
        {links.repo !== null && (
          <li key={links.repo}>
            <a
              href={links.repo}
              aria-label={`${name} github proyect`}
              target="_blank"
              rel="noreferrer">
              <FaGithub className="proyects-icon" />
            </a>
          </li>
        )}
        {links?.url !== null && (
          <li key={links.url}>
            <a
              href={links.url}
              aria-label={`${name} proyect page`}
              target="_blank"
              rel="noreferrer">
              <FaLink className="proyects-icon" />
            </a>
          </li>
        )}
      </ul>
    </li>
  )
}
