#!/usr/bin/env -S node --experimental-vm-modules
"use strict";

const args = process.argv.slice(2)
if (args.length < 1 || args.length > 1) {
    console.error('Invalid params provided')
    process.exit(1)
}
const [city] = args;

const data = require('../data/data.json')
console.log(data.find((obj) => obj.city_ls.includes(city)) || 'No matches found')