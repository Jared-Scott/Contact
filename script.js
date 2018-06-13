function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validFirstName = false;
  var validLastName = false;
  var validEmail =false;
  var validPhone = false;
  var validAddress = false;
  var validCity = false;
  var validZip= false;
  
  
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  var check1 =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

   /*********** VALIDATES FIRSTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.firstname.value=== "" ||
 myContact.firstname.value.length >7||
    !myContact.firstname.value.match(letters))
 errorMessages += "<p>The first name must be less than 20 characters and it is required</p>";
 else
 validFirstName = true; 
  
    /*********** VALIDATES LASTNAME ******** */
 if (myContact.firstname.value==null ||
 myContact.lastname.value=== "" ||
 myContact.lastname.value.length >50||
     !myContact.lastname.value.match(letters))
 errorMessages += "<p>The last name must be less than 50 characters and it is required</p>";
 else
 validLastName = true; 
  
     /*********** VALIDATES EMAIL ******** */
 if (myContact.email.value==null ||
 myContact.email.value=== "" ||
    !myContact.email.value.match(check1))
 errorMessages += "<p>The email is required</p>";
 else
 validEmail = true;
  

  
 
  
  //no validation code for comments because comments are optional.
  
 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return ( 
         validFirstName && validLastName && validEmail ) ;
}
