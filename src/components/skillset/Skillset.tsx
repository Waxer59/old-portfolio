import {
  GitIcon,
  JestIcon,
  DockerIcon,
  ReduxIcon,
  ReactIcon,
  TailwindIcon,
  MaterialUiIcon,
  BootstrapIcon,
  SassIcon,
  CssIcon,
  HtmlIcon,
  GraphQlIcon,
  SocketIoIcon,
  FirebaseIcon,
  MySqlDBIcon,
  PostgresDBIcon,
  MongoDBIcon,
  NestjsIcon,
  ExpressIcon,
  NodeIcon,
  JavaIcon,
  TypeScriptIcon,
  JavaScriptIcon
} from '../Icons'
import './Skillset.css'

export const Skillset = (): JSX.Element => {
  return (
    <div className="skillset" id="skillset">
      <div className="container">
        <h2>Skillset</h2>

        <ul className="skillset-list">
          <li data-aos="zoom-in-up">
            <h3>Languages</h3>
            <div className="languages">
              <JavaScriptIcon />

              <TypeScriptIcon />
              <JavaIcon />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3>Back-end</h3>
            <div className="languages">
              <NodeIcon />
              <ExpressIcon />
              <NestjsIcon />
              <MongoDBIcon />
              <PostgresDBIcon />
              <MySqlDBIcon />
              <FirebaseIcon />
              <SocketIoIcon />
              <GraphQlIcon />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3>Front-end</h3>
            <div className="languages">
              <HtmlIcon />
              <CssIcon />
              <SassIcon />
              <BootstrapIcon />
              <MaterialUiIcon />
              <TailwindIcon />
              <ReactIcon />
              <ReduxIcon />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3>DevOps & Testing</h3>
            <div className="languages">
              <DockerIcon />
              <GitIcon />
              <JestIcon />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
