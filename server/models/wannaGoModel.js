const mongoose = require('./index');
const Schema = mongoose.Schema;

const WannaGoSchema = new Schema({
  what: { type: String, required: true },
  where: { type: String, required: true },
  when: { type: String, required: true },
  owner: String,//{type: String, required: true},
  owner: String,
  category: String,
  ppl_going: { type: Map, of: String },
  suggestion_box: Array,
});

module.exports = mongoose.model('wannagos', WannaGoSchema);

