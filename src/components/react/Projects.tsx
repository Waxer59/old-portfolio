import { ProjectItem } from '.'
import { PROJECTS_DATA } from '../../constants/ProyectsData'

const Projects: React.FC = () => {
  return (
    <div className="max-w-[1440px] w-11/12 mx-auto">
      <div id="projects">
        <h2 className="text-4xl sm:text-5xl font-400 text-center mt-10 mb-24">
          Projects
        </h2>

        <ul className="p-0 list-none flex flex-wrap justify-evenly mt-0 gap-[25px]">
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
    </div>
  )
}

export default Projects
