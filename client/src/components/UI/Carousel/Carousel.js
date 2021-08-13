import React, { useState } from 'react'
import classes from '../Carousel/Carousel.module.css'
import ReadMore from '../ReadMore'
import Button from './Button'

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex < dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length - 1) {
      setSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 0) {
      setSlideIndex(dataSlider.length - 1)
    }
  }
  const dataSlider = [
    {
      id: 1,
      title: 'Love the Delicious and Tasty Foods',
      subtitle:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia',
      img: '/assets/recipes1.webp'
    },
    {
      id: 2,
      title: 'Love the Delicious and Tasty Foods',
      subtitle:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia',
      img: '/assets/recipes2.webp'
    },
    {
      id: 3,
      title: 'Love the Delicious and Tasty Foods',
      subtitle:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia',
      img: '/assets/recipes2.webp'
    }
  ]

  return (
    <div className={classes.carousel}>
      <div className={classes['carousel__inner']}>
        <div
          className={classes['carousel__img']}
          style={{ backgroundImage: `url(${dataSlider[slideIndex].img})` }}
        ></div>
        <div className={classes['carousel__infor']}>
          <div className={classes['carousel__detail']}>
            <h3>FEATURED POSTS</h3>
            <h1>{dataSlider[slideIndex].title}</h1>
            <p>{dataSlider[slideIndex].subtitle}</p>
            <ReadMore
              link='/article'
              styles={{
                background: '#000',
                color: '#fff',
                padding: '0.5rem 1rem',
                border: '1px solid #000',
                borderRadius: '3px',
                fontWeight: '400'
              }}
            />
          </div>
          <div className={classes['carousel__buttons']}>
            <Button
              title={
                <div className={classes['btn-black']}>
                  <span className='fas fa-chevron-left btn-black'></span>
                  <span>Forward</span>
                </div>
              }
              onClick={prevSlide}
            />
            <Button
              title={
                <div className={classes['btn-black']}>
                  <span>Next</span>
                  <span className='fas fa-chevron-right'></span>
                </div>
              }
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
