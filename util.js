
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

module.exports = { log }

