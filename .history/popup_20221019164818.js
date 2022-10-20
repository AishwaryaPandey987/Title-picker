const btn = document.querySelector('.changetitleBtn');

btn.addEventListener('click', async()=>{

  let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
 

  chrome.scripting.executeScript(
    {
      target : { tabId:tab.id},
      function: pickTitle,
    } , async(results) => {

      console.log(results);
    } );
    
});
 function pickTitle(){
 var titleElement = document.getElementsByTagName("title")[0];
return titleElement.textContent;
}