const $accountDiv = document.body.querySelector('#inputless');
const $accountDivForm = document.body.querySelector('#inputlessForm');
const $accountInput = document.body.querySelector('#inputForm');
const $knopka = document.body.querySelector('#knopka');


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
      $accountDiv.insertAdjacentHTML('afterbegin', createDomElement(dataFromBack));
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
      $accountDiv.insertAdjacentHTML('afterbegin', createDomElement(newInfo));

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
      window.location = '/account';
    }
  }
});
