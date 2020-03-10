let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable"
};

function selectFruit(produce) {
  let fruit = {};

  for (let key in produce) {
    if (produce[key] === "Fruit") {
      fruit[key] = "Fruit";
    }
  }

  console.log(fruit);
  return fruit;
}
