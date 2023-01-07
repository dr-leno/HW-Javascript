import React from 'react';
import AlbumsItem from './AlbumsItem';

export default function AlbumsList({ albums, navigate }) {

  return (
    <div className='albums-list'>
      {albums.map((item) =>
      (<AlbumsItem 
      key={item.id}
      album={item}
      navigate={navigate}/>) )    
      }
      
    </div>
  )
}
