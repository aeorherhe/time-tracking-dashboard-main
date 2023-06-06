// imports
import get from "./getElements.js";

const daily = get(".daily");
const weekly = get(".weekly");
const monthly = get(".monthly");
const url = "../data.json";
const current = document.querySelectorAll(" #current");
const previous = document.querySelectorAll(" #previous");
const timeFrames = document.querySelectorAll(".prev-time");

fetch(url)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    //
    // Daily activities
    daily.addEventListener("click", () => {
      daily.classList.add("active");
      weekly.classList.remove("active");
      monthly.classList.remove("active");
      if (daily.classList.contains("active")) {
        timeFrames.forEach((time) => (time.textContent = "Yesterday"));
      }
      for (let i = 0; i <= 5; i++) {
        current[i].textContent = data[i].timeframes.daily.current;
        previous[i].textContent = data[i].timeframes.daily.previous;
      }
    });

    // weekly activities
    weekly.addEventListener("click", () => {
      weekly.classList.add("active");
      monthly.classList.remove("active");
      daily.classList.remove("active");
      if (weekly.classList.contains("active")) {
        timeFrames.forEach((time) => (time.textContent = "Last Week"));
      }
      for (let i = 0; i <= 5; i++) {
        current[i].textContent = data[i].timeframes.weekly.current;
        previous[i].textContent = data[i].timeframes.weekly.previous;
      }
    });

    // Monthly activities
    monthly.addEventListener("click", () => {
      monthly.classList.add("active");
      daily.classList.remove("active");
      weekly.classList.remove("active");
      if (monthly.classList.contains("active")) {
        timeFrames.forEach((time) => (time.textContent = "Last Month"));
      }
      for (let i = 0; i <= 5; i++) {
        current[i].textContent = data[i].timeframes.monthly.current;
        previous[i].textContent = data[i].timeframes.monthly.previous;
      }
    });
  });
