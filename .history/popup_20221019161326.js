const btn = document.querySelector('.changetitleBtn');

btn.addEventListener('click', async()=>{

  let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
 

  chrome.scripting.executeScript(
    {
      target : { tabId:tab.id},
      function: pickTitle,
    } );
    return tab.pickTitle;
});

 async function pickTitle(){

  const pickTitle =document.getElementsByTagName("title");
  const title= pickTitle.innerText
  console.log(title);
}