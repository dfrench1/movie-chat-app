const broadcast = require("./functions/BroadCast").broadcast
const connectionMethod = require("./functions/Connection").connectionMethod
const AWS = require("aws-sdk");
require("aws-sdk/clients/apigatewaymanagementapi");

const dynamo = new AWS.DynamoDB.DocumentClient();
const CHATCONNECTION_TABLE = process.env.CONNECTION_TABLE;
const response = (code, message) => ({
  statusCode: code,
  body: JSON.stringify(message)
});

module.exports.connectionHandler = (event, context, callback) => {
  connectionMethod(event, CHATCONNECTION_TABLE, dynamo, response, callback)
};

module.exports.defaultHandler = async (event, context, callback) => {
  callback(null, response(200, 'default'))
};

module.exports.sendMessageHandler = (event, context, callback) => {
  broadcast(event, CHATCONNECTION_TABLE, dynamo, AWS)
    .then(() => {
      callback(null, response(200, 'message sent'))
    })
    .catch(err => {
      callback(null, response(400, err))
    });
};
