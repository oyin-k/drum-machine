import React, { useState, useEffect, useCallback } from "react";

export default function DrumPad({
  clipId,
  keyTrigger,
  clip,
  keyCode,
  display
}) {
  const [active, setActive] = useState();

  const playSound = useCallback(() => {
    const sound = document.getElementById(keyTrigger);
    const newName = clipId.replace(/-/g, " ");
    display(newName);
    sound.currentTime = 0;
    sound.play();
  }, [keyTrigger, display, clipId]);

  const onMyPress = useCallback(
    e => {
      if (e.keyCode === keyCode) {
        setActive(e.keyCode);
        playSound();
      }
    },
    [keyCode, playSound]
  );

  const removeMyPress = useCallback(() => {
    setActive(undefined);
  }, [setActive]);

  useEffect(() => {
    document.addEventListener("keydown", onMyPress);
    document.addEventListener("keyup", removeMyPress);

    return () => {
      document.removeEventListener("keydown", onMyPress);
      document.removeEventListener("keyup", removeMyPress);
    };
  }, [onMyPress, removeMyPress]);

  return (
    <div>
      <button
        id={clipId}
        onClick={playSound}
        className={keyCode === active ? "drum-pad active" : "drum-pad"}
        onKeyDown={onMyPress}
        onKeyUp={removeMyPress}
      >
        <audio className="clip" id={keyTrigger} src={clip} />
        {keyTrigger}
      </button>
    </div>
  );
}
