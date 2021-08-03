import React from 'react'
import classes from '../../styles/Subcribe.module.css'
import HeadingName from '../UI/HeadingTitle'

export default function Subcribe() {
  return (
    <section className={classes.subcribe}>
      <div className={classes.container}>
        <HeadingName title='Subcribe to our Newsletter' />
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <form className={classes.form}>
          <input
            type='text'
            placeholder='Enter email address'
            className={classes['input-control']}
          />
          <input
            type='submit'
            value='Subcribe'
            className={classes.submit}
          ></input>
        </form>
      </div>
    </section>
  )
}
