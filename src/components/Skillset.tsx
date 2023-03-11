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
              <JavaScriptIcon className="h-[50px] m-0 mb-[15px]" />
              <TypeScriptIcon className="h-[50px] m-0 mb-[15px]" />
              <JavaIcon className="h-[50px] m-0 mb-[15px]" />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              Back-end
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <NodeIcon className="h-[50px] m-0 mb-[15px]" />
              <ExpressIcon className="h-[50px] m-0 mb-[15px]" />
              <NestjsIcon className="h-[50px] m-0 mb-[15px]" />
              <MongoDBIcon className="h-[50px] m-0 mb-[15px]" />
              <PostgresDBIcon className="h-[50px] m-0 mb-[15px]" />
              <MySqlDBIcon className="h-[50px] m-0 mb-[15px]" />
              <FirebaseIcon className="h-[50px] m-0 mb-[15px]" />
              <SocketIoIcon className="h-[50px] m-0 mb-[15px]" />
              <GraphQlIcon className="h-[50px] m-0 mb-[15px]" />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              Front-end
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <HtmlIcon className="h-[50px] m-0 mb-[15px]" />
              <CssIcon className="h-[50px] m-0 mb-[15px]" />
              <SassIcon className="h-[50px] m-0 mb-[15px]" />
              <BootstrapIcon className="h-[50px] m-0 mb-[15px]" />
              <MaterialUiIcon className="h-[50px] m-0 mb-[15px]" />
              <TailwindIcon className="h-[50px] m-0 mb-[15px]" />
              <ReactIcon className="h-[50px] m-0 mb-[15px]" />
              <ReduxIcon className="h-[50px] m-0 mb-[15px]" />
            </div>
          </li>

          <li data-aos="zoom-in-up">
            <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-[1.5rem] mt-0 mb-[25px]">
              DevOps & Testing
            </h3>
            <div className="flex flex-wrap gap-[15px]">
              <DockerIcon className="h-[50px] m-0 mb-[15px]" />
              <GitIcon className="h-[50px] m-0 mb-[15px]" />
              <JestIcon className="h-[50px] m-0 mb-[15px]" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skillset
