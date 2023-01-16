#!/usr/bin/env -S node --experimental-vm-modules
"use strict";

const data = require("../data/data.json");

function binarySearchCity(city_name) {
  let l = 0,
    r = data.length - 1;

  while (l <= r) {
    const mid = l + parseInt((r - l) / 2);
    if (data[mid][1].startsWith(city_name)) return data[mid];
    if (city_name < data[mid][1]) r = mid - 1;
    else l = mid + 1;
  }

  return;
}

function findByCity(query_city) {
  console.time("Searching");
  // TC -  1.692ms, 1.56ms, 1.556ms, 1.7ms, 1.568ms, 1.56ms
  // const found = data.find((element) => element[1].startsWith(query_city));
  // TC - 0.084ms, 0.078ms, 0.08ms, 0.081ms, 0.088ms, 0.076ms
  const found = binarySearchCity(query_city);
  console.timeEnd("Searching");
  if (!found) return console.log("No matches found");

  const [city, city_ls, lat, lng, country, population] = found;
  console.log({ city, city_ls, lat, lng, country, population });
}

const args = process.argv.slice(2);
if (args.length < 1 || args.length > 1) {
  console.error("Invalid params provided");
  process.exit(1);
}
const [query_city] = args;
findByCity(query_city);
