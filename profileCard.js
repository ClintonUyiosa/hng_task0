function updateTime() {
  const timeEl = document.getElementById("current-time");
  timeEl.textContent = Date.now().toString();
}

updateTime();

setInterval(updateTime, 1000);