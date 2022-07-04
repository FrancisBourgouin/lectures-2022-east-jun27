# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

# In / Out

# In (mug object / size of sip )

```jsx
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
```

```jsx
const sizeOfSip = 50;
```

# Out

```jsx
  const modifiedMug = {
    startingVol: 700,
    currentVol: 200,
    contents:"Tea (Not the mister)"
    name: "Mugginator",
  };
```

# How

## Lower the amount of volume of liquid

- currentVol

```jsx
mugObject.currentVol -= sizeOfSip;
```

## Check if object1 === object2

```jsx
// WAAAAAAAT ?
```

# Test cases

## Optimistic Cases

- Given a mug (mugobject1) and a sip of 50, the returning object should have a currentVol of 250

## Pessimistic Cases

(Edge cases)

- If currentVol is 0 return a kind message saying that the mug is empty
- If currentVol is smaller than sizeOfSip, returning object should have a currentVol of 0

(World of pain cases / User error cases)

- If mug is not a valid mug object, return a friendly error messsage
- If sizeOfSip is not a number, return a friendly error message
