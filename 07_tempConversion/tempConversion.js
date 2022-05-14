const ftoc = function(far) {
  let celc = 0;
  celc = far - 32;
  celc = celc * ( 5 / 9);
  celc *= 10;
  celc =Math.round(celc);
  celc /= 10;
  return celc;
};

const ctof = function(celc) {
  let far = 0;
  far = celc * (9 / 5);
  far += 32;
  far *= 10;
  far =Math.round(far);
  far /= 10;
  return far;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
