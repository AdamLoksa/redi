const gallery = (function() {
   const btnLeft = document.querySelector('.gallery__btn--left');
   const btnRight = document.querySelector('.gallery__btn--right');

   let imagesPosition = 0;
   const galleryDatabase = [
      {
         firstImage: './gallery/gallery-logo-logo11.jpg',
         secondImage: './gallery/gallery-logo-logo12.jpg',
         thirdImage: './gallery/gallery-logo-logo13.jpg',
         headline: 'Nadpis 1',
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores.',
      },
      {
         firstImage: './gallery/gallery-logo-logo21.jpg',
         secondImage: './gallery/gallery-logo-logo22.jpg',
         thirdImage: './gallery/gallery-logo-logo23.jpg',
         headline: 'Nadpis 2',
         description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
      },
   ];

   btnLeft.addEventListener('click', function(){ moveImages('left'); });
   btnRight.addEventListener('click', function(){ moveImages('right'); });

   function moveImages(direction) {
      position = getPosition(direction);
      loadImages(position);
   }

   function getPosition(direction) {
      if (direction === 'right'){
         imagesPosition++;

         if (imagesPosition === galleryDatabase.length) {
            imagesPosition = 0;
         }

      } else if (direction === 'left') {
         imagesPosition--;

         if (imagesPosition === -1) {
            imagesPosition = galleryDatabase.length - 1;
         }
      }

      return imagesPosition;
   }

   function loadImages(position) {
      document.querySelector('[data-gallery="firstImage"]').src = galleryDatabase[position].firstImage;
      document.querySelector('[data-gallery="secondImage"]').src = galleryDatabase[position].secondImage;
      document.querySelector('[data-gallery="thirdImage"]').src = galleryDatabase[position].thirdImage;
      document.querySelector('[data-gallery="headline"]').innerHTML = galleryDatabase[position].headline;
      document.querySelector('[data-gallery="description"]').innerHTML = galleryDatabase[position].description;
   }

   function fadeOut(){
      let items = Array.from(document.querySelectorAll('[data-gallery]'));
      items.forEach(element => element.style = "opacity: 0;");
   }

   function fadeIn(){
      let items = Array.from(document.querySelectorAll('[data-gallery]'));
      items.forEach(element => element.style = "opacity: 1;");
   }
})();