// ==UserScript==
// @name         Remove Season Pass auto
// @namespace    https://github.com/OscarGreen03/-SeasonPassRemover
// @version      0.3
// @description  fantastic script (donations in fishbucks plz)
// @author       Okka
// @match        https://www.fishtank.live/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fishtank.live
// @updateURL    https://github.com/OscarGreen03/-SeasonPassRemover/blob/main/SeasonPassRemover.js
// @downloadURL  https://github.com/OscarGreen03/-SeasonPassRemover/blob/main/SeasonPassRemover.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const regexPattern = /Toast_toast/;

    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Iterate over the added nodes
                mutation.addedNodes.forEach(node => {
                    // Check if the node is an element and matches the regex pattern
                    if (node.nodeType === Node.ELEMENT_NODE && regexPattern.test(node.className)) {
                        // Perform the action on the matched element
                        //console.log("Element Found");
                        node.remove();
                        observer.disconnect();
                    }
                });
            }
        }
    });
    console.log("Test Update");
    // Observe changes to the body element
    observer.observe(document.body, { childList: true, subtree: true });
})();
