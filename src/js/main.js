import "../css/main.scss";
import "../assets/01.png";
import "./jquery";

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  import(/* webpackChunkName: "pref" */ "./pages/about").then((btn) => {
    btn.showAlert();
  });
});
