const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');


btn.addEventListener('click', async(tab)=> {

await chrome.tabs.query({active: true, currentWindow : true},

function(tab){
 var value = tab[0].title;
 console.log(value);
 titleGrid.innerHTML=value;
 return value;
},

);


}
);

