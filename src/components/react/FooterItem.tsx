export interface Props {
  href: string
  icon: React.ReactNode
  webName: string
}

export const FooterItem = ({ href, icon, webName }: Props) => (
  <li>
    <a
      href={href}
      target="_blank"
      className="transition-colors hover:text-hoverColor"
      aria-label={`Wadev ${webName} profile`}
      rel="noreferrer">
      {icon}
    </a>
  </li>
)
