 const name = document.getElementById("name");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const message = document.getElementById("message");

 var Name = document.getElementById("Full name");
 var Email = document.getElementById("email");
 var Phone = document.getElementById("phone number");
 var Message = document.getElementById("Message");

 function validationForm(){
     alertMessage();

     if(Name.ariaValueMax.length<5){
         errorNodes[0].Name;
         errorFlag = true;
     }

     function sendEmail(){
        sendEmail({
            Host : ".gmail.com",
            Username : "ntsakomphongola@gmail.com",
            Password : "DDAD3E38E5FFD194ACF706504C6986C3A756",
            To : 'ntsakomphongola@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New message of enquary",
            Body : "Full name: " + document.getElementById("Full name").value + "<br> Email: " + document.getElementById("email").value
            + " <br> Phone No: " + document.getElementById("Phone").value + "<br> Message: " + document.getElementById("mesaage").value,
            
        }).then(
            message => alert(message)
        );
    }

         var form = document.getElementById("my-form");

             async function handleSubmit(event) {
                 event.preventDefault();
                  var status = document.getElementById("my-form-status");
                  var data = new FormData(event.target);
           fetch(event.target.action, {
                 method: form.method,
                body: data,
        headers: {
                 'Accept': 'application/json'
        }
             }).then(response => {
              if (response.ok) {
              status.innerHTML = "Thanks for your submission!";
                  form.reset()
                      } else {
response.json().then(data => {
if (Object.hasOwn(data, 'errors')) {
  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
} else {
  status.innerHTML = "Oops! There was a problem submitting your form"
}
})
}
}).catch(error => {
status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)
 }