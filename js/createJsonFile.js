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
    document.getElementById('addrloc').innerText = addrLocDisp.toUpperCase();
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
    let smlJson = { "sml": smlCode };
    let jsonFile = JSON.stringify(smlJson);

    // Show contents of resulting text. Place in a file
    let filecode = document.getElementById('src-code');
    filecode.innerText = jsonFile;
    let fcBlob = new Blob([jsonFile], { type: "text/plain" });

    // Create a link to self-download the source code file
    let a = document.createElement('a');
    a.href = URL.createObjectURL(fcBlob);
    a.download = "sml_source.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function init() {
    'use strict';

    if (document && document.getElementById) {
        let codeForm = document.getElementById('codeform');

        // Display address location as 4-digit hex value, with leading 0 for values less than 0x1000
        let startAddrDisp = (startAddr < fourDigitHex) ? "0".toString() + startAddr.toString(16) : startAddr.toString(16);
        document.getElementById('addrloc').innerText = startAddrDisp;

        codeForm.onsubmit = serializeJson;
    }
}

window.onload = init;