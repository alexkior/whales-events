const $accountForm = document.body.querySelector('#account_id');

$accountForm.addEventListener('click', async (event) => {

  if (event.target.tagName === 'BUTTON') {
    event.preventDefault();
    const response = await fetch(`/account`, {
      method: "DELETE",
    });
    console.log(response);
      if (response.ok) {
        const dataFromBack = await response.json();
        console.log(dataFromBack);
        $accountForm.remove();

      }
    }

    const dataValue = Object.fromEntries(new FormData(event.target));

  //   if(response.ok){
  //     const dataFromBack = await response.json();
  //     $postWrapper.insertAdjacentHTML('afterbegin', createDomElement(dataFromBack))

  //     function createDomElement(dataFromBack){
  //         return(`
  //         <div data-id="${dataFromBack.id}" class="col s3">
  //   <div class="card blue-grey darken-1">
  //     <div class="card-content white-text">
  //       <span class="card-title">${dataFromBack.title}</span>
  //       <p>${dataFromBack.text}</p>
  //     </div>
  //     <div class="card-action">
  //         <button>delete</button>
  //       <a href="#">This is a link</a>
  //     </div>
  //   </div>
  // </div>
  //         `)
  //     }
  // }

  //   response.data})
  // event.
  // if(response.ok){
  //   $postWrap.remove()
  // });
});

{ /* <div class="row">
    <div class="s4 offset-s4">
        <form id="account_id" action="/account" method="POST">
        <div class="row">
            <div class="input-field col s4">
                <input id="name" type="text" class="validate" name="firstName">
                <label for="firstName">firstName</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <input id="email" type="text" class="validate" name="lastName">
                <label for="lastName">lastName</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <input id="email" type="text" class="validate" name="email">
                <label for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <input id="password" type="password" class="validate" name='password'>
                <label for="password">Password</label>
            </div>
        <div class="row">
            <div class="input-field col s4">
                <input id="email" type="text" class="validate" name="cityName">
                <label for="cityName">cityName</label>
            </div>
        </div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
</div> */ }





{/* <script defer src="/js/application.js"></script>
<div class="row">
    <div class="s4 offset-s4">
        <form id="account_id" action="/account" method="DELETE">
        <div class="row">
            <div class="input-field col s4">
                <p>{{infa.firstName}}</p>
            </div>
        </div>
        <p></p>
        <div class="row">
            <div class="input-field col s4">
                <p>{{infa.lastName}}</p>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <p>{{infa.email}}</p>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <p>{{infa.password}}</p>
            </div>
        <div class="row">
            <div class="input-field col s4">
               <p>{{infa.cityName}}</p>
            </div>
        </div>
            <button class="delete" type="submit">Submit</button>
        </div>
        </form>
    </div>
</div> */}
