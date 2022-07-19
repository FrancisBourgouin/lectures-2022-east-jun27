// jQuery works
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

$(() => {
  $("css target").method;

  // $ is a shortcut for jQuery
  // () css target that you want
  // .method() is the action that you want to do
  // .method() if method param is empty, it reads
  // .method() if method param is not empty, it writes

  const cssValue = $("header h1").css("font-size", 90);

  console.log(cssValue);

  $("header h1").text("SOME TEXT because YOU KNOW");

  // .on(...)

  $("header h1").on("click", () => {
    console.log("sup");
  });

  $("header h1").click(() => {
    console.log("sup sup");
  });

  // $("button").click((event) => {
  //   $(event.target).text("WAZA");
  //   console.log(event);
  // });

  $("button").click(function (event) {
    $(this).text("WAZA");
    console.log(event);
  });
  // () => {} function(){}

  // this.function = this.function.bind(this)

  $("main section.question").find("h1").text("hello");

  $("body").click((event) => {
    $(event.target).css("background-color", randomColor());
  });
});
