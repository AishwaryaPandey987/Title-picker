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

function pickTitle(){

  const gettitle = document.querySelector("#title");
  getCurrentTab().then((data) => (gettitle.innerHTML = data));
  console.log(gettitle);
}