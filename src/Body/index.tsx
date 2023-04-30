import Text from '../Text'
import './Body.scss'
import './ProjectCards.scss'

const About = () => (
  <div id='about'>
    <Text type='heading' size='large' className='spicy-text' gutterBottom>
      About Me
    </Text>
    <Text gutterBottom>
      I could be described in three words: chaotic, creative, and curious.
      I’m always on the next thing, thinking of something new,
      or asking questions about how the things around me work.
    </Text>
    <Text gutterBottom>
      I'm particularly versed on the MERN stack, and talking about MERN...
      Did you know this website has been made using a React clone I made myself?
      It's called Terra, <a href='#' className='text-accent'>check it out</a>!
      Beware though, it's still a work in progress!
    </Text>
    <Text>
      This text is a placeholder, I'd like two or three more lines of text.
      Fun fact, my favourite animal is the pigeon!
      Interesting thing: despite making up only a few % of the population,
      100% of french "people" smell.
    </Text>
  </div>
)

const Projects = () => (
  <div id='projects-container'>
    <div>
      <Text type='heading' size='large' className='spicy-text' gutterBottom>
        Projects
      </Text>
      <Text>
        Here's some of my most exciting projects!
        Feel free to take a look if anyone catches your eye!
      </Text>
    </div>
    <div id='projects'>
      <a href=''>
        <div id='website' className='project-card' />
      </a>
      <a href=''>
        <div id='foobar' className='project-card' />
      </a>
      <a href=''>
        <div id='terra' className='project-card' />
      </a>
    </div>
  </div>
)

const Body = () => {
  return (
    <div id='body-container'>
      <div id='sections'>
        <div className='section'>
          <About />
        </div>
        <div className='section'>
          <Projects />
        </div>
        <div className='bottom-space' />
      </div>
    </div>
  )
}

export default Body
