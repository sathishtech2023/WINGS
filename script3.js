// .....................called by id. ...............
const form = document.getElementById("form");
const username = document.getElementById("username");
const phoneNumber = document.getElementById("phone-no");
const email = document.getElementById("EMAIL");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// ........prototype for email validation...

String.prototype.isEmail = function () {

    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};
// ...prototype for Number in mobile number.,,,,

String.prototype.isNumber = function () {
    return !!this.match(/^\d+$/);
};






function checkRequired(input){
    
    // ../.. used select the particular input
    input.forEach((input) => { 

        if(input.value.trim() === ""){
            errorInput(input,`${getName(input)} is Required`);
        }else{
            successInput(input);
        }
    });
}
    // ................show error particular input box...
    function getName(input){

        // return input.id; //..... using = ID......//
           return input.getAttribute("date-name")

    }


     function errorInput(input,message){

        const formGroup = input.parentElement;
        formGroup.className = "form-group error";
        const p = formGroup.querySelector("p");
        p.innerHTML = message;


     }
     function successInput(input){

        const formGroup = input.parentElement;
        formGroup.className = "form-group success";
        const p = formGroup.querySelector("p");
        p.innerHTML = "";
     }

    //  .../this function is used for validating the user name/.

    function checkLength (input,min,max){

        const data = input.value.trim().length;
        if(data<min){

            errorInput(input,`${getName(input)} Must be aleast greater than ${min} characters`);
        }
        else if(data>max){
            errorInput(input,`${getName(input)} Must be aleast lesser than ${max} characters`);

        }
        else{
            successInput(input);
        }
    }

    // .............check the confirm password...

      function checkConfirmPassword(password,password2){

        if(password.value != password2.value){

            errorInput(password2, `${getName(password2)} Does not match `);
        }

      }

    //   ...email validation function,,,,

      function checkEmail(input){

        if(!input.value.trim().isEmail()){

            errorInput(input,`This is not an valid email address`)
        }
      }
    //   ...mobile number validation..

    function checkNumber(input){

        if(!input.value.trim().isNumber()){

            errorInput(input,`Enter only number`)
        }
      }

   


    form.addEventListener("submit",function (e){

    e.preventDefault();
    // ................this function is used for apt form to javascript......... 
    checkRequired([username,phoneNumber,email,password,password2]);
    checkLength(username,5,10);
    checkLength(phoneNumber,10,10);
    checkLength(password,5,5);
    checkConfirmPassword(password,password2);
    checkEmail(email);
    checkNumber(phoneNumber,10,10);
    

    

})

