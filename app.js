function hasNetwork(online) {
  console.log(online);
}

window.addEventListener("load", () => {
  hasNetwork(navigator.onLine);
});