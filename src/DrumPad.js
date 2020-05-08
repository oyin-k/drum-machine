import React, { useEffect } from "react";

export default function DrumPad({ clipId, keyTrigger, clip, keyCode }) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const handleKeyPress = e => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  const playSound = e => {
    const sound = document.getElementById(keyTrigger);
    // if (!sound) return;
    sound.currentTime = 0;
    sound.play();
  };
  return (
    <div id={clipId} onClick={playSound} className="drum-pad">
      <audio className="clip" id={keyTrigger} src={clip} />
      {keyTrigger}
    </div>
  );
}
