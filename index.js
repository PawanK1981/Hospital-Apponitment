const fn =()=>{
 var name =prompt("Enter Name");
 name.value;
 
 if(name===null){
    document.querySelector("#sp3").innerHTML="";  
 }
 else{
    document.querySelector("#sp3").innerHTML=name;
 }
 document.querySelector("#sp3").style.color="#051937";
}
setTimeout(() => {
 fn(); 
},3000);
//  =============================================================================//
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("secs");
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
