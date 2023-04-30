import LinkImage from '../LinkImage'
import GitHub from './GitHub.png'
import LinkedIn from './LinkedIn.png'
import StackOverflow from './StackOverflow.png'
import './index.scss'

const GitHubButton = (
  <LinkImage
    src={GitHub}
    alt='GitHub logo'
    url='https://github.com/alevann'
  />
)

const LinkedInButton = (
  <LinkImage
    src={LinkedIn}
    alt='LinkedIn logo'
    url='https://www.linkedin.com/in/alessandro-vannini-a56a6418a/'
  />
)

const StackOverflowButton = (
  <LinkImage
    src={StackOverflow}
    alt='Stack Overflow logo'
    url='https://stackoverflow.com/users/13183072/kil'
  />
)

const Socials = () => (
  <div className='socials'>
    {GitHubButton}
    {StackOverflowButton}
    {LinkedInButton}
  </div>
)

export default Socials
