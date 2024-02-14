export interface ProyectInterface {
  name: string
  img: string
  desc: string
  links: {
    repo: string
    url?: string
  }
}

export const PROJECTS_DATA: ProyectInterface[] = [
  {
    name: 'DinamicJs',
    img: 'dinamicJs',
    desc: 'DinamicJs is a real time javascript playground!!',
    links: {
      repo: 'https://github.com/Waxer59/DinamicJs',
      url: 'https://dinamicjs.netlify.app/'
    }
  },
  {
    name: 'PikaLang',
    img: 'pikalang',
    desc: 'A basic programming language written in Go',
    links: {
      repo: 'https://github.com/Waxer59/PikaLang'
    }
  },
  {
    name: 'JobReady',
    img: 'jobReady',
    desc: 'An amazing job interview simulator',
    links: {
      repo: 'https://github.com/Waxer59/JobReady'
    }
  },
  {
    name: 'ImageUploader',
    img: 'imageUploader',
    desc: 'ImageUploader is a website where you can upload images (PNG, JPG & JPEG) and share them with a link so they can be viewed.',
    links: {
      repo: 'https://github.com/Waxer59/ImageUploader'
    }
  },
  {
    name: 'PhotoDisplay',
    img: 'photoDisplay',
    desc: 'PhotoDisplay is a simple photo gallery that allows you to display photos from a URL and see them on the page.',
    links: {
      repo: 'https://github.com/Waxer59/PhotoDisplay'
    }
  },
  {
    name: 'DinamicJs Desktop',
    img: 'dinamicJs-desktop',
    desc: 'Your favorite javascript playground now in desktop, with a beautiful interface and a lot of features.',
    links: {
      repo: 'https://github.com/Waxer59/DinamicJs-Desktop',
      url: 'https://get-dinamicjs.netlify.app/'
    }
  },
  {
    name: 'Discord bot',
    img: 'discordBot',
    desc: 'A discord bot which can do many things!',
    links: {
      repo: 'https://github.com/Waxer59/discordjs-bot'
    }
  },
  {
    name: "Hugo's Blog",
    img: 'hugo-blog',
    desc: 'This is my blog where you can find me talking about the latest tecnologies.',
    links: {
      repo: 'https://github.com/Waxer59/Hugo-Blog',
      url: 'https://blog.hgo.one/'
    }
  },
  {
    name: 'Wikat',
    img: 'wikat',
    desc: 'Would you like to know more about cats, because if so Wikat is your website, you can learn more about each breed with high quality images of each of the breeds.',
    links: {
      repo: 'https://github.com/Waxer59/Wikat'
    }
  },
  {
    name: 'Cloud Toolbox',
    img: 'cloud-toolbox',
    desc: 'Cloud Toolbox is a website that offers multiple tools, such as image background removal, image tagging, website screenshots, document security verification and image text removal.',
    links: {
      repo: 'https://github.com/Waxer59/Cloud-Toolbox'
    }
  }
]
