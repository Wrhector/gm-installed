"use strict";

const gmInstalled = require("../lib");

console.log(gmInstalled());
// => true

gmInstalled(isInstalled => {
    console.log(isInstalled);
    // => true
});
