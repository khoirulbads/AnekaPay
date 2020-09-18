const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
})
const newModel = mongoose.model('tb_karyawan', exampleSchema)
const newDocument = newModel({nama: 'Khoirul', umur: 22})
newDocument.save()

newModel.find({nama:'Khoirul'}, (err,results)=>{
    console.log(results)
})