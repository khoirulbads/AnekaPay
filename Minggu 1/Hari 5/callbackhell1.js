const fs = require('fs');
function AsyncrounousReadFileContentMustUseCallback(filename, callback) {
        // First I want to read the file
        return fs.readFile(filename, function read(err, data) {
            if (err) {
                throw err;
            }
            const content = data;
            callback(content)

            // Invoke the next step here however you like
            //console.log(content);   // Put all of the code here (not the best solution)
            // processFile(content);   // Or put the next step in a function and invoke it
            // return content;
        });
        function processFile(content) {
            console.log(content);
        }
    }

    function writeFileContent(filename, contents, cb) { 
        fs.writeFile(filename, contents, function (err) {
            if (err) return console.log(err);
            // console.log('Hello World > helloworld.txt');
            cb()
        });
    }

    AsyncrounousReadFileContentMustUseCallback("coba.md", function (a) {
        AsyncrounousReadFileContentMustUseCallback("coba2.md", function (b) {
            AsyncrounousReadFileContentMustUseCallback("coba3.md", function (c) {
                // console.log("a")
                // console.log(a)
                // console.log("b")
                // console.log(b)
                // console.log("c")
                // console.log(c) 
                writeFileContent('gabung.md', a + b + c, function () {
                    console.log("we are done");
                })
            })
        })
    })