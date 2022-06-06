//https://masai-vouchers-api.herokuapp.com/api/vouchers
let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData.amount)
async function vaucherData() {
  var url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
  var res = await fetch(url);
  var data = await res.json();
  //   console.log(data[0].vouchers);
  append(data[0].vouchers);
}
var purchasedItems = JSON.parse(localStorage.getItem("purchase")) || [];
vaucherData();
let container = document.querySelector("#voucher_list");
var amount = document.querySelector("#balance");
amount.innerText = userData.amount;
let append = (data) => {
  data.forEach((el) => {
    var div = document.createElement("div");
    div.className = "voucher";
    var name = document.createElement("h2");
    name.innerText = el.name;
    var image = document.createElement("img");
    image.src = el.image;
    var price = document.createElement("p");
    price.innerText = el.price;
    var btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.className = "buy_voucher";
    btn.addEventListener("click", function () {
      if (userData.amount >= el.price) {
        alert("Hurray! purchase successful");
        userData.amount -= el.price;
        localStorage.setItem("user", JSON.stringify(userData));
        purchasedItems.push(el);
        localStorage.setItem("purchase", JSON.stringify(purchasedItems));
        window.location.reload();
      } else {
        alert("Sorry! insufficient balance");
      }
      // window.location.reload
    });
    div.append(image, name, price, btn);
    container.append(div);
  });
};
