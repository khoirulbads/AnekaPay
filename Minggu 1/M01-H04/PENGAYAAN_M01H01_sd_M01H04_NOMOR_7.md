arrow function adalah sintaks penulisan function pada javascript dengan kode yang lebih ringkas yaitu dengan menggunakan token ‘=>’

contoh :

// Source code tanpa arrow function
var hello1 = function(nama){
    console.log("selamat datang"+nama);
}
function hello2 (nama,nama2){
    console.log("selamat datang "+nama+" dan "+nama2);
}
 
hello1("andi");
hello2("Rifaldy","andi");

// source code dengan arrow function
// function dengan 1 parameter
var hello1 = nama => {console.log('selamat datang $(nama)')}
//function dengan lebih dari 1 parameter
var hello2 = (nama,nama2)=> {console.log('selamat datang $(nama) dan $(nama2)'}
//function tanpa parameter
var hello3 = () => {console.log("selamat datang di website saya")}
 
hello1("andi");
hello2("Rifaldy","andi");
hello3();