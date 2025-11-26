let inventory = [];

function findProductIndex(name){
const nameSearch = name.toLowerCase();
let idx = 0;
  for (let obj of inventory){
    if (nameSearch===obj.name)
      return idx;
    idx++;
  }
  return -1;
}

function addProduct(product){
  product.name = product.name.toLowerCase();
  for (let obj of inventory){
    if (product.name===obj.name){
      obj.quantity += product.quantity;
      console.log(product.name+" quantity updated")
      return;
    }
  }
  inventory.push(product);
  console.log(product.name+" added to inventory");
}

function removeProduct(productName, quantity){
  const name = productName.toLowerCase();
  for (let i in inventory) {
    if (inventory[i].name===name) {
      if(inventory[i].quantity<quantity) {
      console.log(`Not enough ${name} available, remaining pieces: ${inventory[i].quantity}`);
      return;
    }
      else {
        
        inventory[i].quantity -= quantity;
        if (inventory[i].quantity===0) {
            inventory.splice(i,1);
            return;
         }

         console.log(`Remaining ${name} pieces: ${inventory[i].quantity}`);
         return;} 
         }
    }
    console.log(name+" not found");
}
