name = "Chatlogger";
description = "Logs chat messages to a file.";

event.listen("ChatMessageAdded", (message,username,type) => {
    logChat(message, username)
})

function logChat(message: string, username: string) {
    if (username === null || username === "") {
        username = "";
    }
    let lastLine = "";
    if (lastLine !== message) {
        let toWrite = message;
        if (username !== "") {
            toWrite = "<" + username + "> " + toWrite;
        }
        let [file] = io.open("Chatlogger.txt", "a");
        if (file !== undefined) {
            file.write(toWrite + "\n");
        }
        io.close(file);
        lastLine = message;
    }
}