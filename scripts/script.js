const urlApi = "https://reqres.in/api/users?page=2";
var divListUser;

async function getUser() {
    await axios.get(urlApi)

    .then( x => {
        let users = x.data.data
        if (users.length < 0) {
            divListUser.append('Não há usuários cadastrados.')
        } 
        
        else{
            divListUser.innerHTML = '';

            // apenas 6 usuarios
            for (i=0; i < 6; i++){
                createUser(users[i]);
            }

            let divPag = document.createElement('div'); divPag.classList.add('pag');
            let spanPag = document.createElement('span');

            spanPag.innerHTML = 'mostrando ' + users.length + ' de ' + x.data.total;
            divPag.append(spanPag);

            divListUser.after(divPag);
        }
        
    })
    
    .catch(e => console.log(e))
}

function createUser(user) {

    var divUser = document.createElement('div'); divUser.classList.add('user');
    divUser.innerHTML = '<div class="divFuncoes"><a href="#"><img src="assets/icon-edit.svg" alt="" title="Editar"></a></div><div class="divFoto"><img class="foto" src="" alt="" height="100px" width="100px"></div><div class="divInfo"><span class="nome"></span><span class="email"></span></div>';

    divUser.id = user.id;
    divUser.getElementsByClassName('foto')[0].src =  user.avatar;
    divUser.getElementsByClassName('nome')[0].innerHTML = user.first_name + ' ' + user.last_name;
    divUser.getElementsByClassName('email')[0].innerHTML = user.email;
    
    divListUser.append(divUser);
}


window.onload = function () {
    divListUser = document.getElementsByClassName('listUsers')[0];
    
    var loding = document.createElement('div'); 
        loding.classList.add('loading');
        loding.innerHTML = '<div><div>';
    
    divListUser.innerHTML = loding.outerHTML;

    getUser();
}