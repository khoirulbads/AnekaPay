readFileContent("coba.md", function (a){
  readFileContent("coba2.md", function (b){
    readFileContent("coba3.md", function (b){
        writeFileContent("result.md", a + b + c, function(){
            console.log("we are done");
        })
      })   
  })
})
