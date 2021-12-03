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
               headline: 'XPS - tvrzený polystyren',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">přesná reprezentace barev z RAL a NCS vzorníků
                     </p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">do interiérů i exteriérů (životnost min. 5 let)</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">velmi nízká hmotnost = snadná instalace - stačí přilepit</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-logos-logo21.jpg',
               secondImage: './gallery/gallery-logos-logo22.jpg',
               thirdImage: './gallery/gallery-logos-logo23.jpg',
               headline: 'Pěněné PVC (FOREX)',
               description: `
               <li class="u-list__item u-list__item--description">
                  <span class="u-list__slash">/</span>
                  <p class="u-list__text">vhodný pro menší loga a loga se složitými tvary
                  </p>
               </li>

               <li class="u-list__item u-list__item--description">
                  <span class="u-list__slash">/</span>
                  <p class="u-list__text">do interiérů i exteriérů (životnost min. 5 let)</p>
               </li>

               <li class="u-list__item u-list__item--description">
                  <span class="u-list__slash">/</span>
                  <p class="u-list__text">instalace pomocí lepidla, bez nutnosti vrtání</p>
               </li>
            `,
            },
            {
               firstImage: './gallery/gallery-logos-logo31.jpg',
               secondImage: './gallery/gallery-logos-logo32.jpg',
               thirdImage: './gallery/gallery-logos-logo33.jpg',
               headline: 'Kombinace materiálů',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">pro dosažení co nejvyšší vizuální atraktivity loga se výrobní materiály často kombinují 
                     </p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">navrhneme možnosti zpracování Vašeho loga a společně vybereme tu nejvhodnější
                     </p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-logos-logo41.jpg',
               secondImage: './gallery/gallery-logos-logo42.jpg',
               thirdImage: './gallery/gallery-logos-logo43.jpg',
               headline: 'Referenční fotky',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">u log z XPS a PVC není třeba jakkoliv zasahovat do podkladu, kde má být logo umístěné, stačí je nalepit - drží na fasádě, dřevě i skle 
                     </p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">pro usnadnění instalace nabízíme k logům šablony
                     </p>
                  </li>
               `,
            },
         ];
      } else if (galleryType == 'prototypesGallery') {
         return [
            {
               firstImage: './gallery/gallery-prototypes-prototype11.jpg',
               secondImage: './gallery/gallery-prototypes-prototype12.jpg',
               thirdImage: './gallery/gallery-prototypes-prototype13.jpg',
               headline: 'Zámková pojistka',
               description:               
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">modelování repliky pojistky</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">frézování prototypu z PVC, 3D tisk 5 ks</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-prototypes-prototype21.jpg',
               secondImage: './gallery/gallery-prototypes-prototype22.jpg',
               thirdImage: './gallery/gallery-prototypes-prototype23.jpg',
               headline: 'Přepravní box na domácí mazlíčky',
               description:               
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">prototyp designové studie</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">výroba mechanicky funkční makety - předvýrobní vzor</p>
                  </li>
               `,
            },
         ];
      }  else if (galleryType == 'manufacturingGallery') {
         return [
            {
               firstImage: './gallery/gallery-manufacturing-project11.jpg',
               secondImage: './gallery/gallery-manufacturing-project12.jpg',
               thirdImage: './gallery/gallery-manufacturing-project13.jpg',
               headline: 'Balance',
               description:               
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">Kompletní realizace interiéru kavárny</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-manufacturing-project21.jpg',
               secondImage: './gallery/gallery-manufacturing-project22.jpg',
               thirdImage: './gallery/gallery-manufacturing-project23.jpg',
               headline: 'Zakázkový konferenční stolek',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">konferenční stolek na míru</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">pro pohodlnou práci ze sedačky</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-manufacturing-project31.jpg',
               secondImage: './gallery/gallery-manufacturing-project32.jpg',
               thirdImage: './gallery/gallery-manufacturing-project33.jpg',
               headline: 'Podsvícené vytríny',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">kompletní technologické řešení</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">výroba 2 kusů vitrín pro 27 Jewellery</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">design Eliška Monsportová</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-manufacturing-project41.jpg',
               secondImage: './gallery/gallery-manufacturing-project42.jpg',
               thirdImage: './gallery/gallery-manufacturing-project43.jpg',
               headline: 'Skládací barové stoly na eventy',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">kompletní technologické řešení</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">výroba 2 kusů skládacích eventových pultů</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">pro JZT Ferments</p>
                  </li>
               `,
            },
            {
               firstImage: './gallery/gallery-manufacturing-project51.jpg',
               secondImage: './gallery/gallery-manufacturing-project52.jpg',
               thirdImage: './gallery/gallery-manufacturing-project53.jpg',
               headline: 'Posilovací stalky',
               description:
               `
                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">bukové stalky 50 cm, bok 30 mm březová překližka</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">nosnost 200kg</p>
                  </li>

                  <li class="u-list__item u-list__item--description">
                     <span class="u-list__slash">/</span>
                     <p class="u-list__text">oboustranně vypálené logo</p>
                  </li>
               `,
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