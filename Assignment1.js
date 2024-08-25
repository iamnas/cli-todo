const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const clc = require('cli-color');

program
    .name('count')
    .description('CLI to some JavaScript string utilities')
    .version('6.1.9');


program.command('count')
    .description('Counts the number of lines in a file')
    .argument('<file>', 'file to count number of lines in that file')
    .option('--first', 'display first letter')
    .option('--last', 'display last letter')
    .option('--letter', 'count number of in that file letter')

    .action((str, options) => {
        // console.log(str);
        fs.readFile(str, 'utf-8', (err, data) => {
            if (err) console.log(err);
            else {

                const chars = data.split("\n")
                console.log(clc.red.bold(str+' has '+chars.length+' lines '));
                if (options.first) console.log(clc.yellow.bold('first letter'+data.split(" ")[0]))
                if (options.last) console.log(clc.yellow.bold("last letter",data.split(" ").slice(-1)[0]))
                if (options.letter) console.log(clc.yellow.bold(str+' has '+ data.split(/\s+/).length+' letter'))
            }
        })
    });

program.parse();







