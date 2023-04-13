// Ejemplo de objeto para agregar warrant

/* const warrant = {
    name: 'Pablo Ortiz',
    status: {
        label: 'Pending approval',
        id: 'pending'
    },
    img: './../assets/character.png',
    dateExpiry: 7,
    information: ['New information', 'Other', 'Id: 160']
} */

function findElement(selector, parent = document) {
    return parent.querySelector(selector);
}

function addWarrant(data) {
    let {name, status, img, dateExpiry, information} = data;
    const cardList = findElement('.warrants .cardList');
    const card = findElement('.cardList .card');
    const cloneCard = card.cloneNode(true);
    let informationDiv = cloneCard.querySelectorAll('.information p');
    let statusDiv = findElement('.status', cloneCard);

    statusDiv.className = 'status '+status.id;
    statusDiv.innerHTML = status.label;

    findElement('.name', cloneCard).innerHTML = name;
    findElement('.expiration', cloneCard).innerHTML = 'In '+dateExpiry+' days';
    findElement('.character img', cloneCard).setAttribute('src', img);

    information.forEach((element, index) => {
        informationDiv[index].innerHTML = element;
    });

    cardList.appendChild(cloneCard);
}

function toggleDuty() {
    const dutyState = findElement('header .duty .state');
    const dutyOn = dutyState.classList.contains('on');
    const text = dutyOn ? 'Off duty' : 'On duty';
    const classDuty = dutyOn ? 'off' : 'on';
    findElement('p', dutyState).innerHTML = text;
    dutyState.className = 'state '+classDuty;
}

function changeNameDuty(name) {
    findElement('header .duty .name').innerHTML = name;
}

function changeRangeDuty(range) {
    findElement('header .duty .range').innerHTML = range;
}