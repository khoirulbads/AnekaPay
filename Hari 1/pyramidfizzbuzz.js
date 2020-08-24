function generatePyramid() {
    var totalNumberofRows = 15;
    var output = '';
    var b = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
      
        	if (i%3==0) {
        		b = "Fizz";
        	}
        	else if (i%5==0) {
        		b = "Buzz";
        	}else{
        		b= i;
        	}

            //output += b + '  ';
       
        console.log(b);
       
    }
   
}

generatePyramid();