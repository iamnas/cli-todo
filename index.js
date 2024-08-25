const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file-based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}: ${err.message}`);
        process.exit(1);
      } else {
       
        const lines = data ? data.split('\n').length : 0;
        console.log(`There are ${lines} line(s) in ${file}`);
      }
    });
  });

program.parse();


// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();



// // const chalk = require('chalk');

// // import chalk from 'chalk';

// // console.log(chalk.blue('Hello, world!'));
// // console.log(chalk.red.bold('This is an error message.'));
// // console.log(chalk.green.underline('This is a success message.'));


// const path = require('path');
// console.log(__dirname);

// console.log(path.join(__dirname,"/index.js"))