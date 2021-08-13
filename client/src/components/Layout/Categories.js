import React from 'react'
import Category from '../UI/Category'

export default function Categories() {
  return (
    <div className='sidebar-wrap'>
      <h2 className='heading'>Categories</h2>
      <ul>
        <Category />
        <Category />
        <Category />
      </ul>
    </div>
  )
}
