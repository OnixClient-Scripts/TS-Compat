name = "Scripting UI";
description = "Regular Onix Client UI, but with only scripts shown.";

let openKey = client.settings.addNamelessKeybind("Scripting Key", 0);
let instantlyOpenGUI = client.settings.addNamelessBool("Instantly Open Module Editor", false);

function toggleScriptsOn() {
    let modules = client.modules();
    for (let i = 0; i < modules.length; i++) {
        if (!modules[i].isScript) {
            modules[i].settings[0].parent.visible = false;
        }
        if (modules[i].name == "Global Settings" || modules[i].name == "Color Options") {
            modules[i].settings[0].parent.visible = true;
        }
    }
    if (!instantlyOpenGUI.value) gui.showScreen("HudEditor");
    if (instantlyOpenGUI.value) gui.showScreen("ModuleEditor");
}

function toggleScriptsOff() {
    let modules = client.modules();
    for (let i = 0; i < modules.length; i++) {
        if (!modules[i].isScript) {
            modules[i].settings[0].parent.visible = true;
        }
    }
}

event.listen("KeyboardInput", (key, state) => {
    if (key === openKey.value && state === true) {
        toggleScriptsOn();
    } else {
        toggleScriptsOff();
    }
    if (key === 0x09 && state === true) {
        toggleScriptsOff();
    }
});