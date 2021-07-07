/* this script is for sign up validation that compare users input password and confirm password
   if all input are correct then the value user entered will be stored in a local storage API
   note: i use the local storage to act like a database  just for practice.
    since i am front end developer */

 function signUpvalidation(){

          let  signUpEmail = document.querySelector('.email'),
              password = document.querySelector('.password'),
              confirmPassword = document.querySelector('.confirm-password'),
              signUpError = document.querySelector('.signup-error') ,
              signUpForm = document.querySelector('form') ;

             signUpForm.addEventListener('submit', (ev) => {
                      
                    if(localStorage.key(0) != null){
                          for(let i = 0 ; i < localStorage.length ; i++){      

                               if(localStorage.key(i) == signUpEmail.value){
                                              ev.preventDefault() 
                                              signUpError.innerHTML = `an account with this email
                                                                     address has already been signed.`
                                       } 
                           }
                    }

                  if(password.value != confirmPassword.value){
                          ev.preventDefault();
                           signUpError.innerHTML = `Error: the two input password are not matched. `;
                    }

                   else{
                          //save new email address
                          localStorage.setItem(`${signUpEmail.value}`,`${signUpEmail.value}`)
                    } 
                   
         }) ;
 } 
  // function call
  signUpvalidation()