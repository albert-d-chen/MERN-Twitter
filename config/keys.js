// module.exports = {
//   mongoURI:
//     "mongodb+srv://albertdchen:WeE6plqweEXLhOtN@merntwitter.ecpxq.mongodb.net/MERNTwitterdb?retryWrites=true&w=majority",
//   secretOrKey: 'secret'
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}