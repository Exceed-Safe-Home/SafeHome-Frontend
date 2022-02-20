const returnPercentage = (e, type) => {
  if (type === "water_level") {
    let epc = (e / 1900) * 100;
    return epc.toFixed(2);
  }
  if (type === "gas") {
    if (e <= 1200) {
      return 0;
    } else {
      return 100;
    }
  }
  if (type === "smoke") {
    let epc = ((e) / 2000) * 100;
    return epc.toFixed(2);
  }
  if (type === "flame") {
    let epc = (Math.abs(e - 2700) / 2300) * 100;
    return epc.toFixed(2);
  }
  if (type === "shake") {
    if (e == 0) {
      return 100;
    } else {
      return 0;
    }
  }
};

export default returnPercentage;
