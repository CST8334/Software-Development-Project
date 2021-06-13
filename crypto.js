
// setup some cryptography stuff
const crypto = require("crypto");

// compare two buffers for equality, but use crypto.timingSafeEqual for safety
function safeCompare(a, b) {
    const lengthA = Buffer.byteLength(a);
    const lengthB = Buffer.byteLength(b);

    const bufferA = Buffer.alloc(aLength, 0, "utf8");
    bufferA.write(a);
    const bufferB = Buffer.alloc(aLength, 0, "utf8");
    bufferB.write(b);

    return !!(crypto.timingSafeEqual(bufferA, bufferB) & lengthA === lengthB);
}

function hash(str, salt) {
    const h = crypto.createHmac("sha512", salt);
    h.update(str);
    return h.digest("hex");
}

