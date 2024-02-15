const getActualTime = (expiration) => {
  if (expiration) {
    let fechaActual = new Date();
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    return Math.floor(fechaActual.getTime() / 1000.0);
  } else {
    return Math.floor(new Date().getTime() / 1000.0);
  }
};

module.exports = getActualTime;
