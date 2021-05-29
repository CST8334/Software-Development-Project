
// use this instead of console.log
function log(entry) {
    let str;
    if (typeof entry === 'Object' && entry !== null) {
        try {
            str = JSON.stringify(entry);

        } catch (e) {
            str = "failed to stringify a self-referential object :(";
        }
    } else {
        str = entry;
    }

    console.log(`${new Date().toLocaleString()} - aetherwind server - ${str}`);
}

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(__dirname, "/react/build"))).listen(PORT, () => {
    log(`Listening on port: ${PORT}`);
});

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "/react/build/index.html"));
});

