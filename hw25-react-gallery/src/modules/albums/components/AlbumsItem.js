import React from 'react';
import './AlbumsItem.css';

export default function AlbumsItem({ album, navigate }) {
    
    return (
    <div className='album-item' onClick={() => navigate(album.id)}>{album.title}</div>
  )
}
