async function newsData(url){
    var res = await fetch(url);
    var data = await res.json();
    return data.articles
    }
    function append(data,container){
        container.innerHTML = null;
        data.forEach(el =>{
            let div = document.createElement("div");
            div.className="news"
            let img =  document.createElement("img")
            img.src = el.urlToImage;
            let title =  document.createElement("h2")
            title.textContent=el.title
            let p =  document.createElement("p")
            p.textContent=el.author
            div.addEventListener("click",function(){
                
            })
            div.append(img,title,p);
            container.append(div);
        })
     }

    export {newsData , append};