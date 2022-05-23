//store the products array in localstorage as "products"

var form = document.querySelector("form");
form.addEventListener("submit", productsData);

function productsData(){
    event.preventDefault()
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;
    if(type!==""&&desc!==""&&price!==""&&image!==""){
    var p1 = new CreateData(type,desc,price,image)
    productsArr.push(p1);
    localStorage.setItem("products", JSON.stringify(productsArr))
    // console.log(p1)
    document.querySelector("form").reset();

    }else{
        alert("Fill all Details")
    }
}
var productsArr = JSON.parse(localStorage.getItem("products")) || [];
function CreateData(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = `₹${p}`;
    this.image = i;
}
