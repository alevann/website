type Props = {
  src: string
  alt: string
  url: string
  target?: HTMLAnchorElement['target']
}

const LinkImage = ({ src, url, alt, target = '_blank' }: Props) => {
  return (
    <a href={url} target={target}>
      <img src={src} alt={alt} />
    </a>
  )
}

export default LinkImage
