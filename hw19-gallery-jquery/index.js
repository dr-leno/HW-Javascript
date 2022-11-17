const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

const photoTemplate = $('#photoTemplate').html();
const $gallery = $('#gallery');


init();

function init() {
    fetchPhotos();
}

function fetchPhotos() {
    fetch(API_URL).then((res) => res.json())
                .then((data) => {
                    renderPhotos(data);
                    console.log('photos', data);
                })
}

function renderPhotos(photosList) {
    const photos = photosList.map(generatePhotosHtml).join('');

    console.log('rendered', photos);
    $gallery.append(photos);

}

function generatePhotosHtml(photos) {
    return interpolate(photoTemplate, photos);
}