/* this script is just for login form validation. it also checks if the current email address
  the user entered has never been signed in the sign up page using the local storage API */

( function(){
     let loginEmail = document.querySelector('#email'),
         loginErrorMsg = document.querySelector('.error-message'),
         form = document.querySelector('form') ;

         form.addEventListener('submit', (ev) => {
         ev.preventDefault()
               //loop through all local storage
              for(let i = 0 ; i < localStorage.length ; i++){
                          if(localStorage.key(i) == loginEmail.value){
                                loginErrorMsg.innerHTML = 'login Sucsessfull...'
      
    /* break the iteration and execute the above statements when the search result was found */
                               
                               break ;
                     } 
                    
                     if(localStorage.key(i) != loginEmail.value){
                           loginErrorMsg.innerHTML = `Sorry: no account found for
                                                      <strong style = "color:red;
                                                      text-decoration :underline">
                                                       ${loginEmail.value}</strong>`;   
                     }
               }
         })
        
}());