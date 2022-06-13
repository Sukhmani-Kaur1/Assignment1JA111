/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.querySelector("#submit").addEventListener("click", getData);
function getData() {
  let name = document.querySelector("#user_name").value;
  let email = document.querySelector("#user_email").value;
  let country = document.querySelector("#user_country").value;
  let image = document.querySelector("#user_pic").value;
  let p1 = new UserData(image,name, email, country);
  console.log(p1)
  localStorage.setItem("user",JSON.stringify(p1))
}

function UserData(i,n, e, c) {
this.image=i
  this.name = n;
  this.email = e;
  this.country = c;
}
