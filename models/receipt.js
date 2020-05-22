module.exports = function(sequelize, DataTypes) {
  var Receipt = sequelize.define("Receipt", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transactionNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    tax: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    vendor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    justification: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    freezeTableName: true,
    timestamps: true
  });

  return Receipt;
};