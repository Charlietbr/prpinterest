
import {  
  searchInput,
  paintHeader
} from "./components/nav/nav.js";

import {
  createMain,
  createCard
} from "./components/cards/cards.js";


let topic = "gatos";
let pagesAmount = 10;
let resultados = 6;
const API_KEY = 'bknulMB_Ao0DBfNwtQEjr_92NTMbUqptQmwlAZ2qIEw';


paintHeader();

createMain();



const respuesta = async (pagesAmount, topic, resultados) => {

  for (let page = 1; page <= pagesAmount; page++) {

  try {
    console.log(`Búsqueda de "${topic}", página ${page}`);
  
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${topic}&per_page=${resultados}&client_id=${API_KEY}`;
    const respuesta = await fetch(URL);
    const data = await respuesta.json();

    if (!data.results || data.results.length === 0) {
      console.warn(`No se encontraron resultados para "${topic}"`);
      alert(`    No se han econtrado resultados de ${topic}. \n\nPrueba con otra búsqueda o vive rodeado de gatos.`);
      topic = "gatos";
      URL = `https://api.unsplash.com/search/photos?page=${page}&query=${topic}&per_page=${resultados}&client_id=${API_KEY}`;
      const respuesta = await fetch(URL);
      const data = await respuesta.json();
      
      

      return data;
    }
    console.log(data.results);
    
    data.results.forEach((foto) => {
      const { slug, urls, likes, user, created_at } = foto;
      const urlRegular = urls.regular;
      const total_photos = user.total_photos;
      const userImg = user.profile_image.medium;
      const userName = user.name;

      createCard(slug, urlRegular, likes, total_photos, userName, userImg, created_at, page);
    });

  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
  }
};


const createColumn = (pagesAmount) => {
  for (let p = 1; p <= pagesAmount; p++) {

    const main = document.querySelector('main');
    
    const column = document.createElement('div');
    column.classList.add('column');
    column.id = `column${p}`;
    main.appendChild(column);

  
  }
};

createColumn(pagesAmount, topic);

respuesta(pagesAmount, topic, resultados);






//*--------------------------------Limpieza de app

const limpiarApp = () => {
  const main = document.querySelector('main');
  if (main) main.innerHTML = "";
};



//*------------------------------------------------------

const busqueda = (ev) => {
  if (ev.key === 'Enter') {
    const nuevoTopic = searchInput.value.trim();
    if (!nuevoTopic) 
    return;

    topic = nuevoTopic; 
    limpiarApp();        
    createColumn(pagesAmount, topic); 
    respuesta(pagesAmount, topic, resultados);
  }
};


searchInput.addEventListener('keydown', busqueda);


