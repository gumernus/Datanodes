let fs = require("fs");
const obj = require("./data1.json");

function addItem(newUserName, userId) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id == userId) {
        console.log("User", obj[i].name , "has been updated to", newUserName);
      obj[i].name = newUserName;
      obj[i].idk = newUserName
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
    console.log("User", newUserName, "already exist");
  }
  if (isIn === false) {
    let addNewUser = { name: `${newUserName}`, id: `${newUserId}` };
    obj.push(addNewUser);
    fs.writeFileSync("./database/data1.json", JSON.stringify(obj, null, 1));
    console.log("New user", newUserName, "has been created");
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
    console.log("User doesn't exist");
  }
}

module.exports = {
  addItem,
  newObj,
  deleteObj
};
