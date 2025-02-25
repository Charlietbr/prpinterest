
import {  
  searchInput,
  paintHeader
} from "./components/nav/nav.js";

import {
  createMain,
  //createCard
  createCardFromTemplate

} from "./components/cards/cards.js";


let topic = "gatos";
let pagesAmount = 1;
let resultados = 30;
const API_KEY = 'bknulMB_Ao0DBfNwtQEjr_92NTMbUqptQmwlAZ2qIEw';



paintHeader();
createMain();

let currentPage = 1;

const respuesta = async (pagesAmount, topic, resultados, currentPage) => {

  try {

    console.log(`Check: Página ${currentPage} de la búsqueda de ${topic}`);


    let URL = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${topic}&per_page=${resultados}&client_id=${API_KEY}`;
    let respuesta = await fetch(URL);
    let data = await respuesta.json();
    
    

    if (!data.results || data.results.length === 0) {
      console.warn(`No se encontraron resultados para "${topic}"`);
      alert(`    No se han econtrado resultados de ${topic}. \n\nPrueba con otra búsqueda o vive rodeado de gatos.`);
      location.reload(true);
      
        if (data.results && data.results.length > 0) {

          data.results.forEach((foto) => {

            const { slug, urls, likes, user, created_at } = foto;
            const urlRegular = urls.regular;
            const total_photos = user.total_photos;
            const userImg = user.profile_image.medium;
            const userName = user.name;

            //createCard(slug, urlRegular, likes, total_photos, userName, userImg, created_at, currentPage);
            createCardFromTemplate(foto);

          });

        } else {
          console.warn('Pues tampoco hay imágenes de gatos...');
          
        };

      return data;
    };

    console.log(data.results);
    
    data.results.forEach((foto) => {
      const { slug, urls, likes, user, created_at } = foto;
      const urlRegular = urls.regular;
      const total_photos = user.total_photos;
      const userImg = user.profile_image.medium;
      const userName = user.name;

      //createCard(slug, urlRegular, likes, total_photos, userName, userImg, created_at, currentPage);
      
      createCardFromTemplate(slug, urlRegular, likes, total_photos, userName, userImg, created_at);
    });

  } catch (error) {
    console.error("Error en la solicitud:", error);
  }

};

respuesta(pagesAmount, topic, resultados, currentPage);


//*--------------------------------Limpieza de app

const limpiarApp = () => {
  const main = document.querySelector('main');
  if (main) main.innerHTML = "";
};


//*--------------------------------Realizar una búsqueda desde searchInput

const busqueda = (ev) => {
  if (ev.key === 'Enter') {
    const nuevoTopic = searchInput.value.trim();

      if (!nuevoTopic) 
        return;

    topic = nuevoTopic; 
    limpiarApp();
    currentPage = 1;
    bottomMessage.classList.remove('visibleFooterMessage');        
    respuesta(pagesAmount, topic, resultados, currentPage);
  }
};


//*--------------------------------Ampliar resultados al hacer scroll. Max 5 páginas.


const subir = () => (window.scrollTo({top: 0, behavior: "smooth"}));

const app = document.querySelector('#app');
const bottomMessage = document.createElement('footer');
bottomMessage.classList.add('footerMessage');
bottomMessage.textContent = 'Has alcanzado el límite de búsquedas permitidas. Pulsa para volver arriba.' ;
app.appendChild(bottomMessage);

bottomMessage.addEventListener('click', subir);




const ampliaBusqueda = () => {  

  if (currentPage < 5){
    currentPage +=1; 
     respuesta(pagesAmount, topic, resultados, currentPage);
  } else {
    bottomMessage.classList.add('visibleFooterMessage');
    
    }
  
    
  
};


searchInput.addEventListener('keydown', busqueda);
window.addEventListener('scrollend', ampliaBusqueda);

