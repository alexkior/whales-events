const axios = require('axios');

const $accountForm = document.getElementById('account_id');

$accountForm.addEventListener('submit',(event) => {
  event.preventDefault();
  axios.put('/account', {dataValue infa iz formbl}).then(response => {
    response.data данные из ьэка на фронт
    if(response.ok){
      const dataFromBack = await response.json();
      $postWrapper.insertAdjacentHTML('afterbegin', createDomElement(dataFromBack))

      function createDomElement(dataFromBack){
          return(`
          <div data-id="${dataFromBack.id}" class="col s3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">${dataFromBack.title}</span>
        <p>${dataFromBack.text}</p>
      </div>
      <div class="card-action">
          <button>delete</button>
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
          `)
      }
  }

    response.data})
  event.
  if(response.ok){
    $postWrap.remove()
}
});
