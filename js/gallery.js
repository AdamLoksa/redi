const gallery = (function() {
   //Gallery database 
   function loadGallery() {
      const galleryType = document.querySelector('.gallery').dataset.gallery;

      // 3D logos
      if (galleryType == 'logosGallery') {
         return [
            {
               firstImage: './gallery/gallery-logos-logo11.jpg',
               secondImage: './gallery/gallery-logos-logo12.jpg',
               thirdImage: './gallery/gallery-logos-logo13.jpg',
               headline: 'Polystyren',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-logos-logo21.jpg',
               secondImage: './gallery/gallery-logos-logo22.jpg',
               thirdImage: './gallery/gallery-logos-logo23.jpg',
               headline: 'PVC',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-logos-logo31.jpg',
               secondImage: './gallery/gallery-logos-logo32.jpg',
               thirdImage: './gallery/gallery-logos-logo33.jpg',
               headline: 'PVC + Polystiren',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-logos-logo41.jpg',
               secondImage: './gallery/gallery-logos-logo42.jpg',
               thirdImage: './gallery/gallery-logos-logo43.jpg',
               headline: 'Použití',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
         ];
      } else if (galleryType == 'prototypesGallery') {
         return [
            {
               firstImage: './gallery/gallery-prototypes-prototype11.jpg',
               secondImage: './gallery/gallery-prototypes-prototype12.jpg',
               thirdImage: './gallery/gallery-prototypes-prototype13.jpg',
               headline: 'Nadpis 1',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-prototypes-prototype21.jpg',
               secondImage: './gallery/gallery-prototypes-prototype22.jpg',
               thirdImage: './gallery/gallery-prototypes-prototype23.jpg',
               headline: 'Nadpis 2',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
         ];
      }  else if (galleryType == 'manufacturingGallery') {
         return [
            {
               firstImage: './gallery/gallery-manufacturing-project11.jpg',
               secondImage: './gallery/gallery-manufacturing-project12.jpg',
               thirdImage: './gallery/gallery-manufacturing-project13.jpg',
               headline: 'Nadpis 1',
               description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-manufacturing-project21.jpg',
               secondImage: './gallery/gallery-manufacturing-project22.jpg',
               thirdImage: './gallery/gallery-manufacturing-project23.jpg',
               headline: 'Nadpis 2',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
            {
               firstImage: './gallery/gallery-manufacturing-project31.jpg',
               secondImage: './gallery/gallery-manufacturing-project32.jpg',
               thirdImage: './gallery/gallery-manufacturing-project33.jpg',
               headline: 'Nadpis 3',
               description: 'Ipsum Lorem dolor sit amet consectetur adipisicing elit. Facere, dolores.',
            },
         ];
      }
   }

   galleryDatabase = loadGallery();
   let imagesPosition = 0;

   const btnLeft = document.querySelector('.gallery__btn--left');
   const btnRight = document.querySelector('.gallery__btn--right');

   btnLeft.addEventListener('click', function(){ moveImages('left'); });
   btnRight.addEventListener('click', function(){ moveImages('right'); });

   function moveImages(direction) {
      position = getImagesPosition(direction);
      loadImages(position);
   }

   function getImagesPosition(direction) {
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