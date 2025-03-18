const form = document.querySelector("form");
const isLoading = document.querySelector(".loading");
const wrapper = document.querySelector(".wrapper");

const address = document.querySelector(".address");
const timeZone = document.querySelector(".time-zone");
const description = document.querySelector(".description");

async function getData(city = "london") {
  const API = "NMFMV24NU7LYE37GHNHVZFKC3";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`;
  isLoading(true);
  const res = await fetch(url, { mode: "cors" });
  const data = await res.json();
  const specificData = getSpecificData(data);
  isLoading(false);
}

function getSpecificData(data) {
  return {
    address: data.resolvedAddress,
    timezone: data.timezone,
    description: data.description,
  };
}

function isLoading(val) {
  if (val) {
    isLoading.style.display = "block";
  } else {
    isLoading.style.display = "none";
  }
}

function displayResult(data) {
  address.textContent = data.address;
  timeZone.textContent = data.timeZone;
  description.textContent = data.description;

  wrapper.style.display = "flex";
}

getData("Adama");
