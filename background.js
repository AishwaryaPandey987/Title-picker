let value ='some';

chrome.runtime.onInstalled.addListener(()=>{
  chrome.storage.sync.set({ value});
});