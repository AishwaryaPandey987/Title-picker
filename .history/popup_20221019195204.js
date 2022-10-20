const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');
const titleValue = document.querySelector('.titleValue');

btn.addEventListener('click', async()=>{

  let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
  

 function pickTitle(){
 var titleElement = document.getElementsByTagName("title")[0];
 var title= titleElement.textContent;
 
 return title;
 
console.log(title);
}
});
