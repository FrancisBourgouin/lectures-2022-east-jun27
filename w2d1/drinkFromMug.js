// const mugObject = {
//   startingVol: 700,
//   currentVol: 500,
//   content: "Tea (Not the mister)",
//   name: "Mugginator",
// };

const checkIfValidMug = (mug) => {
  const properties = ["startingVol", "currentVol", "content", "name"];
  const mugKeys = Object.keys(mug);
  if (mugKeys.length !== 4) {
    return false;
  }
  for (const key of properties) {
    if (!mugKeys.includes(key)) {
      return false;
    }
  }
  return true;
};

const drinkFromMug = (mug, sipSize) => {
  if (!checkIfValidMug(mug)) {
    // if(Math.random() > 0.5){
    //   return "WHAAAAAAT?"
    // }
    // return 'OMG'
    return Math.random() > 0.5 ? "WHAAAAAAT?" : "OMG";
  }

  if (typeof sipSize !== "number" || sipSize < 0 || Number.isNaN(sipSize)) {
    return "HOW DO YOU SIP AT NIGHT ?!?!";
  }

  if (mug.currentVol === 0) {
    return "WHY ARE YOU TRYING TO DRINK FROM AN EMPTY MUG";
  }

  mug.currentVol = sipSize > mug.currentVol ? 0 : mug.currentVol - sipSize;
  // if (sipSize > mug.currentVol) {
  //   mug.currentVol = 0;
  // } else {
  //   mug.currentVol -= sipSize;
  // }

  return mug;
};

module.exports = drinkFromMug;
