function navbar (){
    return ` <div id="navbar">
    <!-- - The nav-bar will have following :- 
   * search box with Id as- "search_box"
   * Link for different country news with IDs as:-
     - India :- “in”
     - Usa :- “us”
     - China :- “ch”
     - UK :- “uk”
     - New Zealand :- “nz” -->
     <input type="search" placeholder="Search" id="search_box">

     <div id="category">
      <h4 id="in">India</h4>
      <h4 id="ch">China</h4>
      <h4 id="nz">Newzeland</h4>
      <h4 id="us">USA</h4>
      <h4 id="uk">UK</h4>
     </div>
    
    </div>`;
}
function sidebar(container,data){
//     Sidebar will have
//          - Image of user (Id:- "user_img")
//   - Name of user (Id:- "user_name")
//   - Email of user (Id:- "user_email")
//   - Country of user (Id:- "user_country) 
let img = document.createElement("img");
img.src=data.image;
let name = document.createElement("h2");
name.textContent=data.name;
let email = document.createElement("p");
 email.textContent = data.email;
 let country = document.createElement("p");
 country.textContent=data.country;
 container.append(img,name,email,country)

}
export {navbar,sidebar};