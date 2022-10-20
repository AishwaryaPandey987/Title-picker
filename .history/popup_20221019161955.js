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
 title.innerHTML = $(document).attr('title');
  console.log(title);
  return title;
}