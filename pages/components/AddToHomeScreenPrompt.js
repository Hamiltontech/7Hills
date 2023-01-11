import React, { useState, useEffect } from 'react';

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
