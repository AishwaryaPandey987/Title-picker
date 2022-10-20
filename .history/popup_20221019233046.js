const btn = document.querySelector('.changetitleBtn');

const titleGrid = document.querySelector('.titleGrid');

btn.addEventListener('click', async(tab)=> {

await chrome.tabs.query({active: true, currentWindow : true},

function(tab){
 const value = tab[0].title;
 return value;
}
);
} , async(result)=> {
 const data =result;
 console.log(data);
 titleGrid.innerHTML= data;
});

