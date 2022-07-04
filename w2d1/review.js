// Objects Keys

// [] <- Array (NOT TRUE)

const someArray = [1, 2, 3, 4];

someArray[0];

const someObject = { bob: "Hello", lvl: { sblvl: { sbsblvl: 9001 } } };

someObject.bob;

const key = "bob";

someObject.key;

someObject[key];

someObject["lvl"]["sblvl"]["sbsblvl"];
someObject.lvl.sblvl.sbsblvl;

const newKey = "nookie";

const bob = { name: "bob", [newKey]: true, newKey: "sad" };

console.log(bob);

const addKeysToObjectImmutable = (object, key, value) => {};
