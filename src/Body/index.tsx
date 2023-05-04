import Text from '../Text'
import './Body.scss'
import './ProjectCards.scss'

const About = () => (
  <div id='about'>
    <Text type='heading' size='large' className='spicy-text' gutterBottom>
      About Me
    </Text>
    <Text gutterBottom>
      As a lifelong learner, I've cultivated a deep sense of curiosity and a love of exploring new ideas and concepts.
      Whether I'm working on a new project or simply going about my day, I'm constantly seeking out new challenges and opportunities to grow and learn.
    </Text>
    <Text gutterBottom>
      My passion for creativity and innovation is matched only by my love of problem-solving.
      I thrive on the thrill of tackling difficult challenges and finding elegant solutions that push the boundaries of what's possible.
    </Text>
    <Text gutterBottom>
      At times, my boundless enthusiasm and restless energy can be chaotic, but I believe that this is what makes me such an effective and innovative thinker.
      I'm not content to simply accept things as they are - I want to understand them, challenge them, and ultimately make them better.
    </Text>
    <Text>
      Whether I'm working independently or collaborating with others, I bring a spirit of curiosity, creativity, and a relentless drive for excellence to everything I do.
      I'm always excited to take on new challenges and explore new ideas - after all, life is all about the journey, not just the destination.
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
      <a href='https://github.com/alevann/website'>
        <div id='website' className='project-card' />
      </a>
      <a href='https://github.com/alevann/foobar'>
        <div id='foobar' className='project-card' />
      </a>
      <a href='https://github.com/alevann/terra'>
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
