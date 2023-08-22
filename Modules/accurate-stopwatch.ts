/**
 * Made by Tom (aka Jerry)
 */
name = "Accurate stopwatch";
description = "A simple stopwatch, millisecond-precise, for timing things.";

positionX = 0;
positionY = 0;
sizeX = 0;
sizeY = 0;

const modSettings = {
  startKey: client.settings.addNamelessKeybind("Start", 0),
  stopKey: client.settings.addNamelessKeybind("Pause/Stop", 0),
  resetKey: client.settings.addNamelessKeybind("Reset", 0),
  showNotifs: client.settings.addNamelessBool("Show notifications", true),
  bgColour: client.settings.addNamelessColor("Background colour", [0, 0, 0, 128]),
  textColour: client.settings.addNamelessColor("Text colour", [255, 255, 255]),
  bgPadding: client.settings.addNamelessInt("Padding", 0, 20, 2),
  //pauseOnMenu: client.settings.addNamelessBool("Pause the stopwatch when in the pause menu or loading terrain menu", true),
};

let timerRunning = false;
let timerStartedAt = 0;
let currentTime = 0;

event.listen("KeyboardInput", (key, down) => {
  if (gui.screen() !== "hud_screen") return;

  if (key === modSettings.startKey.value && down) {
    if (timerRunning) return;

    timerRunning = true;
    if (modSettings.showNotifs.value) client.notification("Stopwatch started.");
    return true;
  }

  if (key === modSettings.stopKey.value && down) {
    if (!timerRunning) return;

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

  const text =
    (time > 3600 ? (hours < 10 ? "0" + hours : hours) + "." : "") +
    (time > 60 ? (minutes < 10 ? "0" + minutes : minutes) + "." : "") +
    ((seconds < 10 ? "0" + seconds : seconds) + ".") +
    (milliseconds === 0 ? "000" : milliseconds);

  return text;
};

render2 = () => {
  if (timerRunning) currentTime = os.clock() - timerStartedAt;
  else timerStartedAt = os.clock() - currentTime;

  const pad = modSettings.bgPadding.value;
  const text = timerText(currentTime);
  [sizeX, sizeY] = gfx2.textSize(text);
  sizeX += pad * 2;
  sizeY += pad * 2;

  gfx2.color(modSettings.bgColour.value);
  gfx2.fillRect(0, 0, sizeX, sizeY);

  gfx2.color(modSettings.textColour.value);
  gfx2.text(pad, pad, text);
};
