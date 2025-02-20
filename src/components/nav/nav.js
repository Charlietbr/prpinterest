



export const createHeader = () => {
    const app = document.querySelector('#app');
    const header = document.createElement('header');
    app.appendChild(header);
    return header;
};


export const createUpperNav = () => {
    const header = document.querySelector('header') || createHeader();
    const upperNav = document.createElement('nav');
    header.appendChild(upperNav);
    return upperNav;
};


export const createLogo = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const logo = document.createElement('img');
    upperNav.appendChild(logo);
    logo.src = "./src/icons/pinteresanteLogo.png";
    logo.alt = "logo";
    return logo;
};


export const createInicioBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const inicioBt = document.createElement('button');
    const reloadA = document.createElement('a');
    reloadA.href = './index.html';
    reloadA.textContent = 'Inicio';
    upperNav.appendChild(inicioBt);
    inicioBt.appendChild(reloadA);
    inicioBt.classList.add("buttonGenM", "ocultable");
    // inicioBt.textContent = "Inicio";
    inicioBt.id = 'inicioBT';
    return inicioBt;
};


    
    
 
    


export const createExplorarBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const explorarBt = document.createElement('button');
    upperNav.appendChild(explorarBt);
    explorarBt.classList.add('buttonGenM', 'ocultable');
    explorarBt.textContent = 'Explorar';
    return explorarBt;
};


export const createCrearBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const crearBt = document.createElement('button');
    upperNav.appendChild(crearBt);
    crearBt.classList.add('buttonGenM', 'ocultable');
    crearBt.textContent = 'Crear';
    return crearBt;
};

export let searchInput;

export const createSearchInput = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    searchInput = document.createElement('input');
    upperNav.appendChild(searchInput);
    searchInput.type = 'search';
    searchInput.placeholder = '🔎  Buscar';
    return searchInput;

};

export let searchValue;

export const getSearchValue = () => {
    searchValue = searchInput ? searchInput.value : '';
    return searchValue;
}




export const createNotificationsBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const notificationsBt = document.createElement('button');
    upperNav.appendChild(notificationsBt);
    notificationsBt.classList.add('buttonGenS', 'ocultable');
    notificationsBt.textContent = '🔔';
    return notificationsBt;
};


export const createMessagesBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const messagesBt = document.createElement('button');
    upperNav.appendChild(messagesBt);
    messagesBt.classList.add('buttonGenS', 'ocultable');
    messagesBt.textContent = '💬';
    return messagesBt;
};


export const createUserBt = () => {
    const upperNav = document.querySelector('nav') || createUpperNav();
    const userBt = document.createElement('button');
    upperNav.appendChild(userBt);
    userBt.classList.add('buttonGenS');
    userBt.textContent = '👤';
    return userBt;
};


export function paintHeader() {
    createHeader();
    createUpperNav();
    createLogo();
    createInicioBt();
    createExplorarBt();
    createCrearBt();
    createSearchInput();
    createNotificationsBt();
    createMessagesBt();
    createUserBt();

};

// export let topic;

let topic;

export const buscar = () => {
    topic = searchInput.value;
    console.log(topic);
    
    return topic;
};
