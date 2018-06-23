
var db = require('../models');
var Sequelize = require('sequelize');
var propertyArr; //for client side filtering purpose
var searchLocation; //for forming url purpose
var searchPriceRange; //for forming url purpose

exports.index = function (req, res) {
  var location = req.params.location;
  if (isNaN(req.params.location)) {
    let locationArr = req.params.location.split(",");
    let priceRange = req.params.pricerange;

    let minPrice = 0;
    let maxPrice = 0;

    switch (priceRange) {
      case "1":
        minPrice = 0;
        maxPrice = 200000;
        break;

      case "2":
        minPrice = 200000;
        maxPrice = 500000;
        break;
      case "3":
        minPrice = 500000;
        maxPrice = 800000;
        break;
      case "4":
        minPrice = 800000;
        maxPrice = 1000000;
        break;
      case "5":
        minPrice = 1000000;
        maxPrice = 1500000;
        break;
      case "6":
        minPrice = 1500000;
        maxPrice = 2000000;
        break;
      case "7":
        minPrice = 2000000;
        maxPrice = 100000000;
        break;
    }
    let city = locationArr[0].trim();
    let state = "CA";
    const Op = Sequelize.Op;
    if (parseInt(priceRange) != parseInt(10)) {
      db.Property.findAll({
        where: {
          City: {
            $eq: city
          },
          State: {
            $eq: state
          },
          [Op.and]: [{ Price: { $gte: minPrice } }, { Price: { $lte: maxPrice } }]
        },
        order: [
          ['Price', 'ASC']
        ]
      }
      ).then(function (dbProperty) {
        propertyArr = dbProperty;
        console.log(propertyArr);
        res.render('properties/properties', {
          layout: "main-properties",
          property: dbProperty
        }
        );
      });
    } else if (parseInt(priceRange) == parseInt(10)) {
      db.Property.findAll({
        where: {
          City: {
            $eq: city
          },
          State: {
            $eq: state
          }
        },
        order: [
          ['Price', 'ASC']
        ]
      }
      ).then(function (dbProperty) {
        propertyArr = dbProperty;
        console.log(propertyArr);
        res.render('properties/properties', {
          layout: "main-properties",
          property: dbProperty
        }
        );
      });
    }

  }
};


exports.filter = function (req, res) {
  console.log("something");
  var condition = [];
  // /:location/:pricerange/:lotSize/:propertyTypeId/:listingTypeId/:sqft/:beds/:baths/:status
  var location = req.params.location;
  var pricerange = req.params.pricerange;
  var lotSize = req.params.lotSize;
  var propertyTypeId = req.params.propertyTypeId;
  var sqft = req.params.sqft;
  var beds = req.params.beds;
  var baths = req.params.baths;
  var status = req.params.status;
  // var tempFlag=true;
  console.log("propertyArr.length n  ", propertyArr.length);
  var homes = [];
  propertyArr.forEach(function (Property) {
    let tempFlag = true;
    console.log("Property.dataValues.LotSize", Property.dataValues.LotSize);
    if ((!isNaN(lotSize)) && (tempFlag)) {
      if (Property.dataValues.LotSize != location) {
        tempFlag = false;
      }
    }
    if ((!isNaN(propertyTypeId)) && (tempFlag)) {
      if (Property.dataValues.PropertyTypeID != propertyTypeId) {
        tempFlag = false;
      }
    }
    if ((!isNaN(sqft)) && (tempFlag)) {
      if (Property.dataValues.Sqft != sqft) {
        tempFlag = false;
      }
    }
    if ((!isNaN(beds)) && (tempFlag)) {
      if (Property.dataValues.Beds != beds) {
        tempFlag = false;
      }
    }
    if ((!isNaN(baths)) && (tempFlag)) {
      if (Property.dataValues.Baths != baths) {
        tempFlag = false;
      }
    }
    if ((!isNaN(status)) && (tempFlag)) {
      if (Property.dataValues.Status != status) {
        tempFlag = false;
      }
    }
    //  if( (!isNaN(lotSize)&&(Property.dataValues.LotSize === location)) &&
    //       (!isNaN(propertyTypeId)&&(Property.dataValues.PropertyTypeID === propertyTypeId)) &&
    //       (!isNaN(sqft)&&(Property.dataValues.Sqft === sqft)) &&
    //       (!isNaN(beds)&&(Property.dataValues.Beds === beds)) &&
    //       (!isNaN(baths)&&(Property.dataValues.Baths === baths)) &&
    //       (!isNaN(status)&&(Property.dataValues.Baths === Status))
    //     ) {
    if (tempFlag) {
      homes.push(Property);
    }
    console.log("homes.length:", homes.length);
    res.render('properties/properties', {
      layout: "main-properties",
      property: homes
    });
    //if((Property.dataValues.LotSize ==lotSize) &&)
  });
}

//Get data for property detail when View Detail button clicked
exports.showDetail = function (req, res) {
  const pid = req.query.pid;
  console.log("pid", req);
  //const hostname = window.location.protocol + "//" + window.location.host;
  const dUrl = req.url;

  console.log(">>>>>>>>>url",dUrl);

  db.Property.findAll({
        where: {
          PID: {
            $eq: pid
          }
        }
       }).then(function (dbProperty) {
        //propertyArr = dbProperty;
        console.log(dbProperty);
        //res.json(dbProperty);
        //res.json("/properties"+dUrl);
        res.render('properties/propertiesDetail', {
            layout: "main-proDetails",
            property: dbProperty[0]
          }
        );
      });
  // }).then(function (pdetail) {
  //   console.log(">>>>>>pdetail>>>>>>",pdetail);
  //   res.render('properties/propertiesDetail', { 
  //     layout: 'main-proDetails', 
  //     property: pdetail[0] 
  //   });
  // });
}





// exports.lotsize = function (req, res) {
//   const lotSizeValue = req.params.lotSize;
//   const lotsize = 0;
//   console.log(propertyArr);
//   console.log(".......lotsize>>>>>>", lotsize);
//   console.log(req);
//   console.log(lotSizeValue);

//   switch(parseInt(lotSizeValue)){
//     case 1:
//       lotsize >= 2000;
//       break;
//     case 2:
//     lotsize >= 3000;
//       break;
//     case 3:
//     lotsize >= 4000;
//       break;
//     case 4:
//     lotsize >= 5000;
//     break;
//     case 5:
//     lotsize >= 6000;
//     break;
//     case 6:
//     lotsize >= 7000;
//     break;
//   }//End of switch


//   propertyArr.findAll({
//       where: {
//         lotSize: {
//           $gte: lotsize
//         }
//       },
//       order: [
//         ['Price', 'ASC']
//       ] 
//   }).then (function (newDbProperty) {
//     propertyArr = newDbProperty;
//       res.render('properties/properties', {
//         layout: "main-properties",
//         property: newDbProperty
//       }
//     );
//   });


// console.log(".......lotsize>>>>>>", lotsize);
// console.log(req);
//   db.Property.findAll({
//     where: {
//       City:{
//         $eq: city
//       },
//       State:{
//         $eq: state
//       },
//       lotSize: {
//         $gte: lotsize
//       }
//     },
//     order: [
//       ['Price', 'ASC']
//     ]
//    }
//   ).then(function (dbProperty) {
//     //propertyArr = dbProperty;
//     console.log(dbProperty);
//     res.render('properties/properties', {
//         layout: "main-properties",
//         property: dbProperty
//       }
//     );
//   });
//};//end of exports.lotsize

// <<<<<<< propertiesFilters
// =======
// exports.filter = function (req, res) {
//   var lotSize = 0;
//   if(req.params.lotSize!="0"){
//     lotSize=req.params.lotSize;


//   console.log(">>>>>>>>>>>>>>>>lotSize<<<<<<<<<<<",lotSize);
//   switch(lotSize){
//     case "1":
//       lotSize = 2000;
//       break;
//     case "2":
//       lotSize = 3000;
//       break;
//     case "3":
//       lotSize = 4000;
//       break;
//     case "4":
//       lotSize = 5000;
//     break;
//     case "5":
//       lotSize = 7000;
//     break;
//     case "6":
//       lotSize = 8000;
//     break;
//   };
// }
// var propertyTypeId =0;
// if(req.params.propertyTypeId!="0"){
//   propertyTypeId = req.params.propertyTypeId;
// }
// if(req.params.beds!="0"){
//   propertyTypeId = req.params.beds;
// }
// // event.preventDefault();
//   console.log("lotsize**************************",lotSize);
//   var homes = [];
//   lotSize =70000;
//         console.log("This is ghabl");

//     // for(let i=0;i<propertyArr.length;i++){
//     //   console.log("This is how array is",i);
//     // }
//     propertyArr.forEach(function(Property) {
//       // if(lotSize){
//       //   Property.dataValues.LotSize >= lotSize
//       // }
//       // if(propertyTypeId){
//       //   Property.dataValues.PropertyTypeID
//       // }
//       // if(((lotSize)&&(Property.dataValues.LotSize >= 10))
//       //     && ((propertyTypeId)&&(Property.dataValues.PropertyTypeID===propertyTypeId))){
//       //       homes.push(Property);

//       // }
//       if (Property.dataValues.LotSize >= lotSize
//           && Property.dataValues.PropertyTypeID >= 1
//           && Property.dataValues.Beds >= 2
//           && Property.dataValues.Baths >= 2
//       ) {
//         console.log("Price of this house!!!!!!",Property.dataValues.Price);
//         console.log("This is baad");
//           homes.push(Property);
//       }

//     });


//   console.log("homes    LENGTHHHHHH   @@@@@@@@@@@@@@",homes.length);

//   res.render('properties/properties'
//       , {
//         layout: "main-properties"
//         ,
//         property: homes
//       }
//     );

// }

// //Price Range Filter
// exports.priceFilter = function (req, res) {
//   let priceFilter = req.params.priceRange;
//   console.log("price Filter in property_controller: ",priceFilter);
// >>>>>>> master

// exports.filter = function (req, res) {
//   var lotSize = 0;
//   if(req.params.lotSize!="0"){
//     lotSize=req.params.lotSize;


//   console.log(">>>>>>>>>>>>>>>>lotSize<<<<<<<<<<<",lotSize);
//   switch(lotSize){
//     case "1":
//       lotSize = 2000;
//       break;
//     case "2":
//       lotSize = 3000;
//       break;
//     case "3":
//       lotSize = 4000;
//       break;
//     case "4":
//       lotSize = 5000;
//     break;
//     case "5":
//       lotSize = 7000;
//     break;
//     case "6":
//       lotSize = 8000;
//     break;
//   };
// }
// var propertyTypeId =0;
// if(req.params.propertyTypeId!="0"){
//   propertyTypeId = req.params.propertyTypeId;
// }
// if(req.params.beds!="0"){
//   propertyTypeId = req.params.beds;
// }
// // event.preventDefault();
//   console.log("lotsize**************************",lotSize);
//   var homes = [];
//   lotSize =70000;
//         console.log("This is ghabl");

//     // for(let i=0;i<propertyArr.length;i++){
//     //   console.log("This is how array is",i);
//     // }
//     propertyArr.forEach(function(Property) {
//       // if(lotSize){
//       //   Property.dataValues.LotSize >= lotSize
//       // }
//       // if(propertyTypeId){
//       //   Property.dataValues.PropertyTypeID
//       // }
//       // if(((lotSize)&&(Property.dataValues.LotSize >= 10))
//       //     && ((propertyTypeId)&&(Property.dataValues.PropertyTypeID===propertyTypeId))){
//       //       homes.push(Property);

//       // }
//       if (Property.dataValues.LotSize >= lotSize
//           && Property.dataValues.PropertyTypeID >= 1
//           && Property.dataValues.Beds >= 2
//           && Property.dataValues.Baths >= 2
//       ) {
//         console.log("Price of this house!!!!!!",Property.dataValues.Price);
//         console.log("This is baad");
//           homes.push(Property);
//       }

//     });


//   console.log("homes    LENGTHHHHHH   @@@@@@@@@@@@@@",homes.length);

//   res.render('properties/properties'
//       , {
//         layout: "main-properties"
//         ,
//         property: homes
//       }
//     );

// }

























// //lotSize Filter
// exports.lotSize = function (req, res) {
//   let lotSize = req.params.lotSize;
//   console.log(">>>>>>>>>>>>>>>>lotSize<<<<<<<<<<<",lotSize);
//   switch(lotSize){
//     case "1":
//       lotSize = 2000;
//       break;
//     case "2":
//       lotSize = 3000;
//       break;
//     case "3":
//       lotSize = 4000;
//       break;
//     case "4":
//       lotSize = 5000;
//     break;
//     case "5":
//       lotSize = 7000;
//     break;
//     case "6":
//       lotSize = 8000;
//     break;
//   };
// // event.preventDefault();
//   console.log("lotsize**************************",lotSize);
//   var homes = [];
//   lotSize =70000;
//         console.log("This is ghabl");
// //        // var obj = $.parseJSON(propertyArr);
// //   //$.each(obj.collection.Property, function(i, val){
// //    // console.log("propertArr**********************",propertyArr);
// //     //console.log("dbproperty*******************",dbProperty);

//     for(let i=0;i<propertyArr.length;i++){
//       console.log("This is how array is",i);
//     }
//     propertyArr.forEach(function(Property) {
//       if (Property.dataValues.Price >= 700000
//           && Property.dataValues.SqFt >= 1000
//           && Property.dataValues.Beds >= 2
//           && Property.dataValues.Baths >= 2
//       ) {
//         console.log("Price of this house!!!!!!",Property.dataValues.Price);
//         console.log("This is baad");
//           homes.push(Property);
//       }
//     });

//   //});
//  // console.log("homes@@@@@@@@@@@@@@",homes);
//   console.log("homes    LENGTHHHHHH   @@@@@@@@@@@@@@",homes.length);

//   res.render('properties/properties'
//       , {
//         layout: "main-properties"
//         ,
//         property: homes
//       }
//     );
//   // db.Property.findAll({
//   //   where: {
//   //     LotSize: {
//   //       $gte: lotSize
//   //     }
//   //   },
//   //   order: [
//   //     ['LotSize', 'ASC']
//   //   ]
//   //  }
//   // ).then(function (dbProperty) {
//   //   // console.log("$$$$$$$$$$",dbProperty);
//   //   res.render('properties/properties'
//   //     , {
//   //       layout: "main-properties"
//   //       ,
//   //       property: dbProperty
//   //     }
//   //   );
//   // });

// };


// //Price Range Filter
// exports.priceFilter = function (req, res) {
//   let priceFilter = req.params.priceRange;
//   console.log("price Filter in property_controller: ",priceFilter);

//   db.Property.findAll({
//     where: {
//       Price: {
//         $gte: 0,
//         $lte: 700000
//       }
//     }
//   }).then(function(dbProperty){
//     console.log("after price filter",dbProperty);
//     res.render("/properties/:locatoion/:priceRange", {
//       layout: 'main-properties',
//       property: dbProperty
//     });
//   });
// };

// exports.showDetail = function(req, res) {
//   let pid = req.params.pid;
//   console.log("@@@@@@@@@@@@",pid);
//   db.Property.findAll({
//     where: {
//       PID: pid

//     }
//   }).then(function(dbProperty)
//    {
//      //console.log(res);
//    // console.log("$###@@!@@@@@",dbProperty[0].dataValues.PID);
//     console.log("4$$$$$$$$$$$$$$$$",dbProperty);
//     res.render('properties/propertiesDetail',{   layout: 'main-properties',property: dbProperty[0]});

//     });


// }



// //Properties filter
// exports.priceFilter = function (req, res) {
//   let priceFilter = req.params.priceRange;
//   console.log("price Filter in property_controller: ",priceFilter);

//   db.Property.findAll({
//     where: {
//       Price: {
//         $gte: 0,
//         $lte: 700000
//       }
//     }
//   }).then(function(dbProperty){
//     console.log("after price filter",dbProperty);
//     res.render("/properties/:location/:priceRange", {
//       layout: 'main-properties',
//       property: dbProperty
//     });
//   });
// };

