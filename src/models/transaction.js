"use strict";

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      Date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      Amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Billers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Memo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Source: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Transactions",
      timestamps: true,
    }
  );

  //   Transaction.associate = function (models) {
  //     // Define associations here if needed
  //   };

  return Transaction;
};
