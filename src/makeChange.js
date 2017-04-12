'use strict';

function makeChange(totalCost, cash) {
  var changeInCoins;
  var coins = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0
  }
  var change = cash - totalCost;

  if (change <= 0 || totalCost === undefined || cash === undefined) {
    return 'No change for you!'
  }

  var getQuarters = Math.floor(change / 25)
  coins.quarters += getQuarters;
  changeInCoins = change - getQuarters * 25;

  var getDimes = Math.floor(changeInCoins / 10);
  coins.dimes += getDimes;
  changeInCoins = changeInCoins - getDimes * 10;

  var getNickels = Math.floor(changeInCoins / 5);
  coins.nickels += getNickels;
  changeInCoins = changeInCoins - getNickels * 5;

  var getPennies = Math.floor(changeInCoins);
  coins.pennies = getPennies;

  return coins;
}
module.exports = makeChange;
