const { Message } = require("discord.js");
let fs = require("fs");
const obj = require("./data1.json");

function addItem(itemName, itemValue, userId) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      if (typeof itemValue === "number") {
        if (obj[i][`${itemName}`]){
          itemValue = itemValue + obj[i][`${itemName}`];
          Object.assign(obj[i], { [itemName]: itemValue });
          fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
        }
        else{
          Object.assign(obj[i], { [itemName]: itemValue });
          fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
        }
        } 

        if (typeof itemValue === "string") {
          Object.assign(obj[i], { [itemName]: itemValue });
          fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
        }
    } else {
      newObj(userId);
    }
  }
}

function lookInventory(message, userId){
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      message.channel.send("Ve svém inventáři máš " + obj[i][`železo`] + "x železo")
    } else {
      newObj(userId);
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

function newObj(newUserId) {
  let isIn = false;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == newUserId) {
      isIn = true;
    }
  }
  if (isIn) {
    updateObj(newUserId);
  }
  if (isIn === false) {
    let addNewUser = { id: `${newUserId}` };
    obj.push(addNewUser);
    fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
  }
}

function deleteObj(userId) {
  let isIn = false;
  let i = 0;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
      isIn = true;
    }
  }
  if (isIn) {
    const index = obj.findIndex((obj) => obj.id === userId);
    if (index !== undefined) obj.splice(index, 1);
    fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
  }
  if (isIn === false) {
  }
}

module.exports = {
  newObj,
  deleteObj,
  addItem,
  lookInventory
};
