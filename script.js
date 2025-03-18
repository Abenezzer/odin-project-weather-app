const form = document.querySelector("form");
const isLoading = document.querySelector(".loading");
const wrapper = document.querySelector(".wrapper");

const address = document.querySelector(".address");
const timeZone = document.querySelector(".time-zone");
const description = document.querySelector(".description");
const inputVal = document.querySelector("#input-val");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputVal.value);
  getData(inputVal.value);
});

async function getData(city) {
  console.log(city);
  const API = "NMFMV24NU7LYE37GHNHVZFKC3";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`;
  loading(true);
  const res = await fetch(url, { mode: "cors" });
  const data = await res.json();
  const specificData = getSpecificData(data);
  loading(false);
  displayResult(specificData);
}

function getSpecificData(data) {
  return {
    address: data.resolvedAddress,
    timezone: data.timezone,
    description: data.description,
  };
}

function loading(val) {
  if (val) {
    isLoading.style.display = "block";
  } else {
    isLoading.style.display = "none";
  }
}

function displayResult(data) {
  console.log(data);
  address.textContent = data.address;
  timeZone.textContent = data.timezone;
  description.textContent = data.description;

  wrapper.style.display = "flex";
}
