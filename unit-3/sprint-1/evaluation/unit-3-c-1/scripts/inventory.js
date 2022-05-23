var data = JSON.parse(localStorage.getItem("products"));
   displayData(data)
  
    function displayData(data){
        var cont = document.querySelector("#all_products");
    data.forEach(function(el,i){
        var div = document.createElement("div")
       var img = document.createElement("img") ;
       img.src = el.image;
       var h3 =  document.createElement("h2");
       h3.innerText=el.desc;
       var p =  document.createElement("h4");
       p.innerText = el.price;
        var  h4 =  document.createElement("p");
        h4.innerText=el.type; 
    //    console.log(el) 
    var remove = document.createElement("button");
    remove.innerText="Remove"
    remove.addEventListener("click", function(){
        data.splice(i,1)
        localStorage.setItem("products", JSON.stringify(data))
        window.location.reload();
    })
    div.append(img,h3,p,h4,remove)
    cont.append(div)
    });
    }