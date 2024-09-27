var money = new OmegaNum(1);
var prestige = new OmegaNum(0);
var moneygain = new OmegaNum(0);
var u1 = new OmegaNum(0);
var tps = 60;
function totalPrestigeBoost() {
  var prestigeBoost = prestige.add(1).pow(3);
  return prestigeBoost;
}
function totalU1Boost() {
  var u1Boost = OmegaNum.pow(1.2,u1)
  return u1Boost
}
function tick() {
  var gain = new OmegaNum(1);
  gain = gain.mul(totalPrestigeBoost());
  gain = gain.mul(totalU1Boost());
  money = money.add(gain)
  document.getElementById("Money").innerHTML = money.toString()
}
setInterval(tick,50);
