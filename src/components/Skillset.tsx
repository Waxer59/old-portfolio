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
  JavaScriptIcon,
  RedisIcon,
  GoIcon
} from './Icons'

const Skillset: React.FC = () => {
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto" id="skillset">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <h2 className="text-[3rem] font-400 text-center mt-[40px] mb-[100px]">
          Skillset
        </h2>

        <ul className="flex flex-col gap-[50px] list-none">
          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              Languages
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <JavaScriptIcon />
              <TypeScriptIcon />
              <GoIcon />
              <JavaIcon />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              Back-end
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <NodeIcon />
              <ExpressIcon />
              <NestjsIcon />
              <MongoDBIcon />
              <PostgresDBIcon />
              <MySqlDBIcon />
              <FirebaseIcon />
              <RedisIcon />
              <SocketIoIcon />
              <GraphQlIcon />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              Front-end
            </h3>
            <div className="flex flex-wrap gap-[15px]">
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
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              DevOps & Testing
            </h3>
            <div className="flex flex-wrap gap-[15px]">
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

export default Skillset
