import { ProjectItem } from '.'
import { PROJECTS_DATA } from '../../constants/ProyectsData'

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <h2 className="text-4xl sm:text-5xl font-400 text-center">Projects</h2>

      <ul className="p-0 list-none flex flex-wrap justify-evenly mt-24 gap-[25px]">
        {PROJECTS_DATA.map(({ name, desc, img, links }) => (
          <ProjectItem
            desc={desc}
            img={img}
            links={links}
            name={name}
            key={name}
          />
        ))}
      </ul>
    </div>
  )
}

export default Projects
