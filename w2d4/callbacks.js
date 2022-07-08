// Why do we want to use parameters in a function?
// - Reusability
// - Modularity
// - Customization

// Why do we want to use callbacks?
// - Reusability!
// - Because asynchronous function need to continue their flow in a specific scope

const fancyOutput = (message) => {
  // NORMAL FUNCTION
  console.log(`🔥🔥🔥 ${message} 🔥🔥🔥`);
};

const names = ["Archana", "Cera", "David"];

const chooseANameAndDoSomething = (listOfNames, action) => {
  // HIGHER ORDER FUNCTION
  const randomIndex = Math.floor(Math.random() * 3);

  action(listOfNames[randomIndex]);
};

// chooseANameAndDoSomething(names, fancyOutput);
// fancyOutput is THE CALLBACK of chooseANameAndDoSomething

const someObject = {
  name: "Muggy",
  description: "A nice Tintin mug",
};

const fetchSpecificValueOfAnObject = (object, key) => {
  try {
    return object[key];
  } catch (error) {
    console.log(Error("Invalid object"));
    return undefined;
  }
};

const result = fetchSpecificValueOfAnObject(someObject, "name");
console.log(result);

try {
  // setTimeout(() => {
  //   console.log("SURPRISE !!!", nameOfPerson);
  // }, 2000);
} catch (error) {
  console.log("SURPRISE !!! (SORRY FORGOT YOUR NAME)");
}

const boilWater = (timeToBoil) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.35) {
        throw new Error("OH NO, KETTLE IS ANGRY");
      }
      console.log("Water is ready!");
    } catch (err) {
      console.log(err);
    }
  }, timeToBoil);
};

// boilWater(1000);

const pourWaterOnCoffeeGrounds = (nextAction) => {
  console.log("blub blub blub");
  console.log("drip drip");

  nextAction();
};

const waitForExtraction = (waitTime) => {
  console.log("INTENSE STARING AT COFFEE");

  setTimeout(() => {
    console.log("THE WAIT IS OVER");
  }, waitTime);
};

const boilWaterV2 = (timeToBoil, nextAction) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.75) {
        throw new Error("OH NO, KETTLE IS ANGRY");
      }
      console.log("Water is ready!");
      nextAction();
    } catch (err) {
      console.log(err);
    }
  }, timeToBoil);
};
const boilWaterV3 = (timeToBoil, nextAction) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.75) {
        throw new Error("OH NO, KETTLE IS ANGRY");
      }
      console.log("Water is ready!");
      nextAction(true);
    } catch (err) {
      console.log(err);
      nextAction(false);
    }
  }, timeToBoil);
};

const boilWaterV4 = (timeToBoil, successAction, failAction) => {
  setTimeout(() => {
    try {
      if (Math.random() > 0.75) {
        throw new Error("OH NO, KETTLE IS ANGRY");
      }
      console.log("Water is ready!");
      successAction();
    } catch (err) {
      failAction(err);
    }
  }, timeToBoil);
};

boilWaterV4(
  1000,
  () => console.log("GREAT SUCCESS"),
  (err) => console.log(err)
);

boilWaterV4(
  1000,
  () => {
    boilWaterV4(
      1000,
      () => console.log("GREAT SUCCESS"),
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

// boilWaterV3(1000, (isSuccess) => {
//   if(isSuccess === "success"){
//     return pourWaterOnCoffeeGrounds(() => {
//       waitForExtraction(1000);
//     });
//   }
//   console.log("CRY IN KITCHEN")
// });

boilWaterV3(1000, (isSuccess) => {
  if (isSuccess) {
    // ...
  } else {
    // ...
  }
});

// boilWaterV2(1000, () => {
//   pourWaterOnCoffeeGrounds(() => {
//     waitForExtraction(1000);
//   });
// });
// boilWaterV2(1000, (value) => {
//   console.log(value);
//   console.log("do another step");
// });
