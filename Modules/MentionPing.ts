name = "Mention Ping";
description = "Plays a sound when you are mentioned in chat.";

let workingDir = "RoamingState/OnixClient/Scripts/Data/Sounds";

let discordMode = client.settings.addNamelessBool("Use Discord Ping", false);
let respondToHere = client.settings.addNamelessBool("Respond to @here", false);

event.listen("ChatMessageAdded", (message, username, type) => {
    if ((respondToHere.value && message.includes("@here")) || message.includes("@" + player.name())) {
        if (discordMode.value) {
            playCustomSound("discord.mp3");
        } else {
            playCustomSound("ding.mp3");
        }
    }
})