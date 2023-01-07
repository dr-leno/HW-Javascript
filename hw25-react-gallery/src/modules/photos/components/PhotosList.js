import React from 'react';
import PhotosItem from './PhotosItem';


export default function PhotosList({photos}) {
    
  return (
    <div className='photos-list'>
        {photos.map((item) => (
            <PhotosItem 
            key={item.id}
            photo={item}/>
        ))}
    </div>
  )
}
