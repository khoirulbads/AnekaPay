class Kendaraan{
	constructor(merek, warna){
		this.merek = merek;
		this.warna = warna;
	}

	getName(){
		return this.merek+" "+this.warna;
		console.log(merek+" "+warna);
	}
}

class Mobil extends Kendaraan{
	getName(){
		return super.getName()+" Ambil Class Child ";
	}
}

let inputmobil = new Mobil("Toyota", "Ungu");
inputmobil.getName();
console.log(inputmobil.getName());