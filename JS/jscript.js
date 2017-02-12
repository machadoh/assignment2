	var BirthVar = document.getElementById("birth");
	var EmailVar = document.getElementById("email");
	var NameVar = document.getElementById("name");
	var PhoneVar = document.getElementById("phone");
	var SubmitVar = document.getElementById("Submit");

	BirthVar.addEventListener("change", validateBirth, false);
	EmailVar.addEventListener("change", validateEmail, false);
	NameVar.addEventListener("change", validateName, false);
	PhoneVar.addEventListener("change", validatePhone, false);
	SubmitVar.addEventListener("click",screenOff , false);



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
        var a = /^[-a-zA-Z_.]* [-a-zA-Z_.]*$/.test(document.getElementById("name").value);
        var b = /^\d{2}\-\d{2}\-\d{4}$/.test(document.getElementById("birth").value);
        var c = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value);
        var d = /^\d{3}\-\d{3}\-\d{4}$/.test(document.getElementById("phone").value);

        if(!a){
         alert("Name Error: Incorrect Format");
         return false;
        } else if(!b){
         alert("Birth date Error:Incorrect Format");
         return false;
       } else if(!c){
          alert("Email Error: Incorrect Format");
          return false;
        }else if(!d){
         alert("Phone Error: Incorrect Format");
         return false;
        }else{
         alert("You are signed up to win the Trip \n"+
		"GOOD LUCK!\n" );
        return true;
        }
      }


      function screenOff(event){
        var decide = submitForm();
        if(!decide){
          event.preventDefaullt();
        }else{
          document.getElementById("myForm").style.visibility = 'hidden';
        }
      }