let folder = JSON.parse(localStorage.getItem("user"));
let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${folder.country}`;

import { newsData, append } from "../components/fetch.js";
import { navbar, sidebar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
let data = await newsData(url);
console.log(data);
let container = document.querySelector("#news_result");
append(data, container);
let bar = document.querySelector("#sidebar");
sidebar(bar, folder);
let category = document.querySelector("#category").children;

for (let el of category) {
  el.addEventListener("click", cSearch);
}
async function cSearch() {
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`;
  let data = await newsData(url);
  append(data, container);
}

let searchQ = (e) => {
  if (e.key === "Enter") {
    showNews();
  }
};
document.querySelector("#search_box").addEventListener("keydown", searchQ);
async function showNews() {
  let query = document.querySelector("#search_box").value;
  let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
  let data = await newsData(url);
  console.log(data);
  // append(data,container);
}
