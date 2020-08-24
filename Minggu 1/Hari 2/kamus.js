
function Kamus(kata,katabaruindo,katabaruinggris,katahapus){

var kamus = new Map ([
	["Singa", "Lyon"],
	["Kuda", "Horse"],
	["Harimau", "Tiger"],
	["Kura - kura", "Turtle"],
	["Burung", "Bird"],
	["Tikus", "Mouse"],
	["Kucing", "Cat"]
	]
)
let sekarang = new Date();
console.log("Hari ini Tanggal "+sekarang);
console.log(kamus);

console.log("");
console.log("");
var kataindo = kata;
var katainggris = "Bird";
var artiinggris = kamus.get(kataindo);
var artiindo = kamus.has(katainggris);
console.log("Bahasa Inggris dari "+kataindo+" adalah "+artiinggris);
//console.log("Bahasa Indo dari "+katainggris+" adalah "+artiindo);

kamus.set(katabaruindo,katabaruinggris);

console.log("------------------------");
console.log("Setelah ditambah Kata Baru "+katabaruindo);
console.log(kamus);

kamus.delete(katahapus);
console.log("------------------------");
console.log("Setelah kata "+katahapus+" dihapus");

console.log(kamus);

}


Kamus("Kucing", "Katak", "Frog", "Tikus");