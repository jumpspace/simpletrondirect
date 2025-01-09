// createJsonFile.js
let smlJson = { "sml": [] };
let smlCode = [];

function updateAddrLoc() {
    'use strict';


}

function insertSml() {
    'use strict';

    smlCode.push({
        "addr": document.getElementById('addrloc').value,
        "code": document.getElementById('instcode').value
    });
}

function serializeJson() {
    //TODO: convert Javaacript array into JSON document.

}

function init() {
    'use strict';

    if (document && document.getElementById) {
        let codeForm = document.getElementById('codeform');
        document.getElementById('addrloc').value = '';

        codeForm.onsubmit = serializeJson
    }
}

window.onload = init;