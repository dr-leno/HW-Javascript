import { useEffect, useState} from 'react';

export default function usePhotos(albumId) {
    const[photos,setPhotos] = useState([]);

    function getPhotosList() {
        return fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId).then(res => res.json())
    };

    useEffect(() => {
        getPhotosList().then(data => setPhotos(data))
    },[albumId]);

  return photos;
}
