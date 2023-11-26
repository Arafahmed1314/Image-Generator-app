const accessKey = "0jCiO3GCmdnAUAV3DVr7bF50aSYkrOPc2UAhKemRxuE";
const search_result = document.querySelector(".search-results");
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const showMore = document.querySelector(".show-more");
const form=document.querySelector("form");
let page = 1;
let inputData = "";

async function show() {
  inputData = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const res = await fetch(url);
  const data= await res.json();
  const results=data.results
if(page===1){
    search_result.innerHTML="";
}
results.map((result)=>{
const imagewrapper=document.createElement("div");
imagewrapper.classList.add("search-result");
const image=document.createElement("img");
image.src=result.urls.small;
image.alt=result.alt_description;
const imageLink=document.createElement('a')
imageLink.href=result.links.innerHTML
imageLink.target="_blank"
imageLink.textContent=result.alt_description;

imagewrapper.appendChild(image);
imagewrapper.appendChild(imageLink);
search_result.appendChild(imagewrapper);

});
page++;
if(page>1){
    showMore.style.display="block";
}

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    show();
})
showMore.addEventListener("click",()=>{
    show();
});