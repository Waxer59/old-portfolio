import type { ProyectInterface } from '../../constants/ProyectsData'
import { FaLink, FaGithub } from 'react-icons/fa/index'

const ProyectItem: React.FC<ProyectInterface> = ({
  name,
  img,
  desc,
  links
}) => {
  return (
    <li
      data-aos="zoom-in-up"
      className="shadow-xl flex flex-col p-6 w-[70%] lg:w-[30%] md:w-[35%] justify-center rounded-3xl bg-secondaryColor">
      <img
        src={`/proyects/${img}.webp`}
        width="650"
        height="450"
        className="block mx-auto h-full md:h-[200px] w-full p-[10px] object-cover rounded-[15px]"
        alt={`${name} wadev project`}
      />
      <h3 className="border-t-[1px] border-solid border-gray pt-[20px] pb-0 text-2xl text-center font-semibold">
        {name}
      </h3>
      <p className="[text-wrap:balance] my-[18px] text-xl sm:text-2xl md:text-xl text-center">
        {desc}
      </p>
      <ul className="flex justify-evenly p-0 mt-auto pb-[30px]">
        <li key={links.repo} className="p-0 inline shadow-none">
          <a
            href={links.repo}
            aria-label={`${name} github proyect`}
            target="_blank"
            className="transition-colors hover:text-hoverColor"
            rel="noreferrer">
            <FaGithub className="text-[2.5rem]" />
          </a>
        </li>
        {links.url !== undefined && (
          <li key={links.url} className="p-0 inline shadow-none">
            <a
              href={links.url}
              aria-label={`${name} proyect page`}
              className="transition-colors hover:text-hoverColor"
              target="_blank"
              rel="noreferrer">
              <FaLink className="text-[2.5rem]" />
            </a>
          </li>
        )}
      </ul>
    </li>
  )
}

export default ProyectItem
