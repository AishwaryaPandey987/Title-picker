const btn = document.querySelector('.changetitleBtn');

btn.addEventListener('click', async()=>{

  let[tab] = await Chrome.tabs.query({active: true, currentWindow : true});
  console.log(tab);
});