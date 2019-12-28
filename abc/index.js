const a = () => import("./a");
const b = () => import("./b");
window.a = a;
window.b = b;
export default "abc";
