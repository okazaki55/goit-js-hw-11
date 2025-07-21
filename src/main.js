import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('form');
const input = document.getElementById('search');
const loader = document.getElementById('loader-center');
const gallery = document.getElementById('gallery');

const lightbox = new SimpleLightbox('.gallery-item', {
  captionsData: 'alt',
  captionDelay: 250,
});

const API_KEY = '51314790-8eb7b58c862d15e75f23e4ac3';

const fetchImages = searchQuery => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => console.error('Error fetching images:', error));
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  input.value = '';
  if (query === '') return;

  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(images);
      }
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});

function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
          <p>Downloads: ${downloads}</p>
        </div>
      </a>
    `;
      }
    )
    .join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}
