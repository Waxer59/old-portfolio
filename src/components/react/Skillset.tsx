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
    <div id="skillset">
      <h2 className="text-4xl sm:text-5xl font-400 text-center">Skillset</h2>

      <ul className="flex flex-col gap-[50px] list-none mt-24">
        <li data-aos="zoom-in-up">
          <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-xl sm:text-2xl mt-0 mb-[25px]">
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
          <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-xl sm:text-2xl mt-0 mb-[25px]">
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
          <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-xl sm:text-2xl mt-0 mb-[25px]">
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
          <h3 className="border-b-[1px] border-solid border-borderColor p-[15px] font-300 text-xl sm:text-2xl mt-0 mb-[25px]">
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
  )
}

export default Skillset
