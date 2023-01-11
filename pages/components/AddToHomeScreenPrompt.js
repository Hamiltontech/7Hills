import React, { useState, useEffect } from 'react';
function addToHomeScreenIOS() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide your UI button
    a2hsBtn.style.display = 'none';
    // this is the actual script that opens the share menu
    var a2hsFakeBtn = document.querySelector(".ad2hs-fake-btn"); // fake button to trigger share sheet
    a2hsFakeBtn.style.display = 'block'; // show the fake button
    a2hsFakeBtn.addEventListener("click", addToHomeScreen); // attach click listener
}

function addToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide the fake button
    a2hsBtn.style.display = 'none';
    // this is the actual script that opens the share menu
    if(navigator.share) {
        navigator.share({
            title: "My Progressive Web App",
            text: "Check out My Progressive Web App",
            url: "https://mypwa.com",
        })
            .then(() => console.log("Successful share"))
            .catch((error) => console.log("Error sharing", error));
    }
}

function AddToHomeScreenPrompt() {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleAddToHomeScreenClick = () => {
    if (!prompt) {
      return;
    }

    prompt.prompt();

    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }

      setPrompt(null);
    });
  };

  return (
    <>
      {prompt !== null && (
        <div className="add-to-home-screen-prompt">
        <button onClick={handleAddToHomeScreenClick}>
          Add to Home Screen
        </button>
        </div>
      )}
    </>
  );
}

export default AddToHomeScreenPrompt;
