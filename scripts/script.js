const urlApi = "https://reqres.in/api/users?page=2";

function getUser() {
    axios.get(urlApi)

    .then( x => {
        let users = x.data.data

        for (i=0; i < users.length; i++){
            createUser(users[i]);
        }

    })
    
    .catch(e => console.log(e))
}

getUser()

function createUser(user) {

    var divUser = document.createElement('div'); divUser.classList.add('user');
    divUser.innerHTML = '<div class="divFuncoes"><a href="#"><img src="assets/icon-edit.svg" alt="" title="Editar"></a></div><div class="divFoto"><img class="foto" src="" alt="" height="100px" width="100px"></div><div class="divInfo"><span class="nome"></span><span class="email"></span></div>';

    divUser.id = user.id;
    divUser.getElementsByClassName('foto')[0].src =  user.avatar;
    divUser.getElementsByClassName('nome')[0].innerHTML = user.first_name + ' ' + user.last_name;
    divUser.getElementsByClassName('email')[0].innerHTML = user.email;

    document.getElementsByClassName('listUsers')[0].append(divUser);
}
