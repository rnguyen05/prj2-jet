
'use strict';
var bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
      
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
        allowNull: true,
        validate: {
           isEmail: true
        }
    
    },firstname: {
      type: DataTypes.STRING(100),
      allowNull: true
  },
  lastname:{
      type: DataTypes.STRING(100),
      allowNull: true
  },
  address:{
      type: DataTypes.STRING(300),
      allowNull: true
  },
  phonenumber:{
      type: DataTypes.STRING(50),
      allowNull: true
  },
  verified:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
   }
 
  },{
    
  // instanceMethods: {
  //       validPassword: function (password) {
  //         console.log("password", this.password)
  //         return bcrypt.compareSync(password, this.password);
  //       }
  //     },
      
      hooks: {
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Trip, {
            onDelete: "cascade"
        });
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
       
        beforeCreate: function(User, options, cb) {
          User.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(10), null);
          console.log("user.password",User.password);
         // cb(null, options);

          
        }
      }
    });
    User.prototype.validPassword = function (password) {
      console.log("password", this.password)
          return bcrypt.compareSync(password, this.password);
    }
    return User;
    
  }; 
    