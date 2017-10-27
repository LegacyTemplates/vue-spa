Error.stackTraceLimit = Infinity;
import Vue from 'vue';
import 'es6-shim';

import config from './package.json';

for (var k in config.karma.globals) {
    global[k] = config.karma.globals[k];
}

Vue.config.productionTip = false

// require all test files (files that ends with .spec.ts)
var testsContext = require.context('./src', true, /\.spec\.ts/);
testsContext.keys().forEach(testsContext);
