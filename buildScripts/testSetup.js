// This file isn't transpiled, so must use CommonJS and ESS

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features taht Mocha doesn't understand.
require.extensions['.css'] = function() {};
