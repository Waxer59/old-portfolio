export interface ProyectInterface {
  name: string
  img: string
  desc: string
  links: {
    repo: string
    url?: string
  }
}

export const PROYECTS_DATA: ProyectInterface[] = [
  {
    name: 'Tasker',
    img: 'tasker.webp',
    desc: 'Tasker is a web application that allows you to create tasks and store them remotely, and all thanks to its login system.',
    links: {
      repo: 'https://github.com/Waxer59/tasker',
      url: undefined
    }
  },
  {
    name: 'DinamicJs',
    img: 'dinamicJs.webp',
    desc: 'DinamicJs is a real time javascript playground!!',
    links: {
      repo: 'https://github.com/Waxer59/DinamicJs',
      url: 'https://dinamicjs.netlify.app/'
    }
  },
  {
    name: 'QrCreator',
    img: 'qrCreator.webp',
    desc: "QrCreator as its name says is a qr's creator in which you can download the qr.",
    links: {
      repo: 'https://github.com/Waxer59/QrCreator',
      url: undefined
    }
  },
  {
    name: 'UrlShortener',
    img: 'urlShortener.webp',
    desc: "UrlShortener is a url's shortener, it makes the new urls look great.",
    links: {
      repo: 'https://github.com/Waxer59/UrlShortener',
      url: undefined
    }
  },
  {
    name: 'ImageUploader',
    img: 'imageUploader.webp',
    desc: 'ImageUploader is a website where you can upload images (PNG, JPG & JPEG) and share them with a link so they can be viewed.',
    links: {
      repo: 'https://github.com/Waxer59/ImageUploader',
      url: undefined
    }
  },
  {
    name: 'PhotoDisplay',
    img: 'photoDisplay.webp',
    desc: 'PhotoDisplay is a simple photo gallery that allows you to display photos from a URL and see them on the page.',
    links: {
      repo: 'https://github.com/Waxer59/PhotoDisplay',
      url: undefined
    }
  },
  {
    name: 'DinamicJs Desktop',
    img: 'dinamicJs-desktop.webp',
    desc: 'Your favorite javascript playground now in desktop, with a beautiful interface and a lot of features.',
    links: {
      repo: 'https://github.com/Waxer59/DinamicJs-Desktop',
      url: undefined
    }
  },
  {
    name: 'Discord bot',
    img: 'discordBot.webp',
    desc: 'A discord bot which can do many things!',
    links: {
      repo: 'https://github.com/Waxer59/discordjs-bot',
      url: undefined
    }
  },
  {
    name: 'Wadev Blog',
    img: 'wadev-blog.webp',
    desc: 'This is my blog where you can find me talking about the latest tecnologies.',
    links: {
      repo: 'https://github.com/Waxer59/Wadev-Blog',
      url: 'https://blog.wadev.dev/'
    }
  },
  {
    name: 'Wikat',
    img: 'wikat.webp',
    desc: 'Would you like to know more about cats, because if so Wikat is your website, you can learn more about each breed with high quality images of each of the breeds.',
    links: {
      repo: 'https://github.com/Waxer59/Wikat',
      url: undefined
    }
  },
  {
    name: 'Cloud Toolbox',
    img: 'cloud-toolbox.webp',
    desc: 'Cloud Toolbox is a website that offers multiple tools, such as image background removal, image tagging, website screenshots, document security verification and image text removal.',
    links: {
      repo: 'https://github.com/Waxer59/Cloud-Toolbox',
      url: undefined
    }
  }
]
