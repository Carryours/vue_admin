const a = () => import(/* webpackChunkName: "demo/a" */ "./src/a");
const b = () => import(/* webpackChunkName: "demo/b" */ "./src/b");

// const aa = require("./images/love/c.jpeg");

// const img = document.createElement("img");
// img.src = aa;
// console.log(img);
// document.body.append(img);
setTimeout(() => {
  console.log(a());
  console.log(b());
}, 1000);
export default "abc";
