const btn = document.querySelector('.changetitleBtn');

btn.addEventListener('click', async()=>{

  let [tab] = await chrome.tabs.query({active: true, currentWindow : true});
 

  chrome.scripting.executScript(
    {
      target : { tabId:tab.id},
      function: pickTitle,
    } );
});

function pickTitle(){

  console.log('script working');
}