import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../UI/Category.module.css'

export default function Category() {
  return (
    <li className={classes['category-img']}>
      <Link
        style={{
          backgroundImage: `url(/assets/category1.webp)`
        }}
      >
        <div className={classes.text}>
          <h3>Foods</h3>
        </div>
      </Link>
    </li>
  )
}
