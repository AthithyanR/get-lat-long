#!/usr/bin/env -S node --experimental-vm-modules
"use strict";

const args = process.argv.slice(2)
if (args.length < 1 || args.length > 1) {
    console.error('Invalid params provided')
    process.exit(1)
}
const [city] = args;

import { readFile } from 'fs/promises';
const data = JSON.parse(
  await readFile(
    new URL('../data/data.json', import.meta.url)
  )
);
console.log(data.find((obj) => obj.city_ls.includes(city)) || 'No matches found')