'use strict';

const path = require('path');
const { it } = require('mocha');
const { expect } = require('chai');
const { describe } = require('mocha');
const { readdirSync } = require('fs');

let test = process.argv[process.argv.length - 1];
test = test.replace('--', '');
test += '.test.js';

const TEST_DIRECTORIES = ['str'];

Object.entries(
    TEST_DIRECTORIES.reduce(
      (accumulated, directory) => ({
        ...accumulated,
        [directory]: [...readdirSync(path.join(__dirname, directory))]
      }),
    {})
).forEach(([directory, tests]) => {

  tests.forEach(file => {
      describe(file.replace('.test.js', '()'), () => {

      require(path.join(__dirname, directory, file))(it, expect);
    });
  }
  )
});
