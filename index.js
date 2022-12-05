const userInfo = require('./information.js');
const cowsay = require('cowsay');
console.log(cowsay.say({
    text : `I'm ${userInfo.nom} from ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));