'use strict';

const chalk = require('react-dev-utils/chalk');
const execSync = require('child_process').execSync;
const fs = require('fs');

const param = process.argv.slice(2, 3)
let dependency = '';

if (param.length && param[0]) {
    dependency = param[0];
    console.log(chalk(`Using custom dependency: ${dependency}`));
} else {
    // TODO: provide default dependency to link
    dependency = 'your-default-dependency-to-link';
    console.log(chalk(`Using default module: ${dependency}`));
}

if (!fs.existsSync(`../${dependency}`)) {
    console.log(chalk.red('Directory not found'));
    process.exit(0);
}

if (!fs.existsSync(`../${dependency}/package.json`)) {
    console.log(chalk.red('Directory does not contain a npm module'));
    process.exit(0);
}

console.log(chalk.yellow('Attempt to create global link'));
execSync(`cd ../${dependency} && npm link`);

console.log(chalk.yellow('Attemp to link global dependency'));
execSync(`npm link ${dependency}`);
