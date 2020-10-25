#!/usr/bin/env node

const Generator = require(".");

const amount = +process.argv.pop() || 1;

const generator = new Generator();
const nameOrNames = generator.getName(amount);
const names = Array.isArray(nameOrNames) ? nameOrNames : [nameOrNames];

console.log(names.join("\n"));
