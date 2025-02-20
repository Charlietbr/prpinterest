export const createMain = () => {
    const app = document.querySelector('#app');
    const main = document.createElement('main');
    app.appendChild(main);
    return main;
};




export const createCard = (slug, urlRegular, likes, totalPhotos, user, userImg, createdAt, page) => {
    const columna = document.querySelector(`#column${page}`);
    const card = document.createElement('article');
    card.classList.add('imgCard');
    columna.appendChild(card);


    const image = document.createElement('img');
    image.classList.add('image');
    image.src = urlRegular;
    image.alt = slug;
    image.title = slug;
    card.appendChild(image);


    const likesNum = document.createElement('p');
    likesNum.classList.add('likes');
    likesNum.textContent = `♥️ ${likes}`;
    card.appendChild(likesNum);

    const photoNum = document.createElement('p');
    photoNum.classList.add('photos');
    photoNum.textContent = `${totalPhotos} 📷`;
    card.appendChild(photoNum);

    const visitBT = document.createElement('button');
    visitBT.classList.add('visitBT');
    card.appendChild(visitBT);

    const visitA = document.createElement('a');
    visitA.href = urlRegular;
    visitA.textContent = 'Visitar';
    visitBT.appendChild(visitA);

    const footer = document.createElement('footer');
    footer.classList.add('cardFooter');
    card.appendChild(footer);

    const cifra = likes % 10;

    const userImage = document.createElement('img');
    userImage.classList.add('userImageFoot');
    userImage.src = userImg;
    userImage.alt = user;
    userImage.title = user;
    userImage.style = `border: 3px solid var(--cardC${cifra})`;
    footer.appendChild(userImage);


    const userName = document.createElement('h4');
    userName.classList.add('userName');
    userName.textContent = `${user}`;
    footer.appendChild(userName);


    const year = Array.from(createdAt).slice(0, 4).join("");
    const month = Array.from(createdAt).slice(6, 7).join("");
    const day = Array.from(createdAt).slice(9, 10).join("");

    const fecha = `${day}-${month}-${year}`;

    console.log(fecha);
    

    const date = document.createElement('h5');
    date.classList.add('userName');
    date.textContent = `${fecha}`;
    footer.appendChild(date);

    return card;
};

