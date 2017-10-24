const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  name:{
    type: String
  },
  itemid:{
    type: String
  },
  qty:{
    type: Number
  },
  cost:{
    type: Number
  },
  img:{
    type: String
  }
})

let items = mongoose.model('items', itemSchema);

class Items {
  //get books
  static getItems(callback, limit) {
    items.find(callback).limit(limit);
  };

  //add item
  static addItem(body, callback) {
    var data_item = {
      "name": `${body.name}`,
      "itemid": `${body.itemid}`,
      "qty": body.qty,
      "cost": body.cost,
      "img": `${body.img}`
    }
    items.create(body, callback);
  };

  //update item
  static updateItem(params, body, callback) {
    var id = {
      _id : params.id
    }
    var update = {
      "name": `${body.name}`,
      "itemid": `${body.itemid}`,
      "qty": body.qty,
      "cost": body.cost,
      "img": `${body.img}`
    }
    items.findByIdAndUpdate(id, update, callback);
  };
    //delete items
  static deleteItem(params, callback){
    var id = {
      _id : params.id
    }
    items.deleteOne(id, callback)
  }
}
module.exports = Items;
