console.error = (function(errFn) {
  return (...args: any) => {
    console.log("args", args);
    errFn.apply(console, args);
  };
})(console.error);

window.onerror = (msg, url, row, col, error) => {
  console.log({ msg, url, row, col, error });
};

window.addEventListener(
  "error",
  (event) => {
    // 过滤js error
    let target: any = event.target || event.srcElement;
    let isElementTarget: boolean =
      target instanceof HTMLScriptElement ||
      target instanceof HTMLLinkElement ||
      target instanceof HTMLImageElement;
    if (!isElementTarget) return false;
    // 上报资源地址
    let url = target.src || target.href;
    console.log("资源加载错误：", url, event);
    console.error({
      message: "资源加载错误",
      static: 1,
    });
  },
  true
);

// 捕获未 catch 的 promise 错误
window.addEventListener("unhandledrejection", (e) => {
  e.preventDefault();
  const { reason } = e;
  console.error(reason);
});
