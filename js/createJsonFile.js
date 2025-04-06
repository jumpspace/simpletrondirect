// createJsonFile.js
let smlCode = [];
let startAddr = 256;
let nextAddr = 0;
let fourDigitHex = 4096;

function updateAddrLoc(loc) {
    'use strict';

    let intLoc = parseInt(loc, 16);
    intLoc += 1;
    let addrLocDisp = (intLoc < fourDigitHex) ? "0".toString() + intLoc.toString(16) : intLoc.toString(16);
    document.getElementById('addrloc').innerText = intLoc.toString(16);
    document.getElementById('instcode').value = "";
}

function insertSml() {
    'use strict';

    let addrloc = document.getElementById('addrloc').innerText;
    let instcode = document.getElementById('instcode').value;
    let codelines = document.getElementById('codelines');

    codelines.value = codelines.value + addrloc + " -> " + instcode + "\r\n";

    smlCode.push({
        "addr": addrloc,
        "code": instcode
    });

    updateAddrLoc(addrloc);
}

function serializeJson() {
    // convert Javascript array into JSON document.
    let smlJson = { "sml": smlCode };
    let jsonFile = JSON.stringify(smlJson);
}

function init() {
    'use strict';

    if (document && document.getElementById) {
        let codeForm = document.getElementById('codeform');

        // Display address location as 4-digit hex value, with leading 0 for values less than 0x1000
        let startAddrDisp = (startAddr < fourDigitHex) ? "0".toString() + startAddr.toString(16) : startAddr.toString(16);
        document.getElementById('addrloc').innerText = startAddrDisp;


    }
}

window.onload = init;