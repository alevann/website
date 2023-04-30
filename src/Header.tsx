import Socials from './Socials'
import Profile from './profile.jpeg'
import './Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
      <div id='title'>
        <p id='small'>Hey, I'm</p>
        <h1>Alessandro</h1>
        <p id='job-title'>Full Stack <span className='spicy-text'>Web Developer</span></p>
        <Socials />
      </div>
      <img id='profile' src={Profile} alt='A picture of me'/>
    </div>
  )
}

export default Header
