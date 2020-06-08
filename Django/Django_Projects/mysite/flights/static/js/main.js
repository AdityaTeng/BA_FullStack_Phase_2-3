const btn = document.getElementById('btn')

btn.addEventListener('click', send_email);

let params = {
    'f_name' : 'Aditya',
    'l_name' : 'Teng'
}

let params1 = JSON.stringify(params)

  // Load Github Users
function send_email(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/send_email/', true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

    xhr.onload = function(){
        console.log(xhr.status) 
        if(this.status == 200){
            var output = ''
            output +=
                'Email Sent'
            document.getElementById('result').innerHTML = output
        console.log("2")
        }
    //     else if (this.status !=200)
    }
    
    console.log("1")

    xhr.send(params1)
  }