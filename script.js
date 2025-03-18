const API = "NMFMV24NU7LYE37GHNHVZFKC3";

async function getData(city = "london") {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API}`;
  const res = await fetch(url, { mode: "cors" });
  const data = await res.json();
  const specificData  = getSpecificData(data);
  console.log(specificData);
}

function getSpecificData(data) {
  return {
    address: data.resolvedAddress,
    timezone: data.timezone,
    description: data.description,
  };
}

getData('Adama');
