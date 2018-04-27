export const entryOutput = {}

entryOutput
entryOutput.entry = `
title 入口(entry)
# webpack 单个入口(简写)语法
---code---
const path = require('path');
module.exports = {
	entry: path.resolve(__dirname, './src/main.js');
}
---code---
`