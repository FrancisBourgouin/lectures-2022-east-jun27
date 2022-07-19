// IIFE

//  Immediately Invoked Function Expression

(() => {
  console.log("Hello!");
})();

const bob = "bob";

window.addEventListener("load", () => {
  const slowLetters = (word) => {
    const title = document.querySelector("header h1");
    title.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
      setTimeout(() => {
        title.innerHTML = title.innerHTML + word[i];
      }, i * 300);
    }
  };
  slowLetters("SUPER POTATO WORLD");

  const potato = "🥔";

  console.log(potato);

  // Targeting ids (old)

  document.getElementById("someId");

  // Targeting classes

  document.getElementsByClassName("someId");

  // Target one element

  document.querySelector("css target");

  // Target multiple elements

  document.querySelectorAll("css target");

  const titleToChange = document.querySelector("#page-title");

  titleToChange.addEventListener("dblclick", () => console.log("wowowowow"));

  console.log(titleToChange);

  const newParagraph = document.createElement("p");
  const newText = document.createTextNode("SOME TEXT HERE");

  newParagraph.append(newText);

  document.querySelector("header h1").appendChild(newParagraph);
  // window.alert("MWAHAHAHAHAHAHA");
});
