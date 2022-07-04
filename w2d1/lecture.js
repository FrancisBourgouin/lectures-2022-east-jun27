const drinkFromMug = require("./drinkFromMug");

const mugObject1 = {
  startingVol: 400,
  currentVol: 300,
  content: "Coffee DARK",
  name: "Muggy",
};

const mugObject2 = {
  startingVol: 700,
  currentVol: 500,
  content: "Tea (Not the mister)",
  name: "Mugginator",
};

// const drinkFromMug = (mug, sipSize) => {
//   return mug;
// };

// const result = drinkFromMug(mugObject1, 50);
// console.log(result.currentVol === 250);

const result = drinkFromMug("MAHAHAHAH");

console.log(result);

// for(let i = 0; i < 10; i++)
