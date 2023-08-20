name = "Stopwatch";
description = "A simple stopwatch for timing things.";

const modSettings = {
  startKey: client.settings.addNamelessKeybind("Start", 0),
  stopKey: client.settings.addNamelessKeybind("Pause/Stop", 0),
  resetKey: client.settings.addNamelessKeybind("Reset", 0),
  showNotifs: client.settings.addNamelessBool("Show notifications", true),
  bgColour: client.settings.addNamelessColor("Background colour", [128, 128, 128]),
  textColour: client.settings.addNamelessColor("Text colour", [255, 255, 255]),
};

let timerRunning = false;
let timerStartedAt = 0;
let currentTime = 0;

event.listen("KeyboardInput", (key, down) => {
  if (gui.screen() !== "hud_screen") return;

  if (key === modSettings.startKey.value && down) {
    timerRunning = true;
    if (modSettings.showNotifs.value) client.notification("Stopwatch started.");
    return true;
  }
  if (key === modSettings.stopKey.value && down) {
    timerRunning = false;
    if (modSettings.showNotifs.value) client.notification("Stopwatch paused.");
    return true;
  }
  if (key === modSettings.resetKey.value && down) {
    currentTime = 0;
    timerStartedAt = os.clock();
    if (modSettings.showNotifs.value) client.notification("Stopwatch reset.");
    return true;
  }
});

/** @noSelf */
const timerText = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - Math.floor(time / 60) * 60 - Math.floor(time / 3600) * 3600);
  const milliseconds = Math.floor((time - Math.floor(time)) * 1000);

  return `${time > 3600 ? (hours < 10 ? "0" + hours : hours) + "." : ""}${
    time > 60 ? (minutes < 10 ? "0" + minutes : minutes) + "." : ""
  }${(seconds < 10 ? "0" + seconds : seconds) + "."}${milliseconds === 0 ? "000" : milliseconds}`;
};

render2 = () => {
  if (timerRunning) currentTime = os.clock() - timerStartedAt;
  else timerStartedAt = os.clock() - currentTime;
  gfx2.color(modSettings.bgColour);
  gfx2.drawRect(0, 0, 20, 20, 0);
  gfx2.color(modSettings.textColour);
  gfx2.text(0, 0, timerText(currentTime));
};
