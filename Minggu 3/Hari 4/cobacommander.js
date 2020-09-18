const mongoose = require('mongoose')
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-b, --buat', 'Buat Database dan Collection')
  .option('-t, --tambah <tambah>', 'Nama')
  .option('-g, --findone <findone>', 'Find')
  .option('-f, --find', 'Find')
  .option('-x, --deleteone <deleteone>','Delete')
  .option('-u, --updateone <updateteone>','Update');

 
program.parse(process.argv);
 
if (program.debug) console.log(program.opts());
if (program.tambah) {var x = `${program.tambah}`;
	var y =x.split(',');
	tambah(y[0], y[1]);}
if (program.updateone) {var x = `${program.updateone}`;
	var y =x.split(',');
	updateone(y[0], y[1]),parseInt(y[2]);}
if (program.buat) buat(); 
if (program.find) find(); 
if (program.findone) findone(`${program.findone}`);
if (program.deleteone) deleteone(`${program.deleteone}`); 


function buat() {
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
})
const newModel = mongoose.model('tb_karyawan', exampleSchema)
console.log("Sudah Berhasil Membuat");
}

function tambah(x, xx){
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
})
const newModel = mongoose.model('tb_karyawan', exampleSchema)
const newDocument = newModel({nama: x, umur:xx})
newDocument.save()
}


function find() {
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
	})
	const newModel = mongoose.model('tb_karyawan', exampleSchema)
	newModel.find((err,results)=>{
    console.log(results)
})
}
function deleteone(x) {
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
	})
	const newModel = mongoose.model('tb_karyawan', exampleSchema)
	newModel.deleteOne({nama:x},(err,results)=>{
    console.log("Berhasil menghapus "+x)
})
}


function updateone(x, xx, xxx) {
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
	})
	const newModel = mongoose.model('tb_karyawan', exampleSchema)
	newModel.updateOne({nama:x}, {$set : {nama : xx, umur : 15}},(err,results)=>{
    console.log("Berhasil mengubah "+x+" menjadi "+xx)
})
}

function findone(x) {
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
	})
	const newModel = mongoose.model('tb_karyawan', exampleSchema)
	newModel.find({nama: x},(err,results)=>{
    console.log(results)
})
}

//pizza-options --pizza-type=cheese