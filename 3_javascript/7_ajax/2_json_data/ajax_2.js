const btn_1 = document.getElementById('button_1')
const btn_2 = document.getElementById('button_2')
const user = document.getElementById('user')
const users_element = document.getElementById('users')


btn_1.addEventListener('click', load_user)

function load_user(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'user.json', true)
    let output = ''
    xhr.onload = function(){
        if (this.status == 200) {
            // console.log(this.responseText)
            let user_data = JSON.parse(this.responseText)
            console.log(user_data)
            output =   `<ul>
                        <li>id      :   ${user_data.id}       </li>
                        <li>name    :   ${user_data.name}     </li>
                        <li>email   :   ${user_data.email}    </li>
                        </ul>`
        user.innerHTML = output
        }
        
    }
    xhr.send()
}


btn_2.addEventListener('click', load_users)

function load_users(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'users.json', true)

    xhr.onload = function(){
        if (this.status == 200) {
        const users_data = JSON.parse(this.responseText)
        let output = ''
        users_data.forEach((users) =>  {
            output +=   `<div><ul>
                        <li>id      :   ${users.id}       </li>
                        <li>name    :   ${users.name}     </li>
                        <li>email   :   ${users.email}    </li>
                        <ul></div><br>`             
                })
        // console.log(output)
        console.log(users_data)
        users.innerHTML = output
            }
    }
    xhr.send()
}


