function generatePyramid() {
    var totalNumberofRows = 5;
    var totalNumberofbase = 5;
    var output = '';
    var x = ''
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= totalNumberofbase; j++) {
            if (i%2==0) {
            	if (j%2==0) {
            		output += ' ';		
            	}else{
            		output += '#';		
            	}
            }else{
            	if (j%2==0) {
            		output += '#';		
            	}else{
            		output += ' ';		
            	}
            }
            

        }
        console.log(output);
        output = '';
    }
}

generatePyramid();