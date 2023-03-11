import ProyectItem from './ProyectItem'
import { PROYECTS_DATA } from './ProyectsData'

const Proyects: React.FC = () => {
  return (
    <div className="container">
      <div id="proyects">
        <h2 className="text-[3rem] font-400 text-center mt-[40px] mb-[100px]">
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
