// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>

// global dependecy - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about procjet/package)
// manual approach (create package.json in the root, create properties etc)
// npm init -y (everthing default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
