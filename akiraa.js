let Function = require("./lib/function.js");
let { BingImageCreator } =  require("./scrape/bingimg")

class Scraper {
      Api = require("./scrape/api")
      Gpt = require("./scrape/gpt")
      Random = require("./scrape/random")
      Download = require("./scrape/download")
      Other = require("./scrape/scraper")
      Tools = require("./scrape/tools")
      Ai = {
        Bingimg: BingImageCreator
       }
    }
    
module.exports = {
Function: Function,
Scraper: Scraper,
Store: require("./lib/store"),
Uploader: require("./lib/uploader"),
Sticker: require("./lib/sticker"),
Ezgif: require("./lib/webp2mp4"),
Lib: {
 converter: require("./lib/converter"),
  exif: require("./lib/exif"),
  color: require("./lib/color"),
  stabilizer: require("./lib/functions")
   }
};