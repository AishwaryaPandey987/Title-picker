const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');
const titleValue = document.querySelector('.titleValue');

btn.addEventListener('click', async()=>{

 // let [tab] = await chrome.tabs.query({active: true, currentWindow : true});

 var title=picktitle();
 console.log(title);
}
);

function picktitle(){
  var titleElement = document.getElementsByTagName("title")[0];
  console.log( titleElement.textContent);
  return  titleElement.textContent;
 
}