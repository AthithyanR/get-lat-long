#!/usr/bin/env node
'use strict'

// const args = process.argv.slice(2)
// if (args.length < 1 || args.length > 1) {
//     console.error('Invalid params provided')
//     process.exit(1)
// }

import fetch from 'node-fetch'
const { loc } = await(await fetch('http://ipinfo.io/json')).json()
const [latitude, longitude] = loc.split(',')
console.log({ latitude, longitude });