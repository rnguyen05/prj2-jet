
module.exports = function (sequelize, DataTypes) {
    var savedProperty = sequelize.define("savedProperty", {
        MLSID: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        PID: {
            type: DataTypes.INTEGER, 
            allowNull: true
        }
    });
    return savedProperty;
}