import  { useEffect, useState } from 'react';
import RestApi from '../../albums/services/AlbumService';

export default function useAlbums() {
    const[albums,setAlbums] = useState([]);
    
    useEffect(() => {
        RestApi.getList().then((data) => setAlbums(data))
      }, []);

      return albums;
}
