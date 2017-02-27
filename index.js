
function init() {
    
}

exports.handleMessage = function handleMessage(message) {
    "use strict";

    if (message.action == "init") {
        init();
    }
};