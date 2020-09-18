const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoose_aneka', {useNewUrlParser: true});
const Schema = mongoose.Schema
const exampleSchema = new Schema({
    nama: {type: String, required: true, unique: true} ,
    umur: {type: Number, required: false, unique:false}
})

function myParseInt(value, dummyPrevious) {
  // parseInt takes a string and an optional radix
  return parseInt(value);
}

function tambah(value, dummyPrevious) {
  // parseInt takes a string and an optional radix
  return value;
}
 
function increaseVerbosity(dummyValue, previous) {
  return previous + 1;
}
 
function collect(value, previous) {
  return previous.concat([value]);
}
 
function commaSeparatedList(value, dummyPrevious) {
  return value.split(',');
}
 
program
  .option('-f, --float <number>', 'float argument', parseFloat)
  .option('-t, --tambah <value>', 'insert', tambah)
  .option('-i, --integer <number>', 'integer argument', myParseInt)
  .option('-v, --verbose', 'verbosity that can be increased', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'repeatable value', collect, [])
  .option('-l, --list <items>', 'comma separated list', commaSeparatedList)
;
 
program.parse(process.argv);
 
if (program.float !== undefined) console.log(`float: ${program.float}`);
if (program.integer !== undefined) console.log(`integer: ${program.integer}`);
if (program.verbose > 0) console.log(`verbosity: ${program.verbose}`);
if (program.collect.length > 0) console.log(program.collect);
if (program.list !== undefined) console.log(program.list);