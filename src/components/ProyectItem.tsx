import type { ProyectInterface } from './ProyectsData'
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
      className="shadow-xl flex flex-col p-[25px] w-[70%] lg:w-[30%] md:w-[35%] justify-center rounded-3xl bg-secondaryColor">
      <img
        src={`/images/proyects/${img}`}
        width="650"
        height="450"
        className="block mx-auto h-full md:h-[200px] w-full p-[10px]"
        alt={`${name} photo`}
      />
      <h3 className="border-t-[1px] border-solid border-gray pt-[20px] pb-0 text-[1.5rem] text-center font-semibold">
        {name}
      </h3>
      <p className="my-[18px] text-[1.5rem] leading-[2rem] md:text-[1.2rem] text-center sm:leading-[1.5rem]">
        {desc}
      </p>
      <ul className="flex justify-evenly p-0 mt-auto pb-[30px]">
        <li key={links.repo} className="w-auto p-0 inline shadow-none">
          <a
            href={links.repo}
            aria-label={`${name} github proyect`}
            target="_blank"
            role="link"
            className="text-secondary cursor-pointer"
            rel="noreferrer">
            <FaGithub className="text-[2.5rem]" />
          </a>
        </li>
        {links.url !== undefined && (
          <li key={links.url} className="w-auto p-0 inline shadow-none">
            <a
              href={links.url}
              aria-label={`${name} proyect page`}
              role="link"
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
