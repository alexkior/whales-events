const $accountDiv = document.body.querySelector('#inputless');
const $accountDivForm = document.body.querySelector('#inputlessForm');
const $accountInput = document.body.querySelector('#inputForm');
const $knopka = document.body.querySelector('#knopka');

if($accountDiv) {
$accountDiv.addEventListener('click', async (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.innerText === 'Редактировать') {
    event.preventDefault();
    // $accountInput.remove();
    const response = await fetch(`/account`, {
      method: "POST"
    });
    console.log(response);
    if (response.ok) {
      const dataFromBack = await response.json();
      $accountDivForm.remove();
      // $accountDiv.innerHTML = dataFromBack;
      $accountDiv.innerHTML = createDomElement(dataFromBack);

      function createDomElement(info) {
        return (`
        <form action="/account"  method="PATCH" class="input-bar_signup" id="inputForm">
        <div class="input-bar__input_text input-bar_create_email">
          <input name="email" value=${info.email} placeholder="E-mail" id="input_text" type="email" data-length="10">
        </div>
    
        <div class="input-bar__input_text input-bar_create_firstName">
          <input name="firstName" value=${info.firstName} placeholder="Имя" id="input_text" type="text" data-length="10">
        </div>
    
        <div class="input-bar__input_text input-bar_create_lastName">
          <input name="lastName" value=${info.lastName} placeholder="Фамилия" id="input_text" type="text" data-length="10">
        </div>
    
        <div class="input-bar__input_text input-bar_create_city">
          <input name="userCity" value=${info.userCity} placeholder="Город" id="input_text" type="text" data-length="10">
        </div>
    
        <button data-id class="input-bar__button input-bar_create_register">
          Применить
        </button>
      </form>
        `)
      }
    }
  }
  if (event.target.tagName === 'BUTTON' && event.target.hasAttribute('data-id')) {
    event.preventDefault();
    const $accountInput = document.body.querySelector('#inputForm');

    const dataValue = Object.fromEntries(new FormData($accountInput));
    console.log(dataValue);
    const response = await fetch('/account', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(dataValue),
    });
    if (response.ok) {
      const newInfo = await response.json();
      console.log('------------->>>>>', newInfo);
      $accountInput.remove();
      $accountDiv.innerHTML = createDomElement(newInfo);

      function createDomElement(info) {
        return (`
        <form action="/account" class="input-bar_signup" id="inputlessForm">
      <div class="input-bar__input_text input-bar_create_email">
        <p class="input-bar__inputlessText">
          E-mail: ${info.email}
        </p>
      </div>

      <div class="input-bar__input_text input-bar_create_firstName">
        <p class="input-bar__inputlessText">
          Имя: ${info.firstName}
        </p>
      </div>

      <div class="input-bar__input_text input-bar_create_lastName">
        <p class="input-bar__inputlessText">
          Фамилия: ${info.lastName}
        </p>
      </div>

      <div class="input-bar__input_text input-bar_create_city">
        <p class="input-bar__inputlessText"> 
          Город: ${info.userCity}
        </p>
      </div>

      <button class="input-bar__button input-bar_create_register" type="submit">
        Редактировать
      </button>
    </form>
        `)
      }
      // window.location = '/account';
    }
  }
});
}

// const create = document.querySelector('#create');
// if (create) {
//   create.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const dataValue = Object.fromEntries(new FormData(create));
//     const eventsWrapper = document.querySelector('#events');
//     const response = await fetch('/create', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json;charset=utf-8' },
//       body: JSON.stringify({dataValue}),
//     });
//     if (response.ok) {
//       const newPost = await response.json();
//       console.log('FFFFFFFFFFFFFFFFFFFFFF',newPost);
//       eventsWrapper.insertAdjacentHTML('afterbegin', newPostInsert(newPost));
//       function newPostInsert(info) {
//         return (`
//         <div class="event">
//         <img src="./img/bootcamp.jpeg" alt="" class="event__pic">
  
//         <p class="event__tags">${info.tagName}</p>
  
//         <h3 class="event__title">${info.eventName}</h3>
  
//         <span class="event__stats event__stats-date">
//           <img src="./img/svg/time.svg" alt="" class="event__icon">
//           <p class="event__text">${info.date}</p>
//         </span>
  
//         <span class="event__stats event__stats-loc">
//           <img src="./img/svg/map.svg" alt="" class="event__icon">
//           <p class="event__text">${info.cityName}</p>
//         </span>
//       </div>
//         `)
//       }
//     };
//   });
// }



const indexForm = document.querySelector('#search');

if(indexForm) {
indexForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const eventsWrapper = document.querySelector('#events');

  const citySelect = document.querySelector('#citySelect');
  const cityId = citySelect.value;
  
  const tagSelect = document.querySelector('#tagSelect');
  const tagId = tagSelect.value;
  if(e.target.tagName === 'BUTTON') {
    const response = await fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ tagId, cityId }),
    });
    if(response.ok) {
      const findPosts = await response.json();
      console.log(findPosts);
      
      eventsWrapper.innerHTML = createEvents(findPosts);
    }
  }
})

}

function createEvents(data) {
  return `
    ${
      data.findEvents.map(el => `
      <div class="event">
      <img src="./img/bootcamp.jpeg" alt="" class="event__pic">

      <p class="event__tags">${data.findTags.tagName}</p>

      <h3 class="event__title">${el.eventName}</h3>

      <span class="event__stats event__stats-date">
        <img src="./img/svg/time.svg" alt="" class="event__icon">
        <p class="event__text">${el.date}1</p>
      </span>

      <span class="event__stats event__stats-loc">
        <img src="./img/svg/map.svg" alt="" class="event__icon">
        <p class="event__text">${data.findCities.cityName}</p>
      </span>
    </div>`)
    }
  `
}
