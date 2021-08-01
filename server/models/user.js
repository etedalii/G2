// Some code required for authentication which we should add later.

const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: '',
      trim: true,
      require: "username is required",
    },
    password: {
      type: String,
      default: "",
      trim: true,
      require: "password is required",
    },
    email: {
        type: String,
        default: '',
        trim: true,
        require: "email is required",
      },
      name: {
        type: String,
        default: '',
        trim: true,
      },
      lastname: {
        type: String,
        default: '',
        trim: true,
      },
      userType: {
        type: Boolean,
        trim: true,
      },
  },
  {
    collection: "users",
  }
);

//Configure option for user model
let options = ({
  missingPasswordError: 'Wrong / Missing Password'
})

User.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', User);
module.exports.User = mongoose.model('User', User);