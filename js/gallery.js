import { renderThumbnails } from './thumbnail.js';
import { openBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  renderThumbnails(pictures);

  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = Number(thumbnail.dataset.thumbnailId);

    const pictureData = pictures.find(({ id }) => id === thumbnailId);

    openBigPicture(pictureData);
  });
};

export { renderGallery };
