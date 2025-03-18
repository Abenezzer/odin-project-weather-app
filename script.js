const API = "NMFMV24NU7LYE37GHNHVZFKC3";

async function getData(city = "london") {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`;
  const res = await fetch(url, { mode: "cors" });
  const data = await res.json();
  return getSpecificData(data);
}

getData("Adama");

function getSpecificData(data) {
  return {
    address: data.resolvedAddress,
    timeZone: data.timeZone,
    description: data.description,
  };
}
