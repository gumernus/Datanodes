let fs = require("fs");
const obj = require("./data1.json");

function addItem(itemType, itemName, userId) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      Object.assign(obj[i], { [itemType]: `${itemName}`});
      fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
    } else {
    }
  }
}

function updateObj(newUserName, userId) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      obj[i].name = newUserName;
      fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
    } else {
    }
  }
}

function newObj(newUserName, newUserId) {
  let isIn = false;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == newUserId) {
      isIn = true;
    }
  }
  if (isIn) {
    updateObj(newUserName, newUserId)
  }
  if (isIn === false) {
    let addNewUser = { name: `${newUserName}`, id: `${newUserId}` };
    obj.push(addNewUser);
    fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
  }
}

function deleteObj(userId) {
  let isIn = false;
  let i = 0
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      isIn = true;
    }
  }
  if (isIn) {
    
    const index = obj.findIndex(obj => obj.id === userId);
    console.log("User", obj[index].name ,"has been deleted");
    if (index !== undefined) obj.splice(index, 1);
    fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
  }
  if (isIn === false) {

  }
}

module.exports = {
  newObj,
  deleteObj,
  addItem
};
