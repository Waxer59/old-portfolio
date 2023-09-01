import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa/index'
import { FooterItem, type FooterItemProps } from '.'

const FOOTER_ITEMS: FooterItemProps[] = [
  {
    href: 'https://github.com/Waxer59',
    icon: <FaGithub className="text-[2.5rem]" />,
    webName: 'Github'
  },
  {
    href: '#',
    icon: <FaLinkedin className="text-[2.5rem]" />,
    webName: 'Linkedin'
  },
  {
    href: 'https://twitter.com/Waxer59',
    icon: <FaTwitter className="text-[2.5rem]" />,
    webName: 'Twitter'
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="mt-36 p-6 bg-secondaryColor">
      <ul className="p-0 flex justify-around list-none">
        {FOOTER_ITEMS.map((el) => (
          <FooterItem key={el.href} {...el} />
        ))}
      </ul>
    </footer>
  )
}

export default Footer
