var container = document.querySelector("#purchased_vouchers");
var purchaseData = JSON.parse(localStorage.getItem("purchase"));
let userData = JSON.parse(localStorage.getItem("user"));
append(purchaseData);
console.log(purchaseData);
var amount = document.querySelector("#balance");
amount.innerText = userData.amount;
function append(data) {
  data.forEach((el) => {
    var div = document.createElement("div");
    div.className = "voucher";
    var name = document.createElement("h2");
    name.innerText = el.name;
    var image = document.createElement("img");
    image.src = el.image;
    var price = document.createElement("p");
    price.innerText = el.price;
    div.append(image, name, price);
    container.append(div);
  });
}
