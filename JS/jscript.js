	
	var BirthVar = document.getElementById("birth");
	BirthVar.addEventListener("change", validateBirth, false);
	var EmailVar = document.getElementById("email");
	EmailVar.addEventListener("change", validateEmail, false);
	var NameVar = document.getElementById("name");
	NameVar.addEventListener("change", validateName, false);
	var PhoneVar = document.getElementById("phone");
	PhoneVar.addEventListener("change", validatePhone, false);
	var SubmitVar = document.getElementById("Submit");
	SubmitVar.addEventListener("click", finishIt , false);


      function validateName(event){
        var regex = /^[-a-zA-Z_.]* [-a-zA-Z_.]*$/;
        var Name = event.currentTarget;
          if (!regex.test(Name.value)) {
          alert(Name.value + " is not in the correct format. \n "+
                " Correct format: First Last\n" );
         }
      }
      function validateBirth(event){
        var regex = /^\d{2}\-\d{2}\-\d{4}$/;
        var Birth = event.currentTarget;
        if (!regex.test(Birth.value)) {
          alert(Birth.value + " is not in the correct format. \n"+
		"Correct Format: MM-DD-YYYY\n" );
         }
      }
      function validateEmail(event){
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var Email = event.currentTarget;
          if (!regex.test(Email.value)) {
          alert(Email.value + " is not in the correct format. \n"+
		"Correct Format: username@pitt.edu\n" );
        }
      }
      function validatePhone(event) {
        var regex = /^\d{3}\-\d{3}\-\d{4}$/
        var Phone = event.currentTarget;
        if (!regex.test(Phone.value)) {
          alert(Phone.value + " is not in the correct format. \n"+
		"Correct Format: ###-###-####\n" );
        }
      }
      function submitForm(){
        var name1 = /^[-a-zA-Z_.]* [-a-zA-Z_.]*$/.test(document.getElementById("name").value);
        var birth1 = /^\d{2}\-\d{2}\-\d{4}$/.test(document.getElementById("birth").value);
        var email1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value);
        var phone1 = /^\d{3}\-\d{3}\-\d{4}$/.test(document.getElementById("phone").value);

        if(!name1){
         alert("Name Error: Incorrect Format");
         return false;
        } else if(!birth1){
         alert("Birth date Error:Incorrect Format");
         return false;
       } else if(!email1){
          alert("Email Error: Incorrect Format");
          return false;
        }else if(!phone1){
         alert("Phone Error: Incorrect Format");
         return false;
        }else{
         alert("You are signed up to win the Trip \n"+
		"GOOD LUCK!\n" );
        return true;
        }
      }


      function finishIt(event){
        var decide = submitForm();
        if(!decide){
          event.preventDefaullt();
        }else{
          document.getElementById("myForm").style.visibility = 'hidden';
        }
      }
