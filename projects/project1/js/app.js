//Getting class names from the HTML by their name and setting a veriable to represent them
var black_checker = document.getElementsByClassName("black_checker");
var red_checker = document.getElementsByClassName("red_checker");

//Using Vue to display a title
Vue.component("checker-piece", {
  props: ["piece"],
  template: "<h1>{{ Checkers }}</h1>",
});

let app = new Vue({
  el: "#app",
  data: {
    message: "Checkers",
  },
});

//Using animations to move checker pieces
for (let i = 0; i < black_checker.length; i++) {
  TweenLite.from(blue[i], {
    duration: (i + 1) * 0.4,
    x: -50,
    alpha: 0,
    delay: i * 0.5,
  });
}