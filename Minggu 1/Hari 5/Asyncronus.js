function alertA(){
console.log('alertA');
console.log(1);
}
function alertB(){
console.log('alertB');
setTimeout(() => console.log(2), 0);
}
function alertC(){
console.log('alertC');
console.log(3);
}
alertA();alertB();alertC()
