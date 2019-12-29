const a = () => import(/* webpackChunkName: "abc/a" */ "./src/a");
const b = () => import(/* webpackChunkName: "abc/b" */ "./src/b");

setTimeout(() => {
  console.log(a());
  console.log(b());
}, 1000);
export default "abc";
