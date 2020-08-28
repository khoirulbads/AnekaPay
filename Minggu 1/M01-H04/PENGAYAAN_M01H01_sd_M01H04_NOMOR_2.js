function angkamap(){
var angkamap = [1,2,3]
var bulatan2 = angkamap.map(function(num){
return num * 2;});
console.log("Contoh Map : ");
console.log(angkamap);
console.log("Setelah diberi fungsi map pembulatan 2 :")
console.log(bulatan2);
console.log("");
}



function angkareduce(){
var numbers = [1,2,3,4,5];
var totalNumber = numbers.reduce(function(total, number){
return total + number;
}, 0);
console.log("Contoh Reduce : ");
console.log(numbers);
console.log("Setelah diberi fungsi reduce :");
console.log(totalNumber);
console.log("");
}

function angkafilter(){
var numbers = [1,2,3,4,5];

	var newNumbers = numbers.filter(function(number){
return (number % 2 !== 0);
});
console.log("Contoh Filter : ");
console.log(numbers);
console.log("Setelah difilter tampil angka ganjil :");
console.log(newNumbers);
console.log("");
}

function angkapush(){
var angkapush= [ 1 , 2 , 3 , 4 , 5 ] ;
console.log("Contoh Push : ");
console.log(angkapush);
angkapush.push(6);
console.log("Setelah dipush nilai 6 :");
console.log(angkapush);
console.log("");
}

function angkapop(){
var angkapop= [ 1 , 2 , 3 , 4 , 5 ] ;
console.log("Contoh Pop :");
console.log(angkapop);
angkapop.pop();
console.log("Seteleh dipop :");
console.log(angkapop);
console.log("");
}

function angkaunshift(){
var angkaun= [ 2 , 3 , 4 , 5 ] ;
console.log("Contoh Unshift :");
console.log(angkaun);
angkaun.unshift(1);
console.log("Setelah diunshift nilai 1 :");
console.log(angkaun);
console.log("");
}

function angkashift(){
	var angkashift= [ 1 , 2 , 3 , 4 , 5 ];
console.log("Contoh Shift :");
console.log(angkashift);
angkashift.shift();
console.log("Setelah dishift :");
console.log(angkashift);
}


angkamap();
angkapush();
angkafilter();
angkashift();
angkaunshift();
angkapop();
angkareduce();