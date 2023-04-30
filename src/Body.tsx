import FooBarCard from './FooBarCard.svg'
import './Body.scss'

const Body = () => {
  return (
    <div className='body-container'>

      <div id='text'>
        <h1>Who am I?</h1>
        <p>
          I could be described in three words: chaotic, creative, and curious.
          I’m always on the next thing, thinking of something new,
          or asking questions about how the things around me works.
        </p>
        <p>
          While my biggest passion is for whatever, also checkmate liberels.
          Despite all that, I still wish a wild ice cream truck could take me out.
        </p>
      </div>

      <div id='cards'>
        <h2>Check out some of my projects!</h2>
        <div id='foobar' className='card'>
        </div>
        <div id='terra' className='card'>
        </div>
      </div>

    </div>
  )
}

export default Body
