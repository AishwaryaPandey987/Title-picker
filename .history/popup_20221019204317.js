const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');
const titleValue = document.querySelector('.titleValue');

btn.addEventListener('click', ()=>{

let [tab] = chrome.tabs.query({active: true, currentWindow : true});
console.log(tab[0].title);

// var title=picktitle();
 //console.log(title);
}
);

//function picktitle(){  var titleElement = document.getElementsByTagName("title")[0]; console.log( titleElement.textContent);return  titleElement.textContent;}