import React from 'react'
import classes from '../UI/AboutMe.module.css'
export default function AboutMe() {
  return (
    <div className={`${classes['about-me']} sidebar-wrap p-4`}>
      <h2 className='heading'>About Me</h2>
      <img src={'/assets/aboutme.jpeg'} alt='avatar' />
      <div className='pt-4'>
        <p>
          Hi! My name is <strong>Cathy Deon</strong>, behind the word mountains,
          far from the countries Vokalia and Consonantia, there live the blind
          texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </div>
    </div>
  )
}
