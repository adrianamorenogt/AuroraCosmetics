
const registro = document.querySelector('#registro')


registro.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)

    
    if(isUserRegistered) {
       return Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El usuario ya se ha registrado',
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro exitoso',
        showConfirmButton: false,
        timer: 1500
      })
    setTimeout(function(){
        window.location.href = 'login.html';
    },2000)  
    
})