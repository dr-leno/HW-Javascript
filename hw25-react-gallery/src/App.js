import { useEffect, useState} from 'react';
import './App.css';
import AlbumsList from './modules/albums/components/AlbumsList';
import useAlbums from './modules/common/hooks/useAlbums';
import usePhotos from './modules/common/hooks/usePhotos';
import PhotosList from './modules/photos/components/PhotosList';

function App() {
  const [albumId, setAlbumId] = useState(null);
  const albums = useAlbums();
  const photos = usePhotos(albumId);
  

  useEffect(() => {
    if (!albums.length) return;

    setAlbumId(albums[0].id)
  }, [albums]);

  return  (
  <div className='container'>
  <AlbumsList albums={albums} navigate={setAlbumId}/>
  <PhotosList photos={photos}/> 
</div>);
}

export default App;
