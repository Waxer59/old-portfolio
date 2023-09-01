import ProyectItem from './ProyectItem'
import { PROYECTS_DATA } from '../../constants/ProyectsData'

const Proyects: React.FC = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <div id="proyects">
        <h2 className="text-4xl sm:text-5xl font-400 text-center mt-10 mb-24">
          Proyects
        </h2>

        <ul className="p-0 list-none flex flex-wrap justify-evenly mt-0 gap-[25px]">
          {PROYECTS_DATA.map(({ name, desc, img, links }) => (
            <ProyectItem
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

export default Proyects
