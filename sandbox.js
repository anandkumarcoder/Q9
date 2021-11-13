const btnapi = document.querySelector("#btn-api");

const output = document.querySelector(".outputArea");

const serverURL = "https://mystery-api.kushanksriraj.repl.co/get"





function apiHandler() {
    fetch(serverURL)
        .then(response => {
            console.log(response.status)
            
            if (response.status === 401) {
                output.innerText ="user not logged in"
            } else if (response.status === 404) {
                output.innerText ="Page not found"
            } else if( response.status === 200){
                output.innerText = "API is working"
            }
            
        })
 

    //    .then(response => response.json()
    //    .then(json => console.log(json)))



}

btnapi.addEventListener('click', apiHandler)