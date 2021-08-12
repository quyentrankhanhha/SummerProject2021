import React from 'react'
import classes from './Categories.module.css'
import Category from './Category'

export default function Categories() {
  return (
    <div className={classes.categories}>
      <ul>
        <Category title='Travel' number='14' />
        <Category title='Travel' number='14' />
      </ul>
    </div>
  )
}
