const { Command } = require('commander');
const program = new Command();
const fs = require('fs');


const FILE_NAME = 'todos.json'

program
    .name('todo')
    .description('CLI to some JavaScript string utilities')
    .version('6.1.9');

program.command('add')
    .description('Counts the number of lines in a file')
    .argument('<title>', 'Todo Title')
    .argument('<description>', 'Todo Description')
    .action((title, description, options) => {
        console.log(title, description);

        // if (options.add) {

        fs.readFile(FILE_NAME, 'utf8', (err, data) => {

            if (err) {
                const empy = []

                if (err.code === 'ENOENT') fs.writeFile(FILE_NAME, JSON.stringify(empy), (error) => {
                    console.log(error)
                });
            }
            else {

                const fileData = data.length > 0 ? JSON.parse(data) : []

                fileData.push({ id: fileData.length + 1, title, description, compleated: false })

                fs.writeFile(FILE_NAME, JSON.stringify(fileData), (err) => {
                    if (err) {
                        console.error(err)
                    }
                    else {
                        console.log(fileData);
                    }
                })
            }
        });
        // }
        // if (options.delete){

        // }
        // nedd.push({title:title, description:description})
        // nedd.push({title:title, description:description})
        // nedd.push({title:title, description:description})
        // console.log(read,nedd);

        // const data = JSON.stringify({todoId,title,description})
        // todoId++

        // fs.appendFile('todos.json',data,(err) => {
        //     if (err) console.log(err);

        //     console.log(data);

        // });

    })

program
    .command('delete <id>')
    .description('Delete a to-do by ID')
    .action((id) => {
        // const todos = 


        fs.readFile(FILE_NAME, 'utf8', (err, data) => {

            if (err) {
                const empy = []

                if (err.code === 'ENOENT') fs.writeFile(FILE_NAME, JSON.stringify(empy), (error) => {
                    console.log(error)

                });
            }
            else {

                const fileData = data.length > 0 ? JSON.parse(data) : []
                if (data.length > 0) {

                    // console.log(data);
                    const updatedTodo = fileData.filter(todo => todo.id !== parseInt(id))

                    fs.writeFile(FILE_NAME, JSON.stringify(updatedTodo), (err) => {
                        if (err) {
                            console.error(err)
                        }
                        else {
                            console.log("Successfully updated");
                        }
                    })


                } else {
                    fs.writeFile(FILE_NAME, JSON.stringify([]), (err) => {
                        if (err) {
                            console.error(err)
                        }
                        else {
                            console.log("Successfully updated");

                        }
                    })
                }

                // fileData.push({ todo_id: fileData.length + 1, title, description, compleated: false })


            }
        });


        // const updatedTodos = todos.filter(todo => todo.id !== parseInt(id));
        // writeTodos(updatedTodos);
        // console.log('Deleted to-do with ID:', id);
    });

program
    .command('show')
    .action(() => {
        fs.readFile(FILE_NAME, 'utf8', (err, data) => {
            if (err) {
                console.log([]);

                return []
            } else {
                console.log(data);

                // return data
            }
        })
    })

program
    .command('done <id>')
    .description('Delete a to-do by ID')
    .action((id) => {
        fs.readFile(FILE_NAME, 'utf8', (err, data) => {

            if (err) {
                const empy = []

                if (err.code === 'ENOENT') fs.writeFile(FILE_NAME, JSON.stringify(empy), (error) => {
                    console.log(error)

                });
            }
            else {
                const fileData = data.length > 0 ? JSON.parse(data) : []
                if (data.length > 0) {
                    const findTodo = fileData.find(todo => todo.id === parseInt(id))


                    if (findTodo) {
                        findTodo.compleated = true
                        fs.writeFile(FILE_NAME, JSON.stringify(fileData), (err) => {
                            if (err) {
                                console.error(err)
                            }
                            else {
                                console.log('Marked as done:', findTodo);
                            }
                        })
                    } else {
                        console.log('To-do not found with ID:', id);

                    }

                } else {
                    fs.writeFile(FILE_NAME, JSON.stringify([]), (err) => {
                        if (err) {
                            console.error(err)
                        }
                        else {
                            console.log("Successfully updated");

                        }
                    })
                }
            }
        });
    })

program.parse();

