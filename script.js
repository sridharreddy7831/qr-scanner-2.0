// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        // alert("You Qr is : " + decodeText, decodeResult);
          // Display the decoded text in the result-text element
    document.getElementById("result-text").innerText = "QR Code Result: " + decodedText;
    }
    var audio = new Audio("beep.mp3");
    audio.play();


    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
