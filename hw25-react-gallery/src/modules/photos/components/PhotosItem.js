import React from 'react'

export default function PhotosItem({photo: {thumbnailUrl, title}}) {
  return <img className='photos-item' src={thumbnailUrl} alt={title}></img>
}
