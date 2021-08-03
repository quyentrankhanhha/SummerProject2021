import React from 'react'
import Input from './Input'
import classes from '../../styles/Subcribe.module.css'

export default function Subcribe() {
  return (
    <div>
      <div>
        <span>Subcribe to our Newsletter</span>
        <span>.</span>
      </div>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </p>
      <div>
        <label htmlFor='text'></label>
        <input type='text' placeholder='Enter email address' />
        <input type='submit' value='Subcribe'></input>
      </div>
    </div>
  )
}
