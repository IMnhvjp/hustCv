
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        username: {
            type: DataTypes.STRING(50),
            unique: true
        },


    }, {

        timestamps: false
    })

    return User

}
