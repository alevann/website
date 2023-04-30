import './SocialButton.scss'

type SocialButtonProps = {
  url: string
  social: 'GitHub' | 'LinkedIn' | 'StackOverflow'
}

const SocialButton = ({ url, social }: SocialButtonProps) => {
  return (
    <a href={url} title={`${social}`}>
      <div id={`social-button-${social.toLowerCase()}`} className='social-button' />
    </a>
  )
}

export default SocialButton
