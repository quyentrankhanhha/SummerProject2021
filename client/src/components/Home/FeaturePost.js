import React from 'react'
import { Link } from 'react-router-dom'

import classes from './FeaturePost.module.css'
import ReadMore from '../UI/ReadMore'

export default function FeaturePost(props) {
  return (
    <div className={classes.post}>
      <a href='/' className={classes['post-img_cover']}>
        <img src={props.source} style={props.imgStyle} alt='feature img' />
      </a>
      <div className={classes.text}>
        <p className={classes.subtitle}>
          <span>Dessert</span>
          <span></span>
          <span>March 01, 2021</span>
        </p>
        <h3>
          <Link to={props.link}>Tasty &#38; Delicious Foods</Link>
        </h3>
        <ReadMore link={props.link} styles={props.readMoreStyle} />
      </div>
    </div>
  )
}
