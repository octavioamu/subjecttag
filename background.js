var url = chrome.tabs.getSelected(null, function(tab) {
  //properties of tab object
  tabId = tab.id;
  tabUrl = tab.url;

  //rest of the save functionality.
});
 console.log(tabUrl);