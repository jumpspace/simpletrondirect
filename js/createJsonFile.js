// createJsonFile.js
let smlJson = { "sml": [] };
let smlCode = [];

function updateAddrLoc() {
    'use strict';


}

function insertSml() {
    'use strict';

    let addrloc = document.getElementById('addrloc').value;
    let instcode = document.getElementById('instcode').value;
    let codelines = document.getElementById('codelines');

    codelines.value = codelines.value + "...";

    smlCode.push({
        "addr": addrloc,
        "code": instcode
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