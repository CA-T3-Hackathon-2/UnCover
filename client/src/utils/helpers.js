const locationToCoords = {
  brisbane: [-27.4701, 153.021],
  goldCoast: [-28.0003, 153.4309],
  newcastle: [-32.9283, 151.7817],
  sydney: [-33.8688, 151.2093],
  melbourne: [-37.8136, 144.9631],
  adelaide: [-34.9285, 138.6007],
  perth: [-31.9523, 115.8613],
  darwin: [-12.4637, 130.8444],
};

const categoryIds = {
  music: 6,
  performingarts: 1,
  sportsandoutdoors: 7,
  festivalsandlifestyle: 190,
  exhibitions: 11,
  workshopsandeducation: 3,
  allevents: 246,
};

function dateFormatted(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export { locationToCoords, categoryIds, dateFormatted };
