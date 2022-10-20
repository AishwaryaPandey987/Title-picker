const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');
const titleValue = document.querySelector('.titleValue');

btn.addEventListener('click', async()=>{

  let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
 

  chrome.scripting.executeScript(
    {
      target : { tabId:tab.id},
      function: pickTitle,
    } , async(results) => {

      const[data] =results;
      if(data.results){
       console.log(data);
        titleGrid.style.backgroundColor= title;
      }
    
    } );
    
});
 function pickTitle(){
 var titleElement = document.getElementsByTagName("title")[0];
return titleElement.textContent;
}