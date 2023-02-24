import { ProyectItem } from './ProyectItem'
import './Proyects.css'
import { PROYECTS_DATA } from './ProyectsData'

export const Proyects = (): JSX.Element => {
  return (
    <div className="container">
      <div className="proyects" id="proyects">
        <h2>Proyects</h2>

        <ul className="proyects-links">
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
