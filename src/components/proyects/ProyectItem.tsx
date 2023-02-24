import type { ProyectInterface } from './ProyectsData'
import { FaLink, FaGithub } from 'react-icons/fa/index'

export const ProyectItem = ({ name, img, desc, links }: ProyectInterface) => {
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
        {links.repo && (
          <li key={links.repo}>
            <a
              href={links.repo}
              aria-label={`${name} github proyect`}
              target="_blank">
              <FaGithub className="proyects-icon" />
            </a>
          </li>
        )}
        {links?.url && (
          <li key={links.url}>
            <a
              href={links.url}
              aria-label={`${name} proyect page`}
              target="_blank">
              <FaLink className="proyects-icon" />
            </a>
          </li>
        )}
      </ul>
    </li>
  )
}
