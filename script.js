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
        playAudioOnce();
        alert("You Qr is : " + decodeText, decodeResult);
        document.getElementById("qrCode").value = decodeText;


        console.log(`${decodeResult}`)
        console.log(decodeResult)

        // let message = decodeResult;
        // let message1 = decodeText;
        // document.getElementById("displayText").textContent = message;
        // document.getElementById("displayText1").textContent = message1;


    }


// Flag to ensure the audio plays only once
let hasPlayedAudio = false;

// Function to play audio once
function playAudioOnce() {
    if (!hasPlayedAudio) {  // Check if audio has already been played
        let audio = document.getElementById("myAudio");
        audio.play();
        hasPlayedAudio = true;  // Set the flag to true after playing audio
    }
}

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});
