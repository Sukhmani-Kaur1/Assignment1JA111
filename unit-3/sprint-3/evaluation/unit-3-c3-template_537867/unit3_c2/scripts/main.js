let form = document.querySelector("#form");

let getData = () => {
  event.preventDefault();
  let name = form.name.value;
  let email = form.email.value;
  let address = form.address.value;
  let amount = form.amount.value;

  let p1 = new FormData(name, email, address, amount);
  if (name != "" && email != "" && address != "" && amount != "") {
    localStorage.setItem("user", JSON.stringify(p1));
    document.querySelector("#form").reset();
  } else {
    alert("fill all details");
  }
};

function FormData(n, e, ad, am) {
  this.name = n;
  this.email = e;
  this.address = ad;
  this.amount = am;
}
