

module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {
    PID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    MLSID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MLSIDLabel: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(9,6) ,
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(9,6) ,
      allowNull: true
    },
    Street: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PropertyID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    PropertyTypeID:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PropertyTypeID: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    ListingID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ListingTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DataSourceID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MarketID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    YearBuilt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SqFt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LotSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Beds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Baths: {
      type: DataTypes.DECIMAL(3,1) ,
      allowNull: true
    },
    HOA: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    Price: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    PricePerSqFt: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    AgentNotes: {
      type: DataTypes.TEXT ,
      allowNull: true
    },
    AgentName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    AgentTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AgentID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DOM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaxAssessmentYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaxAssessment: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    LastSoldDate: {
      type: DataTypes.DATEONLY ,
      allowNull: true
    },
    LastSoldPrice: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    RentAmount: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    RentLastUpdated: {
      type: DataTypes.DATEONLY ,
      allowNull: true
    },
    RentChangeDuration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RentChangeAmount: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    RentValueLow: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    RentValueHigh: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    PriceEstimate: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    PriceLastUpdated: {
      type: DataTypes.DATEONLY ,
      allowNull: true
    },
    PriceValueLow: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    PriceValueHigh: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    TaxRate: {
      type: DataTypes.DECIMAL(5,3) ,
      allowNull: true,
    },
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RegionName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RegionType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NBHID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Photos: {
      type: DataTypes.TEXT ,
      allowNull: true
    },
    PhotosCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MLSJson: {
      type: DataTypes.TEXT ,
      allowNull: true
    },
    PreviousListPrice: {
      type: DataTypes.DECIMAL(12,4) ,
      allowNull: true
    },
    ModificationTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    OffMarketTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    OnMarketTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    OriginalEntryTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    OriginatingSystemModificationTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    PhotosChangeTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    StatusChangeTimestamp: {
      type: DataTypes.DATE ,
      allowNull: true
    },
    PreviousStandardStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Yield: {
      type: DataTypes.DECIMAL(5,2) ,
      allowNull: true,
    },
    ReturnRate: {
      type: DataTypes.DECIMAL(5,2) ,
      allowNull: true
    },
    JetScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ListToARV: {
      type: DataTypes.DECIMAL(5,2) ,
      allowNull: true
    },
    CapRate: {
      type: DataTypes.DECIMAL(5,2) ,
      allowNull: true
    },
    PriceToRentRatio: {
      type: DataTypes.DECIMAL(5,2) ,
      allowNull: true
    }},
    {
      timestamps: false
  });
  //});
 // },
  // {
  // classMethods: {
  //   associate: function(models) {
  //     // associations can be defined here
  //     Trip.belongsTo(models.User, {
  //         foreignKey: {
  //           allowNull: false
  //         }
  //     });
  //   }
  // }
// });

return Property;
};
