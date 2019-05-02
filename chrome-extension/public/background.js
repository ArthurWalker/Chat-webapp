/*This background .js interacts with the browser API, providing features that will persist across all parts of the internet */

/** Context menus in Chrome extension enable us to add an option to the right click menu of the browser. Once deployed, users will be
 * able to right click anywhere and see a "Get Headlines" option
 */
chrome.contextMenus.create({
    id:'HeadlineFeatcher',
    title: 'Get Headlines',
    contexts: ['all']
})


/** This adds a callback function to be invoked whenever a user clicks on the "Get Headlines" option.
 * The action executed within the function will identify the tab a user is currently on and send a message to that tab, telling it to 
 * get headlines
 */
chrome.contextMenus.onClicked.addListener(() =>{
    chrome.tabs.query({active:true,currentWindow:true}, tabs =>{
        chrome.tabs.sendMessage(tabs[0].id, {type: 'getHeadlines'});
    });
});

