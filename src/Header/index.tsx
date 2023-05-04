import Text from '../Text'
import SocialButton from '../SocialButton'
import PhotoOfMeURL from './profile.jpeg'
import './Header.scss'

const Welcome = () => (
  <div id='title-container'>
    <Text>
      Hey, I'm
    </Text>
    <Text type='heading' size='xLarge' className='spicy-text'>
      Alessandro
    </Text>
    <Text id='job-title' gutterBottom>
      Full Stack <Text elem='span' className='spicy-text'>Web Developer</Text>
    </Text>
    <div id='socials'>
      <SocialButton
        url='https://github.com/alevann'
        social='GitHub'
      />
      <SocialButton
        url='https://www.linkedin.com/in/alessandro-vannini-a56a6418a/'
        social='LinkedIn'
      />
      <SocialButton
        url='https://stackoverflow.com/users/13183072/kil'
        social='StackOverflow'
      />
    </div>
    <Text style={{ marginTop: '1rem' }}>
      alesandrovnnn@gmail.com
    </Text>
  </div>
)

const PhotoOfMe = () => (
  <div id='profile-image'>
    <img src={PhotoOfMeURL} alt='A photo of me' />
  </div>
)

const Header = () => {
  return (
    <div id='header-container'>
      <Welcome />
      <PhotoOfMe />
    </div>
  )
}

export default Header
