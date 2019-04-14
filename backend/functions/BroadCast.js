const getUsers = require("./GetUsers").getUsers;
const sendToConnection = require("./SendToConnection").sendToConnection

exports.broadcast = (event, CHATCONNECTION_TABLE, dynamo, AWS) => {
  return getUsers(CHATCONNECTION_TABLE, dynamo).then(connectionData => {
    return connectionData.Items.map(connectionId => {
      return sendToConnection(event, connectionId.connectionId, AWS);
    });
  });
}
