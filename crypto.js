
// setup some cryptography stuff
const crypto = require("crypto");

// compare two buffers for equality, but use crypto.timingSafeEqual for safety
//this is to protect against timming attacks
function safeCompare(a, b) {
    const lengthA = Buffer.byteLength(a);
    const lengthB = Buffer.byteLength(b);

    // we could check if the lengths are different here and early exit,
    // but the whole point is to make the runtime of this function constant, so don't
    const bufferA = Buffer.alloc(lengthA, 0, "utf8");
    bufferA.write(a);
    const bufferB = Buffer.alloc(lengthA, 0, "utf8");
    bufferB.write(b);

    return !!(crypto.timingSafeEqual(bufferA, bufferB) & lengthA === lengthB);
}

function salt() {
    // 32 is more or less arbitrary
    return crypto.randomBytes(32).toString("hex");
}
//creates hashcode
function hash(str, salt) {
    const h = crypto.createHmac("sha512", salt);
    h.update(str);
    return h.digest("hex");
}

module.exports = { safeCompare, hash, salt };

