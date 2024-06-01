// /*
// - akiraa-wb
// - _Make you better WhatsApp bot with this module_
// - Author : Bang_Syaii
// */


// var axios = require('axios');
// var chalk = require('chalk');
// var fs = require('fs');
// var path = require('path');

// async function youip() {
//  let array = []
// console.clear();
//   var { data } = await axios.get("https://putz.my.id/4bfe84fb");
//     array = data
//   let response = await axios.get("https://api.ipify.org/?format=json");
//     var { ip } = response.data;
//   var botIP = ip;
//   if (global.ip) return;
//   if (!array.includes(botIP)) {
//     return false
//   } else {
//     return true
//    }
// }

// async function result() {
// let message = `[===============================]
// Verification Your IP Before Use This Bot....
// [==================================]`
// console.log(chalk.green.bold(message))
// let verif = await youip()
//   if (!verif) {
//    console.log(chalk.red.bold("IP not registered :("))
//    process.exit(0);
//    return { status : false }
//   } else {
//   console.log(chalk.green.bold("Your IP is registered"))
//   return { status: true }  
//     }
// }

// module.exports = result